import { useState, useRef } from "react";
import { UploadCloud, FileText, X } from "lucide-react";

export default function UploadLKS() {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef();

  const handleFiles = (selectedFiles) => {
    if (!selectedFiles) return;

    const newFiles = Array.from(selectedFiles);

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const droppedFiles = e.dataTransfer.files;
    handleFiles(droppedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (files.length === 0) {
      alert("Pilih file terlebih dahulu");
      return;
    }

    console.log("Uploading files:", files);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">
          Upload LKS
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Unggah LKS untuk setiap mapel, kelas, dan semester.
        </p>
      </div>

      {/* DROPZONE */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
        className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition
        ${
          dragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-blue-400"
        }`}
      >
        <UploadCloud size={36} className="mx-auto text-gray-400 mb-3" />

        <p className="text-gray-600 text-sm">
          Drag & drop file di sini atau{" "}
          <span className="text-blue-600 font-medium">
            klik untuk upload
          </span>
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Format: PDF, DOC, DOCX
        </p>

        <input
          type="file"
          ref={inputRef}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
          accept=".pdf,.doc,.docx"
          multiple
        />
      </div>

      {/* FILE LIST */}
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="border rounded-md p-3 flex items-center justify-between bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-blue-500" />
                <span className="text-sm text-gray-700">
                  {file.name}
                </span>
              </div>

              <button
                onClick={() => removeFile(index)}
                className="text-gray-400 hover:text-red-500"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* UPLOAD BUTTON */}
      <button
        onClick={handleUpload}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm font-medium"
      >
        Upload {files.length > 0 && `(${files.length} file)`}
      </button>
    </div>
  );
}