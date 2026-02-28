import { useState, useMemo } from "react";
import {
  BookOpen,
  ClipboardList,
  CheckCircle,
  AlertCircle,
  Plus,
  Clock,
} from "lucide-react";

export default function Dashboard() {
  const semesterAktif = "Semester Genap 2024/2025";
  const statusMateri = true;

  const ujianTersedia = [
    { nama: "UH Bab 1 Kelas 7", tanggal: "12 Feb 2025", status: "Terjadwal" },
    { nama: "UTS Semester Genap Kelas 7", tanggal: "10 Mar 2025", status: "Draft" },
    { nama: "UAS Semester Ganjil Kelas 7", tanggal: "20 Jun 2025", status: "Selesai" },
    { nama: "UH Bab 2 Kelas 8", tanggal: "15 Feb 2025", status: "Terjadwal" },
    { nama: "UTS Semester Genap Kelas 8", tanggal: "12 Mar 2025", status: "Draft" },
    { nama: "UAS Semester Ganjil Kelas 8", tanggal: "25 Jun 2025", status: "Selesai" },
    { nama: "UH Bab 1 Kelas 9", tanggal: "18 Feb 2025", status: "Terjadwal" },
    { nama: "UTS Semester Genap Kelas 9", tanggal: "14 Mar 2025", status: "Draft" },
    { nama: "UAS Semester Ganjil Kelas 9", tanggal: "30 Jun 2025", status: "Selesai" },
  ];

  const activities = [
    { title: "Menambahkan Materi Bab 3 Kelas 7", time: "2 jam yang lalu" },
    { title: "Membuat UTS Semester Genap Kelas 7", time: "5 jam yang lalu" },
    { title: "Mengupdate Indikator Penilaian kelas 8", time: "Kemarin" },
    { title: "Menyelesaikan Validasi Materi Kelas 9", time: "3 hari lalu" },
  ];

  /* =======================
     PAGINATION LOGIC
  ======================== */

  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ujianTersedia.length / ITEMS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return ujianTersedia.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, ujianTersedia]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  /* =======================
     STATUS BADGE
  ======================== */

  const getStatusBadge = (status) => {
    const base = "px-3 py-1 text-xs font-medium rounded-full inline-block";

    const styles = {
      Terjadwal: "bg-blue-50 text-blue-600",
      Draft: "bg-yellow-50 text-yellow-600",
      Selesai: "bg-green-50 text-green-600",
    };

    return (
      <span className={`${base} ${styles[status] || "bg-gray-100 text-gray-600"}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500 mt-1">Ringkasan sistem Generator Exam</p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm">
          <Plus size={16} />
          Buat Soal
        </button>
      </div>

      {/* ================= SUMMARY ================= */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white border border-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Semester Aktif</p>
            <BookOpen size={20} className="text-blue-500" />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-blue-600">
            {semesterAktif}
          </h2>
        </div>

        <div className="bg-white border border-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Status Materi</p>
            {statusMateri ? (
              <CheckCircle size={20} className="text-green-500" />
            ) : (
              <AlertCircle size={20} className="text-red-500" />
            )}
          </div>
          <h2 className={`mt-4 text-lg font-semibold ${statusMateri ? "text-green-600" : "text-red-600"}`}>
            {statusMateri ? "Siap Digunakan" : "Belum Lengkap"}
          </h2>
        </div>

        <div className="bg-white border border-blue-50 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Total Ujian</p>
            <ClipboardList size={20} className="text-indigo-500" />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {ujianTersedia.length}
          </h2>
        </div>

        <div className="bg-white border border-blue-50 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Ujian Draft</p>
            <ClipboardList size={20} className="text-yellow-500" />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-yellow-600">
            {ujianTersedia.filter((u) => u.status === "Draft").length}
          </h2>
        </div>

      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* ===== TABLE ===== */}
        <div className="lg:col-span-2 bg-white border border-blue-50 rounded-xl shadow-sm">

          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800">
              Ujian Tersedia
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
                <tr>
                  <th className="px-6 py-3 text-left">Nama Ujian</th>
                  <th className="px-6 py-3 text-left">Tanggal</th>
                  <th className="px-6 py-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {paginatedData.map((ujian, index) => (
                  <tr key={index} className="border-t hover:bg-blue-50/40 transition">
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {ujian.nama}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {ujian.tanggal}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(ujian.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ===== PAGINATION ===== */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t bg-gray-50">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm rounded-md border border-blue-100 hover:bg-blue-50 disabled:opacity-40"
              >
                Previous
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-1 text-sm rounded-md transition ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "border border-blue-100 hover:bg-blue-50 text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm rounded-md border border-blue-100 hover:bg-blue-50 disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}

        </div>

        {/* ===== ACTIVITY TIMELINE ===== */}
        <div className="bg-white border border-blue-50 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Activity Timeline
          </h2>

          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  {index !== activities.length - 1 && (
                    <div className="w-px flex-1 bg-blue-100 mt-1"></div>
                  )}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <Clock size={12} />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}