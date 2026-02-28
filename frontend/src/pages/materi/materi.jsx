import { Plus, Eye, Pencil, Trash2, Copy } from "lucide-react";
import { useState } from "react";

export default function Materi() {
  const [filter, setFilter] = useState({
    mapel: "",
    kelas: "",
    semester: "",
    status: "",
  });

  // Dummy data (nanti dari API)
  const materiData = [
    {
      id: 1,
      mapel: "Sejarah Kebudayaan Islam",
      kelas: "7",
      semester: "Genap",
      versi: "v1.0",
      status: "Draft",
    },
    {
      id: 2,
      mapel: "Bahasa Arab",
      kelas: "8",
      semester: "Ganjil",
      versi: "v2.1",
      status: "Lengkap",
    },
    {
      id: 3,
      mapel: "Al-Qur'an Hadits",
      kelas: "9",
      semester: "Genap",
      versi: "v1.2",
      status: "Disetujui",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Draft":
        return "bg-gray-100 text-gray-700";
      case "Lengkap":
        return "bg-yellow-100 text-yellow-700";
      case "Disetujui":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Daftar Materi</h1>
          <p className="text-gray-500 text-sm">
            Kelola materi pembelajaran berdasarkan mapel, kelas, semester, dan
            versi.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-sm">
          <Plus size={16} />
          Tambah Materi
        </button>
      </div>

      {/* Filter Section */}
      <div className="bg-white p-4 rounded-xl shadow-sm grid md:grid-cols-4 gap-4">
        <select
          className="border rounded-lg px-3 py-2 text-sm text-gray-500"
          onChange={(e) => setFilter({ ...filter, mapel: e.target.value })}
        >
          <option value="">Semua Mapel</option>
          <option>Sejarah Kebudayaan Islam</option>
          <option>Bahasa Arab</option>
          <option>Al-Qur'an Hadits</option>
        </select>

        <select
          className="border rounded-lg px-3 py-2 text-sm text-gray-500"
          onChange={(e) => setFilter({ ...filter, kelas: e.target.value })}
        >
          <option value="">Semua Kelas</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>

        <select
          className="border rounded-lg px-3 py-2 text-sm text-gray-500"
          onChange={(e) => setFilter({ ...filter, semester: e.target.value })}
        >
          <option value="">Semua Semester</option>
          <option>Ganjil</option>
          <option>Genap</option>
        </select>

        <select
          className="border rounded-lg px-3 py-2 text-sm text-gray-500"
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
        >
          <option value="">Semua Status</option>
          <option>Draft</option>
          <option>Lengkap</option>
          <option>Disetujui</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left text-gray-500">Mapel</th>
              <th className="px-4 py-3 text-left text-gray-500">Kelas</th>
              <th className="px-4 py-3 text-left text-gray-500">Semester</th>
              <th className="px-4 py-3 text-left text-gray-500">Versi</th>
              <th className="px-4 py-3 text-left text-gray-500">Status</th>
              <th className="px-4 py-3 text-left text-gray-500">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {materiData.map((materi) => (
              <tr key={materi.id} className="border-t hover:bg-gray-50 ">
                <td className="px-4 py-3 text-gray-500">{materi.mapel}</td>
                <td className="px-4 py-3 text-gray-500">{materi.kelas}</td>
                <td className="px-4 py-3 text-gray-500">{materi.semester}</td>
                <td className="px-4 py-3 text-gray-500">{materi.versi}</td>

                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                      materi.status,
                    )}`}
                  >
                    {materi.status}
                  </span>
                </td>

                <td className="px-4 py-3 flex gap-2">
                  <button className="p-2 hover:bg-blue-100 rounded-md bg-blue-300">
                    <Eye size={16} />
                  </button>

                  <button className="p-2 hover:bg-gray-100 rounded-md bg-red-300">
                    <Pencil size={16} />
                  </button>

                  <button className="p-2 hover:bg-gray-100 rounded-md bg-gray-300">
                    <Copy size={16} />
                  </button>

                  {materi.status === "Draft" && (
                    <button className="p-2 hover:bg-red-100 text-red-600 rounded-md">
                      <Trash2 size={16} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
