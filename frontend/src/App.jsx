import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;