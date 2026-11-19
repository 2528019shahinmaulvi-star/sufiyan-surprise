
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Password from "./pages/Password";
import Welcome from "./pages/Welcome";
import BalloonSurprise from "./pages/BalloonSurprise";
import Memories from "./pages/Memories";
import LoveLetter from "./pages/LoveLetter";
import Forever from "./pages/Forever";

function ProtectedRoute({ children }) {
  const isUnlocked =
    sessionStorage.getItem("surpriseUnlocked") === "true";

  return isUnlocked ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Password />} />

        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/balloons"
          element={
            <ProtectedRoute>
              <BalloonSurprise />
            </ProtectedRoute>
          }
        />

        <Route
          path="/memories"
          element={
            <ProtectedRoute>
              <Memories />
            </ProtectedRoute>
          }
        />

        <Route
          path="/letter"
          element={
            <ProtectedRoute>
              <LoveLetter />
            </ProtectedRoute>
          }
        />

        <Route
          path="/forever"
          element={
            <ProtectedRoute>
              <Forever />
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
