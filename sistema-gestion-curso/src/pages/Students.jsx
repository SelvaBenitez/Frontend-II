import { useState, useEffect } from "react";
import StudentTable from "../components/StudentTable";
import EmptyState from "../components/EmptyState";
import { supabase } from "../service/supabase";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Consulta a Supabase para obtener los estudiantes
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("students").select("*");

      if (error) {
        console.error("Error al traer estudiantes:", error);
      } else {
        setStudents(data || []);
      }
    } catch (err) {
      console.error("Error de conexión:", err);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchStudents();
  // }, []);

  return (
    <div className="space-y-6">
     
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Estudiantes</h1>
      <p className="text-sm text-slate-500 mt-1">
        Información general de los estudiantes registrados.
      </p>
    </div>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
      Nuevo Estudiante
    </button>
  </div>


  <div>
    <input
      type="text"
      placeholder="Buscar estudiante..."
      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
    />
  </div>

     
      {loading && (
        <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
          <p className="text-slate-600 font-medium animate-pulse">Loading students...</p>
        </div>
      )}

     
      {!loading && students.length === 0 && (
        <EmptyState message="No students found" />
      )}

     
      {!loading && students.length > 0 && (
        <StudentTable students={students} />
      )}
    </div>
  );
}

export default Students;