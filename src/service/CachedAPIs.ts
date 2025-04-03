import cache from './InMemoryCache';
import axios from './Axios';
import { AxiosResponse } from 'axios';
export class CachedAPI {
  baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  fetchCacheFunction(apiUrl: string, cacheTime: number, key: string,method?: string,reqBody?: undefined): Promise<AxiosResponse> {
    const fetchFunction = (): unknown => {
      const url = this.baseUrl + apiUrl;
      return method === 'POST' ? axios.post(url,reqBody) : axios.get(url);
    };
    return cache.get(key, cache.CacheModule.refData, fetchFunction, cacheTime); // 30 hours ttl.
  }
}

const cachedAPI = new CachedAPI();
export default cachedAPI;
