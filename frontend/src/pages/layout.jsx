import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebard";
import Navbar from "../components/navbar";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="h-screen w-screen flex bg-gray-100 overflow-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
