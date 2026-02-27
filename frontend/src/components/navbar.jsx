import { useLocation } from "react-router-dom";
import menuData from "../data/menu.json";

function findTitle(path, menus) {
  for (const menu of menus) {
    // Single menu
    if (menu.type === "single" && menu.path === path) {
      return menu.title || menu.name;
    }

    // Group menu
    if (menu.type === "group") {
      for (const child of menu.children) {
        if (child.path === path) {
          return child.title || child.name;
        }
      }
    }
  }

  return "Dashboard";
}

export default function Navbar() {
  const location = useLocation();
  const currentTitle = findTitle(location.pathname, menuData);

  return (
    <header className="h-16 bg-white shadow-sm border-b flex items-center justify-between px-6 shrink-0">
      
      {/* Left - Dynamic Title */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          {currentTitle}
        </h1>
        <p className="text-xs text-gray-500">
          Generator Exam System
        </p>
      </div>

      {/* Right - User Info */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-black">Admin</p>
          <p className="text-xs text-gray-500">Administrator</p>
        </div>

        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
          A
        </div>
      </div>

    </header>
  );
}