import { v4 as uuidv4 } from 'uuid';
import type { Todo } from './types';
import { loadFromStorage, saveToStorage } from '../../utils/localStorage';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface TodosState {
  items: Todo[];
  sortOrder: "newest" | "oldest" | "category";
}

const initialState: TodosState = {
  items: loadFromStorage(),
  sortOrder: "newest",
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<Todo>) {
        state.items.push(action.payload);
        saveToStorage(state.items);
      },
      prepare(title: string, category: Todo['category']) {
        return {
          payload: {
            id: uuidv4(),
            title,
            category,
            completed: false,
            createdAt: Date.now(),
          },
        };
      },
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveToStorage(state.items);
      }
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.items = state.items.filter((t) => t.id !== action.payload);
      saveToStorage(state.items);
    },
    editTodo(state, action: PayloadAction<{ id: string; title: string }>) {
      const todo = state.items.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        saveToStorage(state.items);
      }
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((todo) => !todo.completed);
    },
    setSortOrder(state, action: PayloadAction<"newest" | "oldest" | "category">) {
      state.sortOrder = action.payload;
    }

  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted, setSortOrder} = todoSlice.actions;
export default todoSlice.reducer;
