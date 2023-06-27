import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ContentWrapper from './content/ContentWrapper';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContentWrapper />} />
      </Routes>
    </Router>
  );
}
