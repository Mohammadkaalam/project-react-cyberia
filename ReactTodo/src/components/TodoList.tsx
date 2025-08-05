import { useAppSelector } from '../store/hooks';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.items);

  return (
    <ul className="list-group">
      {todos.length === 0 ? (
        <li className="list-group-item text-center">وظیفه‌ای وجود ندارد.</li>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
}
