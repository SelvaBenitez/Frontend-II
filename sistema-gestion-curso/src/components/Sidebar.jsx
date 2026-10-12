import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClasses = ({ isActive }) =>
    `flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
      isActive
        ? "bg-violet-600 text-white shadow-sm"
        : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
    }`;

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 min-h-screen p-6 flex flex-col justify-between border-r border-slate-800">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-center tracking-tight text-violet-400">
          EduManage
        </h2>

        <nav className="space-y-1.5">
          <NavLink to="/" className={linkClasses}>Dashboard</NavLink>
          <NavLink to="/students" className={linkClasses}>Estudiantes</NavLink>
          <NavLink to="/courses" className={linkClasses}>Cursos</NavLink>
          <NavLink to="/enrollments" className={linkClasses}>Matrículas</NavLink>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;