import { useState } from 'react'
import CoverPage from './components/CoverPage'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import References from './components/References'
import Sidebar from './components/Sidebar'

function App() {
  const [activeSection, setActiveSection] = useState('cover')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sections = [
    { id: 'cover', label: 'Halaman Judul', icon: '📄' },
    { id: 'section1', label: '1. Pendahuluan & Metodologi', icon: '📋' },
    { id: 'section2', label: '2. Profil & Kapasitas PLTU', icon: '🏭' },
    { id: 'section3', label: '3. Analisis Termodinamika', icon: '🔥' },
    { id: 'section4', label: '4. Economic Dispatch', icon: '💰' },
    { id: 'section5', label: '5. Keandalan & Kualitas Daya', icon: '⚡' },
    { id: 'section6', label: '6. EBT & Lingkungan', icon: '🌱' },
    { id: 'section7', label: '7. Research Gaps', icon: '🔍' },
    { id: 'references', label: 'Daftar Pustaka', icon: '📚' },
  ]

  const renderSection = () => {
    switch (activeSection) {
      case 'cover': return <CoverPage />
      case 'section1': return <Section1 />
      case 'section2': return <Section2 />
      case 'section3': return <Section3 />
      case 'section4': return <Section4 />
      case 'section5': return <Section5 />
      case 'section6': return <Section6 />
      case 'section7': return <Section7 />
      case 'references': return <References />
      default: return <CoverPage />
    }
  }

  const currentIndex = sections.findIndex(s => s.id === activeSection)
  const goNext = () => {
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id)
      window.scrollTo(0, 0)
    }
  }
  const goPrev = () => {
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].id)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-800 text-white px-4 py-3 flex items-center justify-between shadow-lg">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-sm font-bold truncate">Tinjauan Literatur Sistematis PLTU</h1>
        <span className="text-xs opacity-70">{currentIndex + 1}/{sections.length}</span>
      </header>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={(id: string) => { setActiveSection(id); setSidebarOpen(false); window.scrollTo(0, 0) }}
        isOpen={sidebarOpen}
      />

      {/* Main Content */}
      <main className="lg:ml-80 pt-16 lg:pt-0 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderSection()}

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm font-medium text-gray-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Sebelumnya
            </button>
            <span className="text-xs text-gray-400 hidden sm:block">
              {currentIndex + 1} dari {sections.length}
            </span>
            <button
              onClick={goNext}
              disabled={currentIndex === sections.length - 1}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-lg shadow-sm hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm font-medium"
            >
              Selanjutnya
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
