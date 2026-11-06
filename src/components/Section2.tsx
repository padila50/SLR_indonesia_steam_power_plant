export default function Section2() {
  const plantData = [
    ['PLTU Tanjung Jati B (Unit 1–4)', 'Jepara / PT KPJB', '4 × 660 MW', 'Sub-kritis (175 bar, 541 °C)', 'Suplai 10,4–11% beban Jamali'],
    ['PLTU Jawa 4 (TJB Unit 5–6)', 'Jepara / PT Bhumi Jati Power', '2 × 1.000 MW', 'Ultra-Supercritical (USC)', 'Backbone efisiensi tinggi Jamali'],
    ['PLTU Paiton Unit 7', 'Probolinggo / PT POMI', '615 MW', 'Sub-kritis regeneratif', 'Pasokan utama 500 kV Jawa-Bali'],
    ['PLTU Paiton Unit 9', 'Probolinggo / PT PLN NP', '660 MW', 'Sub-kritis + seawater RO', 'Pembangkitan utama Jawa Timur'],
    ['PLTU Takalar Unit 2', 'Sulawesi Selatan / PT PLN', '100 MW (101,32 MW netto)', 'Sub-kritis', 'Base load sistem Sulselrabar'],
    ['PLTU Tarjun', 'Kalsel / PT Indocement', '29,86–47,8 MW', 'Sub-kritis captive', 'Industri semen & grid regional'],
    ['PLTU Nii Tanasa', 'Sultra / PT PLN', '2 × 10 MW', 'Sub-kritis skala kecil', 'Sistem kelistrikan Konawe/Kendari'],
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-400 pb-3">
        2. Profil Arsitektur dan Peta Kapasitas Teknis PLTU
      </h1>

      <div className="prose prose-slate max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          PLTU memegang peranan krusial sebagai penyedia beban dasar (<em>base load</em>) dalam sistem ketenagalistrikan Indonesia. Berdasarkan data empiris, arsitektur PLTU terbagi menjadi kelas kapasitas besar (skala giga), menengah, dan kecil.
        </p>

        <h2 className="text-xl font-bold text-slate-700 mt-8 mb-4">Arsitektur Kompleks PLTU Skala Giga</h2>

        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 mb-6">
          <p className="text-gray-700 leading-relaxed">
            Kompleks <strong>PLTU Tanjung Jati B</strong> (4.640 MW) dibangun dalam tiga fase evolusi teknologi: Fase I–II (4 × 660 MW Sub-kritis, 175 bar, 541 °C) dan Fase III/PLTU Jawa 4 (2 × 1.000 MW <em>Ultra-Supercritical</em>/USC, efisiensi &gt;40%). Kompleks <strong>PLTU Paiton</strong> (4.710 MW) dikelola multi-operator, termasuk Unit 9 (660 MW) dengan sistem desalinasi <em>seawater</em> RO.
          </p>
        </div>

        {/* Capacity visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-5 shadow-md">
            <p className="text-3xl font-bold">4.640 MW</p>
            <p className="text-sm opacity-90 mt-1">PLTU Tanjung Jati B</p>
            <p className="text-xs opacity-70 mt-2">6 unit • Sub-kritis & USC</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-xl p-5 shadow-md">
            <p className="text-3xl font-bold">4.710 MW</p>
            <p className="text-sm opacity-90 mt-1">PLTU Paiton</p>
            <p className="text-xs opacity-70 mt-2">9 unit • Multi-operator</p>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-amber-700 text-white rounded-xl p-5 shadow-md">
            <p className="text-3xl font-bold">100 MW</p>
            <p className="text-sm opacity-90 mt-1">PLTU Takalar Unit 2</p>
            <p className="text-xs opacity-70 mt-2">Base load Sulselrabar</p>
          </div>
        </div>

        {/* Table 2 */}
        <div className="mt-8">
          <p className="text-sm font-bold text-gray-800 mb-3">
            Tabel 2. Peta kapasitas dan arsitektur PLTU di Indonesia
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="px-3 py-3 text-left font-semibold">Nama Pembangkit</th>
                  <th className="px-3 py-3 text-left font-semibold">Lokasi/Operator</th>
                  <th className="px-3 py-3 text-left font-semibold">Kapasitas</th>
                  <th className="px-3 py-3 text-left font-semibold">Teknologi</th>
                  <th className="px-3 py-3 text-left font-semibold">Peran Sistem</th>
                </tr>
              </thead>
              <tbody>
                {plantData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-3 font-medium text-slate-800">{row[0]}</td>
                    <td className="px-3 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-3 py-3 text-gray-700 font-medium">{row[2]}</td>
                    <td className="px-3 py-3 text-gray-600 italic">{row[3]}</td>
                    <td className="px-3 py-3 text-gray-700">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
