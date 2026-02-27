import Navbar from "../components/navbar";

export default function Dashboard() {
  return (

    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Total Materi</p>
          <h2 className="text-2xl font-bold mt-2 text-black">24</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Total Soal</p>
          <h2 className="text-2xl font-bold mt-2 text-black">480</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Ujian Aktif</p>
          <h2 className="text-2xl font-bold mt-2 text-black">5</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-sm text-gray-500">Arsip Ujian</p>
          <h2 className="text-2xl font-bold mt-2 text-black">18</h2>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4 text-black">Aktivitas Terbaru</h2>
        <ul className="space-y-3 text-sm text-gray-600">
          <li>✔ UTS Matematika berhasil dibuat</li>
          <li>✔ 25 soal baru ditambahkan ke Bank Soal</li>
          <li>✔ Materi Bab 3 telah divalidasi</li>
          <li>✔ Try Out IPA dijadwalkan</li>
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Aksi Cepat</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Buat Soal
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Tambah Materi
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Atur Ujian
          </button>
        </div>
      </div>

    </div>
  );
}