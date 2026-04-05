import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Home from './pages/Home.jsx';
import ConceptDetail from './pages/ConceptDetail.jsx';
import Comparison from './pages/Comparison.jsx';
import Demo from './pages/Demo.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concept/:id" element={<ConceptDetail />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
