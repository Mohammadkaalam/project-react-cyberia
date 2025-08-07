// src/components/TodoStats.tsx

import { useAppSelector } from "../store/hooks";

export default function TodoStats() {
  const todos = useAppSelector((state) => state.todos.items);
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;

  return (
    <div className="alert alert-info d-flex justify-content-between align-items-center">
      <span>تعداد کل وظایف: <strong>{total}</strong></span>
      <span>انجام‌شده: <strong>{completed}</strong></span>
    </div>
  );
}
