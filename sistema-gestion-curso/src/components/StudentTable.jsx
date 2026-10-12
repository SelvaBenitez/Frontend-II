function StudentTable({ students }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse text-sm">
        <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
          <tr>
            <th className="p-4">Nombre</th>
            <th className="p-4">Apellido</th>
            <th className="p-4">Email</th>
            <th className="p-4">Fecha de nacimiento</th>
            <th className="p-4 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-medium text-slate-900">
                {student.first_name || student.nombre}
              </td>
              <td className="p-4">
                {student.last_name || student.apellido}
              </td>
              <td className="p-4 text-slate-500">{student.email}</td>
              <td className="p-4">
                {student.birth_date || student.fecha_nacimiento || "N/A"}
              </td>
              <td className="p-4 text-right space-x-3">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Editar
                </button>
                <button className="text-red-600 hover:text-red-800 font-medium">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;