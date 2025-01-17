import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Home } from "../views/Home/Home";

export const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} replace />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};
