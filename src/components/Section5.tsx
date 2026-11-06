export default function Section5() {
  const bfpData = [
    ['Konsumsi energi listrik (12 jam)', '54,8 MWh', '21,6 MWh', '33,2 MWh (60,58%)'],
    ['Estimasi biaya listrik', 'Rp 18.960.800', 'Rp 7.473.600', 'Rp 11.487.200/start-up'],
    ['Ekuivalensi rumah tangga', 'Baseline', 'Baseline', 'Setara 2.980 rumah (1.300 VA)'],
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-400 pb-3">
        5. Keandalan Peralatan Bantu dan Kualitas Daya
      </h1>

      <div className="prose prose-slate max-w-none">
        <div className="bg-slate-100 rounded-lg p-4 mb-6 border-l-4 border-slate-400">
          <p className="text-gray-700">
            Konsumsi daya sendiri (<em>auxiliary power</em>) menyerap <strong>5–7%</strong> dari total energi yang dibangkitkan.
          </p>
        </div>

        {/* 5.1 */}
        <h2 className="text-xl font-bold text-slate-700 mt-8 mb-4">5.1 Capital Budgeting Penggantian Motor BFP</h2>
        
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Analisis <em>capital budgeting</em> di PLTU Tanjung Jati B menunjukkan penggantian motor BFP yang menua memiliki:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4 text-center border border-emerald-200">
              <p className="text-2xl font-bold text-emerald-700">Rp 8,04 M</p>
              <p className="text-xs text-emerald-600 mt-1">NPV (Positif)</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
              <p className="text-2xl font-bold text-blue-700">25,94%</p>
              <p className="text-xs text-blue-600 mt-1">IRR</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 text-center border border-amber-200">
              <p className="text-2xl font-bold text-amber-700">3,48 th</p>
              <p className="text-xs text-amber-600 mt-1">Payback Period</p>
            </div>
          </div>
        </div>

        {/* 5.2 */}
        <h2 className="text-xl font-bold text-slate-700 mt-8 mb-4">5.2 Perbandingan TBFP vs MBFP saat Cold Start-Up</h2>

        <div className="mt-6">
          <p className="text-sm font-bold text-gray-800 mb-3">
            Tabel 4. Perbandingan konsumsi energi MBFP vs TBFP saat <em>cold start-up</em>
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                  <th className="px-4 py-3 text-left font-semibold">MBFP</th>
                  <th className="px-4 py-3 text-left font-semibold">TBFP</th>
                  <th className="px-4 py-3 text-left font-semibold">Penghematan</th>
                </tr>
              </thead>
              <tbody>
                {bfpData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-slate-800">{row[0]}</td>
                    <td className="px-4 py-3 text-gray-700">{row[1]}</td>
                    <td className="px-4 py-3 text-emerald-700 font-medium">{row[2]}</td>
                    <td className="px-4 py-3 text-blue-700 font-medium">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5.3 */}
        <h2 className="text-xl font-bold text-slate-700 mt-8 mb-4">5.3 Kualitas Daya (Harmonisa)</h2>
        
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Penggunaan VFD pada <em>fan</em> utama di PLTU Paiton menimbulkan distorsi harmonisa. THD tegangan busbar 10 kV mencapai <span className="font-bold text-red-600">6,37%</span> (melampaui batas IEEE 519-2014 sebesar 5,0%).
          </p>
          
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">⚠️</span>
              <p className="font-bold text-red-800 text-sm">Sebelum Filter: THD = 6,37% (Melebihi batas)</p>
            </div>
            <div className="w-full bg-red-200 rounded-full h-4 mb-4">
              <div className="bg-red-500 h-4 rounded-full relative" style={{ width: '63.7%' }}>
                <span className="absolute right-1 top-0 text-xs text-white font-bold">6,37%</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">✅</span>
              <p className="font-bold text-emerald-800 text-sm">Setelah Filter LC: THD = 3,20% (Aman)</p>
            </div>
            <div className="w-full bg-emerald-200 rounded-full h-4">
              <div className="bg-emerald-500 h-4 rounded-full relative" style={{ width: '32%' }}>
                <span className="absolute right-1 top-0 text-xs text-white font-bold">3,20%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Batas IEEE 519-2014: 5,0%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
