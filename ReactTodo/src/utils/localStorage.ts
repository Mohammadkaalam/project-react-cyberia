import type { Todo } from "../features/todos/types";

const STORAGE_KEY = 'todos';

export function saveToStorage(todos: Todo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function loadFromStorage(): Todo[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
