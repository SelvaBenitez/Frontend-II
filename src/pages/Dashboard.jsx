/*import Footer from "../components/Footer";
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


import { useState, useEffect } from "react";
import {Footer} from "../components/Footer";
import StatCard from "../components/StatCard";
import { supabase } from "../service/supabase"; 


function Dashboard() {
  // 1. Estado para almacenar nuestras estadísticas reales
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    enrollments: 0
  });

  // 2. Efecto para obtener los datos al cargar la página
  useEffect(() => {
    async function fetchCounts() {
      try {
        // Usamos Promise.all para hacer las 3 consultas al mismo tiempo y que sea más rápido
        const [studentsData, coursesData, enrollmentsData] = await Promise.all([
          supabase.from("students").select("*", { count: "exact", head: true }),
          supabase.from("courses").select("*", { count: "exact", head: true }),
          supabase.from("enrollments").select("*", { count: "exact", head: true })
        ]);

        // Actualizamos el estado con los conteos reales que nos devuelve Supabase
        setStats({
          students: studentsData.count || 0,
          courses: coursesData.count || 0,
          enrollments: enrollmentsData.count || 0
        });
      } catch (error) {
        console.error("Error al obtener las estadísticas:", error);
      }
    }

    fetchCounts();
  }, []);

  return (
    <div className="p-6 space-y-6 flex flex-col min-h-full">
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Bienvenido al Sistema de Gestión de Cursos
          </p>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Estudiantes" total={stats.students} />
          <StatCard title="Cursos" total={stats.courses} />
          <StatCard title="Matrículas" total={stats.enrollments} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Dashboard;
*/

// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import  Footer  from "../components/Footer"; 
import StatCard from "../components/StatCard";
import { supabase } from "../service/supabase"; 

function Dashboard() {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    enrollments: 0
  });

  useEffect(() => {
    async function fetchCounts() {
      try {
        const [studentsData, coursesData, enrollmentsData] = await Promise.all([
          supabase.from("students").select("*", { count: "exact", head: true }),
          supabase.from("courses").select("*", { count: "exact", head: true }),
          supabase.from("enrollments").select("*", { count: "exact", head: true })
        ]);

        setStats({
          students: studentsData.count || 0,
          courses: coursesData.count || 0,
          enrollments: enrollmentsData.count || 0
        });
      } catch (error) {
        console.error("Error al obtener estadísticas:", error);
      }
    }

    fetchCounts();
  }, []);

  return (
    <div className="p-6 space-y-6 flex flex-col min-h-full">
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Bienvenido al Sistema de Gestión de Cursos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Estudiantes" total={stats.students} />
          <StatCard title="Cursos" total={stats.courses} />
          <StatCard title="Matrículas" total={stats.enrollments} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Dashboard;