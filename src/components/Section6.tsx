export default function Section6() {
  const pltsData = [
    ['Biaya investasi awal (tahun 0)', '−Rp 1.004.520.000', '–'],
    ['Manfaat penghematan listrik', '+Rp 42.597.807/tahun', '–'],
    ['Penggantian inverter (th-10 & th-20)', '−Rp 47.730.000', '–'],
    ['Present Worth Benefit (PWB)', 'Rp 1.449.831.418', '–'],
    ['Present Worth Cost (PWC)', 'Rp 1.239.395.415', '–'],
    ['Net Present Value (NPV)', 'Rp 210.436.003', '✅ Layak'],
    ['Benefit-Cost Ratio (BCR)', '1,17', '✅ Layak'],
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-400 pb-3">
        6. Integrasi EBT, Pengelolaan Lingkungan, dan Sosio-Ekonomi
      </h1>

      <div className="prose prose-slate max-w-none">
        {/* 6.1 */}
        <h2 className="text-xl font-bold text-slate-700 mt-8 mb-4">6.1 Kelayakan PLTS Rooftop 32 kWp</h2>
        
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 mb-6">
          <p className="text-gray-700 leading-relaxed">
            Implementasi PLTS <em>Rooftop</em> 32 kWp di PLTU Tanjung Jati B layak secara teknis-finansial (NPV Rp 210,4 Juta, BCR 1,17), meskipun <em>Payback Period</em> cukup panjang (16,9 tahun) akibat biaya investasi sistem kontrol HMI yang tinggi [14].
          </p>
        </div>

        {/* Solar illustration */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">☀️</span>
            <div>
              <h3 className="font-bold text-yellow-800">PLTS Rooftop 32 kWp</h3>
              <p className="text-sm text-yellow-700">PLTU Tanjung Jati B • Umur teknis 25 tahun</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-emerald-700">Rp 210,4 Jt</p>
              <p className="text-xs text-gray-500">NPV</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-blue-700">1,17</p>
              <p className="text-xs text-gray-500">BCR</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-amber-700">16,9 th</p>
              <p className="text-xs text-gray-500">PBP</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-purple-700">32 kWp</p>
              <p className="text-xs text-gray-500">Kapasitas</p>
            </div>
          </div>
        </div>

        {/* Table 5 */}
        <div className="mt-6 mb-8">
          <p className="text-sm font-bold text-gray-800 mb-3">
            Tabel 5. Indikator kelayakan PLTS Rooftop 32 kWp (umur teknis 25 tahun)
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Komponen</th>
                  <th className="px-4 py-3 text-left font-semibold">Nilai</th>
                  <th className="px-4 py-3 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {pltsData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-slate-800">{row[0]}</td>
                    <td className="px-4 py-3 text-gray-700 font-mono text-xs">{row[1]}</td>
                    <td className="px-4 py-3">
                      {row[2].includes('Layak') ? (
                        <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-bold">{row[2]}</span>
                      ) : (
                        <span className="text-gray-400">{row[2]}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6.2 */}
        <h2 className="text-xl font-bold text-slate-700 mt-8 mb-4">6.2 Co-Combustion dan Desalinasi</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🔥</span>
              <h3 className="font-bold text-slate-700">Co-Combustion IPAL</h3>
            </div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                Rasio lumpur IPAL : batubara = 15:1
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                Aman secara teknis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                Menekan indeks slagging
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                Memusnahkan limbah B3 tanpa melanggar baku mutu emisi SOₓ
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">💧</span>
              <h3 className="font-bold text-slate-700">Desalinasi RO</h3>
            </div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                Sistem RO di PLTU Paiton Unit 9
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                Salt rejection &gt; 97%
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                Suplai air bersih untuk proses pembangkit
              </li>
            </ul>
          </div>
        </div>

        {/* 6.3 */}
        <h2 className="text-xl font-bold text-slate-700 mt-8 mb-4">6.3 Konteks Transisi Energi</h2>
        
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
          <p className="text-gray-700 leading-relaxed">
            Laporan <strong>IEA</strong> dan <strong>Energy Transition Partnership (ETP)</strong> menyoroti bahwa meskipun target dekarbonisasi agresif, hambatan pensiun dini PLTU bersifat struktural, terkait kontrak PPA jangka panjang dan risiko fiskal [15], [16], [17].
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">IEA Report 2023</span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">ETP Study Phase 1 & 2</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">ADB ETM Cirebon-1</span>
          </div>
        </div>
      </div>
    </div>
  )
}
