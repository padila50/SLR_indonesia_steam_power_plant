export default function CoverPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-3xl">
        {/* Decorative top element */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
          TINJAUAN LITERATUR SISTEMATIS
        </h1>

        <div className="w-16 h-0.5 bg-slate-300 mx-auto mb-6"></div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-700 leading-relaxed mb-12">
          Data Pembangkit Listrik dan Studi Kinerja Teknis<br />
          <span className="text-slate-600">Pembangkit Listrik Tenaga Uap (PLTU) di Indonesia</span>
        </h2>

        {/* Decorative illustration */}
        <div className="my-12 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
              <span className="text-5xl">🏭</span>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-sm">⚡</div>
            <div className="absolute -bottom-1 -left-3 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-xs">📊</div>
          </div>
        </div>

        {/* Author info */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 max-w-md mx-auto">
          <p className="text-gray-500 text-sm mb-2">Oleh:</p>
          <p className="text-xl font-bold text-slate-800">Padila</p>
          <p className="text-sm text-gray-500 mt-2">NIM: 20602600033</p>
          <div className="w-8 h-0.5 bg-amber-400 mx-auto my-4"></div>
          <p className="text-gray-600">6 November 2026</p>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
