import { useState, useEffect, use } from "react";
import menuData from "../data/menu.json";
import { NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  Pencil,
  Database,
  Archive,
  Settings,
} from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const [openGroup, setOpenGroup] = useState(null);

  // const isGroupOpen = openGroup === menuData.label;
  const isChildActive = (children) => {
    return children.some((child) => location.pathname === child.path);
  };

  useEffect(() => {
    const activeGroup = menuData.find((menu) => {
      if (menu.type === "group") {
        return menu.children.some((child) => child.path === location.pathname);
      }
      return false;
    });

    if (activeGroup) {
      setOpenGroup(activeGroup.label);
    }
  }, [location.pathname]);

  // const toggleGroup = (label) => {
  //   setOpenGroup(openGroup === label ? null : label);
  // };

  // ICON MAPPING
  const iconMap = {
    Dashboard: <LayoutDashboard size={18} />,
    Materi: <BookOpen size={18} />,
    "Rencana Ujian": <ClipboardList size={18} />,
    "Buat Soal": <Pencil size={18} />,
    "Bank Soal": <Database size={18} />,
    "Arsip Ujian": <Archive size={18} />,
    Pengaturan: <Settings size={18} />,
  };

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-white border-r border-blue-100 text-gray-700 transition-all duration-300 flex flex-col`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-blue-50">
        {isOpen && (
          <h2 className="text-lg font-semibold tracking-tight text-blue-700">
            Generator Exam
          </h2>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-blue-50 transition"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-3 py-6 overflow-y-auto scrollbar-hide">
        <ul className="space-y-4">
          {menuData.map((menu, index) => {
            // =========================
            // SINGLE MENU
            // =========================
            if (menu.type === "single") {
              return (
                <li key={index}>
                  <NavLink
                    to={menu.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      }`
                    }
                  >
                    {iconMap[menu.name]}
                    {isOpen && <span>{menu.name}</span>}
                  </NavLink>
                </li>
              );
            }

            // =========================
            // GROUP MENU (ACCORDION)
            // =========================
            if (menu.type === "group") {
              const activeChild = isChildActive(menu.children);
              const isOpenNow = openGroup === menu.label;

              return (
                <li key={index}>
                  <button
                    onClick={() => setOpenGroup(isOpenNow ? null : menu.label)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      activeChild
                        ? "text-blue-600"
                        : "text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {iconMap[menu.label]}
                      {isOpen && <span>{menu.label}</span>}
                    </div>

                    {isOpen && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isOpenNow ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {isOpen && isOpenNow && (
                    <ul className="mt-2 ml-9 space-y-1">
                      {menu.children.map((child, i) => (
                        <li key={i}>
                          <NavLink
                            to={child.path}
                            end
                            className={({ isActive }) =>
                              `block px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                                isActive
                                  ? "bg-blue-100 text-blue-700 font-medium"
                                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                              }`
                            }
                          >
                            {child.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return null;
          })}
        </ul>
      </nav>
    </aside>
  );
}
