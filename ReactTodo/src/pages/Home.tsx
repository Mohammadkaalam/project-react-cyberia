import DarkModeToggle from '../components/DarkModeToggle';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <DarkModeToggle />
      </div>
      <TodoForm />
      <TodoList />
    </>
  );
}
