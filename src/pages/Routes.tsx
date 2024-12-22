import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './home/App';
import Login from './auth/users/Login';
import Register from './auth/users/Register';
import ForBusiness from './auth/business/ForBusiness';

function BookHubRoutes() {
  return (
    <Router
      future={{
        v7_startTransition: true, // Soporte para `React.startTransition` en actualizaciones de estado
        v7_relativeSplatPath: true, // Resolución de rutas relativas dentro de `*` (splat routes)
      }}
    >
      <Routes>
        <Route path='/*' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/for-businesses' element={<ForBusiness />} />
        <Route path='/about' element={<div>About Us Page</div>} />
        <Route path='/contact' element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
}

export default BookHubRoutes;
