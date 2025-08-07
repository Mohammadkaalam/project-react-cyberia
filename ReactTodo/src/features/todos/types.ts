export type Category = 'personal' | 'work';

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    category: Category;
    createdAt: number;
}
