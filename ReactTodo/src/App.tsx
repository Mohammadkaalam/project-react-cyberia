import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="container py-4">
        <h1 className="text-center mb-4">📝 To-Do List</h1>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
