import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-start bg-light py-5">
        <div className="w-100" style={{ maxWidth: '700px' }}>
          <div className="bg-white p-4 rounded shadow-sm">
            <h2 className="text-center mb-4 text-primary">📝 لیست وظایف من</h2>
            <AppRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
