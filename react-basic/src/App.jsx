import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimplePage from './pages/simplepage';
import Form from './pages/form';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SimplePage />} />
        <Route path="/login" element={<Form />} />
        <Route path="/home" element={<h1>Welcome to Home</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
