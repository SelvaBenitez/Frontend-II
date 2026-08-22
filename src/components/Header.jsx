function Header() {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-slate-800">Sistema de Gestión</h1>
      <span className="text-xs bg-violet-100 text-violet-700 px-3 py-1 rounded-full font-medium">
        v1.0
      </span>
    </header>
  );
}

export default Header;