import DarkModeToggle from '../components/DarkModeToggle';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <>
      <div>
        <DarkModeToggle />
      </div>
      <TodoForm />
      <TodoList />
    </>
  );
}
