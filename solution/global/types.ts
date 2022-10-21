// File to store interfaces and types used globally in the project

export interface Item {
    id?: number;
    name: string;
    price: number;
    calories: number;
}

export interface IApi {
    baseUrl: string;
    getItems: () => Promise<Item[]>;
    postItem: (item: Item) => Promise<Item>;
    deleteItem: (id: number) => Promise<void>;
}