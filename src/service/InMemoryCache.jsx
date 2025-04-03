
class InMemoryCache {
  static cacheVersion = new Date().getTime() + '';
  static cache = {};
  defaultTtlInMilliSec = 30 * 60 * 1000; // 30 Mins Default

  CacheModule = { refData: 'ref-data' };

  keyModule = (key, module) => {
    return key + '#' + module;
  };

  get(key, module, fetchPromiseFunction, ttlInSec) {
    const cachedResponse = InMemoryCache.cache[this.keyModule(key, module)];
    const data = null;
    const ttlInMilliSec = ttlInSec
      ? ttlInSec * 1000
      : this.defaultTtlInMilliSec;
    return cachedResponse &&
      !this.isTimeout(cachedResponse.timestamp, ttlInMilliSec)
      ? Promise.resolve(cachedResponse.response)
      : fetchPromiseFunction
        ? this.onMiss(key, module, fetchPromiseFunction)
        : Promise.resolve(data);
  }

  callInProgress = {};
  onMiss = (key, module, fetchPromiseFunction) => {
    const moduleKey = this.keyModule(key, module);
    if (this.callInProgress[moduleKey]) {
      return this.callInProgress[moduleKey];
    }
    const version = InMemoryCache.cacheVersion;
    const fetchPromise = fetchPromiseFunction(key)
      .then((response) => {
        if (version !== InMemoryCache.cacheVersion) {
          return;
        }
        InMemoryCache.cache[moduleKey] = {
          response: response,
          timestamp: new Date().getTime(),
        };
        return response;
      })
      .finally(() => {
        this.callInProgress[moduleKey] = null;
      });
    this.callInProgress[moduleKey] = fetchPromise;

    // Fallback if the funciton won't finish in 30 seconds.
    setTimeout(() => {
      this.callInProgress[moduleKey] = null;
    }, 30000);
    return fetchPromise;
  };

  invalidate = () => {
    InMemoryCache.cacheVersion = new Date().getTime() + '';
    InMemoryCache.cache = {};
  };

  invalidateForKey = (key, module) => {
    InMemoryCache.cache[this.keyModule(key, module)] = null;
  };

  isTimeout = (timestamp, ttlInMilliSec) => {
    if (!timestamp) {
      return true;
    }
    const time = new Date().getTime();
    const sourceTime = parseInt(timestamp) + ttlInMilliSec;
    const isTime = sourceTime < time;
    return isTime;
  };
}

const cache = new InMemoryCache();
export default cache;
