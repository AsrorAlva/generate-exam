 import { Plus } from "lucide-react";

export default function Materi() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Materi Pembelajaran</h1>
      <p className="text-gray-600">
        Di halaman ini, Anda dapat mengelola materi pembelajaran yang akan digunakan untuk membuat soal ujian. Pastikan materi sudah lengkap dan terstruktur dengan baik agar proses pembuatan soal berjalan lancar.
      </p>  
        <div className="mt-6">
            <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-sm">
                <Plus size={16} />
                Tambah Materi
            </button>
        </div>
        </div>
  )
}