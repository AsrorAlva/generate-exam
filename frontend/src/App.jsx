import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Materi from "./pages/materi/materi";
import UploadLKS from "./pages/materi/uploadLKS";
import Bab from "./pages/materi/bab";
import Indikator from "./pages/materi/indikator";
import Validasi from "./pages/materi/validasi";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/materi/upload" element={<UploadLKS />} />
        <Route path="/materi/bab" element={<Bab />} />
        <Route path="/materi/indikator" element={<Indikator />} />
        <Route path="/materi/validasi" element={<Validasi />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;