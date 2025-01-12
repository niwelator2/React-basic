import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimplePage from './pages/simplepage';
import Form from './pages/form';
import CookiePage from './pages/Form_cookie'
import ProfilePage from './pages/ProfilePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SimplePage />} />
        <Route path="/login" element={<Form />} />
        <Route path="/login_cookie" element={<CookiePage />} />
        <Route path="/home" element={<h1>Welcome to Home</h1>} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
