// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AllAgents from './components/AllAgents';
import AddAgentPage from './pages/AddAgentPage';
import UploadPage from './pages/UploadPage';
import AgentTaskPage from './pages/AgentTaskPage';
import ProtectedLayout from './components/ProtectedLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        {/* All protected routes go under this */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agents" element={<AllAgents />} />
          <Route path="/add-agent" element={<AddAgentPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/tasks" element={<AgentTaskPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
