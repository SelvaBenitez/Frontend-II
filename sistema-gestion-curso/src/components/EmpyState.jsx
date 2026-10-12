function EmptyState({ message }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200 text-center my-4">
      <p className="text-slate-500 text-sm">{message}</p>
    </div>
  );
}

export default EmptyState;