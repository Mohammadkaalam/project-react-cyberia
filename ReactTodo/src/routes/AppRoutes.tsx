import { Routes, Route } from 'react-router-dom';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element />
      <Route path="*" element />
    </Routes>
  );
}
