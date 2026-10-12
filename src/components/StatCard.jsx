function StatCard({ title, total }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-violet-200 transition-colors">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {title}
      </h3>
      <p className="text-3xl font-extrabold text-slate-900 mt-3">
        {total}
      </p>
    </div>
  );
}

export default StatCard;