interface SidebarProps {
  sections: { id: string; label: string; icon: string }[]
  activeSection: string
  setActiveSection: (id: string) => void
  isOpen: boolean
}

export default function Sidebar({ sections, activeSection, setActiveSection, isOpen }: SidebarProps) {
  return (
    <aside className={`fixed top-0 left-0 h-full w-80 bg-slate-800 text-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-xl">⚡</div>
          <div>
            <h2 className="font-bold text-sm leading-tight">Tinjauan Literatur</h2>
            <p className="text-xs text-slate-400">Sistematis PLTU Indonesia</p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all flex items-center gap-3
                  ${activeSection === section.id
                    ? 'bg-amber-500/20 text-amber-300 border-l-3 border-amber-400 font-medium'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
              >
                <span className="text-base">{section.icon}</span>
                <span className="truncate">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mt-auto border-t border-slate-700">
        <div className="text-xs text-slate-500 text-center">
          <p>Oleh: Padila</p>
          <p>NIM: 20602600033</p>
          <p className="mt-1">6 November 2026</p>
        </div>
      </div>
    </aside>
  )
}
