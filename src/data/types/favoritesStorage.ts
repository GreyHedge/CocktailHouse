export interface IFavoriteStorage {
  setItem: (id: string) => void;
  removeItem: (id: string) => void;
  getAllItems: () => string[];
  hasItem: (id: string) => boolean;
}

export interface IStorage {
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
  getAllKeys: () => Promise<string[]>;
}
