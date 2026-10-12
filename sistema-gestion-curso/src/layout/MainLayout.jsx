import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100 font-sans antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          
          <Header />

          <main className="p-8 max-w-7xl w-full mx-auto">
            <Outlet />
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;