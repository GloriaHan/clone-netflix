import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'

function Routings() {
  return (
    <Router>
      <Routes>
        <Route exec path="/home" element={<LandingPage />} />
        <Route exec path="/login" element={<Navigate to="/login" replace />} />
        <Route exec path="/signup" element={<Navigate to="/signup" replace />} />
        <Route exec path="/signup/planform" element={<Navigate to="/signup/planform" replace />} />
        <Route exec path="/signup/registration" element={<Navigate to="/signup/registration" replace />} />
        <Route exec path="/signup/reform" element={<Navigate to="/signup/reform" replace />} />
        <Route exec path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  )
}

export default Routings
