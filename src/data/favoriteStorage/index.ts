import {IFavoriteStorage, IStorage} from '@data';

export class FavoriteStorage implements IFavoriteStorage {
  private storage: IStorage;
  private readonly fastStorage: Set<string>;

  constructor(storage: IStorage, initialValue: string[] = []) {
    this.storage = storage;
    this.fastStorage = new Set(initialValue);
  }

  setItem = (id: string): void => {
    this.fastStorage.add(id);
    this.storage.setItem(id, id);
  };

  removeItem = (id: string): void => {
    this.fastStorage.delete(id);
    this.storage.removeItem(id);
  };

  hasItem = (id: string): boolean => {
    return this.fastStorage.has(id);
  };

  getAllItems = (): string[] => {
    return Array.from(this.fastStorage);
  };
}
