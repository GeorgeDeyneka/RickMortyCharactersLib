export abstract class StorageService {
  constructor(private storage: Storage) {}

  public getData<T>(key: string, returnedValue?: any): T | any {
    if (this.storage.getItem(key) != null) {
      return JSON.parse(this.storage.getItem(key)!);
    }
    return returnedValue || '';
  }

  public setData<T>(key: string, data: T): void {
    this.storage.setItem(key, JSON.stringify(data));
  }

  public removeData(key: string): void {
    this.storage.removeItem(key);
  }
}
