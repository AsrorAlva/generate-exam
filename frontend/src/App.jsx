import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Materi from "./pages/materi/materi";
import UploadLKS from "./pages/materi/uploadLKS";
import Bab from "./pages/materi/bab";
import Indikator from "./pages/materi/indikator";
import Validasi from "./pages/materi/validasi";
import Uts from "./pages/exam/uts";
import Uas from "./pages/exam/uas";
import Uh from "./pages/exam/uh";
import Tryout from "./pages/exam/tryout";
import BuatSoal from "./pages/buatsoal";
import BankSoal from "./pages/banksoal";
import ArsipUjian from "./pages/arsipujian";
import Settings from "./pages/pengaturan";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        {/* Materi */}
        <Route path="/materi" element={<Materi />} />
        <Route path="/materi/upload" element={<UploadLKS />} />
        <Route path="/materi/bab" element={<Bab />} />
        <Route path="/materi/indikator" element={<Indikator />} />
        <Route path="/materi/validasi" element={<Validasi />} />
        {/* Exam */}
        <Route path="/exam/uts" element={<Uts />} />
        <Route path="/exam/uas" element={<Uas />} />
        <Route path="/exam/uh" element={<Uh />} />
        <Route path="/exam/tryout" element={<Tryout />} />
        <Route path="/buat-soal" element={<BuatSoal />} />
        <Route path="/bank-soal" element={<BankSoal />} />
        <Route path="/arsip-ujian" element={<ArsipUjian />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;