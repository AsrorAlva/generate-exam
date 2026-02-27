import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const menus = [
    { name: "Dashboard", path: "/" },
    { name: "Exams", path: "/exams" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gray-900 text-white transition-all duration-300 flex flex-col`}
    >
      <div className="flex items-center justify-between p-5">
        {isOpen && <h2 className="text-xl font-bold">Generator Exam</h2>}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-3">
          {menus.map((menu, index) => (
            <li key={index}>
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-blue-600"
                      : "hover:bg-gray-700"
                  }`
                }
              >
                {isOpen ? menu.name : menu.name.charAt(0)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}