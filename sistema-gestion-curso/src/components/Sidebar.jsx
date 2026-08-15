import { NavLink } from "react-router-dom";

function Sidebar() {
  // Clases para resaltar la opción seleccionada/activa en la navegación
  const linkClasses = ({ isActive }) =>
    `block px-4 py-2 rounded-md font-medium transition-colors ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6 text-center text-blue-400">
          EduManage
        </h2>
        
        <nav className="space-y-2">
          <NavLink to="/" className={linkClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/students" className={linkClasses}>
            Estudiantes
          </NavLink>
          <NavLink to="/courses" className={linkClasses}>
            Cursos
          </NavLink>
          <NavLink to="/enrollments" className={linkClasses}>
            Matrículas
          </NavLink>
        </nav>
      </div>

      <div className="border-t border-gray-700 pt-4 text-xs text-gray-400 text-center">
        Sistema de Gestión v1.0
      </div>
    </aside>
  );
}

export default Sidebar;