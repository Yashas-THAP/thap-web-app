class LocalStorage {

    
    static load = (keyString: string): any | null => {
        try {
            const jsonStringData = localStorage.getItem(keyString) ?? '';
            return JSON.parse(jsonStringData);
        } catch (error) {
            return null;
        }
    };

    static save = (keyString: string, state: unknown): void => {
        try {
            const jsonStringDataToSave = JSON.stringify(state);
            localStorage.setItem(keyString, jsonStringDataToSave);
        } catch (error) {
            // console.log(error);
        }
    };

    static clear = (keyString: string): void => {
        try {
            localStorage.removeItem(keyString);
        } catch (error) {
            // console.log(error);
        }
    };

    static clearWithPrefix = (keyPrefix: string): void => {
        if (!keyPrefix) return;
        Object.keys(localStorage).forEach((itemKey) => {
            if (itemKey.startsWith(keyPrefix)) {

                window.localStorage.removeItem(itemKey);
            }
        });
    };

    static setWithExpiry = (key: string, value: unknown, ttl: number): void => {
        const now = new Date();

        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        };
        localStorage.setItem(key, JSON.stringify(item));
    };

    static clearLocalStorage = (): void => {
        localStorage?.clear()
    };
}

export default LocalStorage;
