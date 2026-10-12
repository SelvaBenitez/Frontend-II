import { useState, useEffect } from "react";

function StudentForm({ selectedStudent, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    birth_date: "",
  });

  // Precargar datos si se selecciona un estudiante para editar
  useEffect(() => {
    if (selectedStudent) {
      setFormData({
        first_name: selectedStudent.first_name || selectedStudent.nombre || "",
        last_name: selectedStudent.last_name || selectedStudent.apellido || "",
        email: selectedStudent.email || "",
        birth_date: selectedStudent.birth_date || selectedStudent.fecha_nacimiento || "",
      });
    } else {
      setFormData({ first_name: "", last_name: "", email: "", birth_date: "" });
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 mb-6">
      <h2 className="text-xl font-bold text-slate-800">
        {selectedStudent ? "Editar Estudiante" : "Nuevo Estudiante"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Apellido</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Fecha de Nacimiento</label>
          <input
            type="date"
            name="birth_date"
            value={formData.birth_date}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          {selectedStudent ? "Actualizar Estudiante" : "Guardar Estudiante"}
        </button>

        {/* Botón Cancelar Edición */}
        {selectedStudent && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Cancelar Edición
          </button>
        )}
      </div>
    </form>
  );
}

export default StudentForm;