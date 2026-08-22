import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100 font-sans antialiased">
      {/* 1. Menú lateral fijo a la izquierda */}
      <Sidebar />

      {/* 2. Área principal de contenido */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          {/* Encabezado superior */}
          <Header />

          {/* Área dinámica donde se cargan Dashboard, Estudiantes, Cursos, etc. */}
          <main className="p-8 max-w-7xl w-full mx-auto">
            <Outlet />
          </main>
        </div>

        {/* Pie de página inferior */}
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;