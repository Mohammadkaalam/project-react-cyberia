import DarkModeToggle from '../components/DarkModeToggle';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoStats from '../components/TodoStats';

export default function Home() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <DarkModeToggle />
      </div>
      <TodoStats/>
      <TodoForm />
      <TodoList />
    </>
  );
}
