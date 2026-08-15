import Footer from "../components/Footer";
// import { supabase } from "../config/supabase"; 
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div>
      <div>

        <div>
          <h1>Dashboard</h1>
          <p >
            Gestión de Cursos
          </p>
        </div>

        <div>
          <StatCard title="Students" total="50" />
          <StatCard title="Courses" total="12" />
          <StatCard title="Enrollments" total="145" />
        </div>

      </div>
      
      <Footer />
    </div>
  );
}

export default Dashboard;