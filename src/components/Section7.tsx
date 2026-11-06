export default function Section7() {
  const gapsData = [
    [
      'Optimasi Economic Dispatch',
      'Mayoritas pemodelan statis (Static ED) pada unit sub-kritis 660 MW',
      'Dynamic ED berkonstrain emisi pada pembangkit USC 1.000 MW'
    ],
    [
      'Analisis eksergi & termodinamika',
      'Evaluasi eksergi pada beban konstan 100% ECR',
      'Advanced Exergoeconomic Analysis pada kondisi part-load/cycling'
    ],
    [
      'Keandalan & quality power',
      'Kajian VFD dan FMEA terpisah antar-equipment',
      'Predictive Maintenance berbasis Machine Learning + IoT'
    ],
    [
      'Hibridasi EBT & storage',
      'Kelayakan EBT terbatas pada PLTS Rooftop skala kecil tanpa baterai',
      'Integrasi Floating PV + Battery Energy Storage System (BESS)'
    ],
    [
      'Ekonomi sirkular & SROI',
      'Kuantifikasi dampak sosial dan FABA belum terintegrasi',
      'Social Return on Investment (SROI) dan rantai pasok sirkular FABA'
    ],
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-400 pb-3">
        7. Sintesis Celah Penelitian (Research Gaps)
      </h1>

      <div className="prose prose-slate max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          Berdasarkan tinjauan sistematis, teridentifikasi celah penelitian utama untuk agenda riset mendatang:
        </p>

        {/* Research Gaps Table */}
        <div className="mt-6">
          <p className="text-sm font-bold text-gray-800 mb-3">
            Tabel 6. Sintesis celah penelitian dan rekomendasi arah riset masa depan
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="px-4 py-3 text-left font-semibold w-1/5">Domain Kajian</th>
                  <th className="px-4 py-3 text-left font-semibold w-2/5">Keterbatasan Literatur</th>
                  <th className="px-4 py-3 text-left font-semibold w-2/5">Rekomendasi Riset</th>
                </tr>
              </thead>
              <tbody>
                {gapsData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 font-bold text-slate-800 align-top">{row[0]}</td>
                    <td className="px-4 py-4 text-gray-600 align-top">
                      <span className="inline-flex items-center gap-1 text-red-600 text-xs font-medium mb-1">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        Gap
                      </span>
                      <p>{row[1]}</p>
                    </td>
                    <td className="px-4 py-4 text-gray-700 align-top">
                      <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-medium mb-1">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        Rekomendasi
                      </span>
                      <p>{row[2]}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Visual summary */}
        <div className="mt-10">
          <h3 className="font-bold text-slate-700 mb-4">Peta Roadmap Riset Masa Depan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl p-5 shadow-md">
              <p className="text-3xl mb-2">📊</p>
              <h4 className="font-bold mb-1">Dynamic ED</h4>
              <p className="text-xs opacity-90">Optimasi real-time dengan constraint emisi pada USC 1000 MW</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl p-5 shadow-md">
              <p className="text-3xl mb-2">🔬</p>
              <h4 className="font-bold mb-1">Exergoeconomic</h4>
              <p className="text-xs opacity-90">Analisis lanjutan pada kondisi part-load dan cycling</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl p-5 shadow-md">
              <p className="text-3xl mb-2">🤖</p>
              <h4 className="font-bold mb-1">ML + IoT</h4>
              <p className="text-xs opacity-90">Predictive maintenance terintegrasi untuk keandalan peralatan</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl p-5 shadow-md">
              <p className="text-3xl mb-2">🔋</p>
              <h4 className="font-bold mb-1">BESS Integration</h4>
              <p className="text-xs opacity-90">Floating PV + Battery Energy Storage System</p>
            </div>
            <div className="bg-gradient-to-br from-rose-500 to-red-600 text-white rounded-xl p-5 shadow-md">
              <p className="text-3xl mb-2">♻️</p>
              <h4 className="font-bold mb-1">SROI & FABA</h4>
              <p className="text-xs opacity-90">Social Return on Investment dan rantai pasok sirkular</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
