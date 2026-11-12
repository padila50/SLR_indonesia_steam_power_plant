export default function Section4() {
  const edData = [
    ['Rata-rata daya total (P_T)', '2.367 MW', '2.367 MW', '1.966 MW'],
    ['Deviasi daya vs riil', '0,00% (baseline)', '0,00%', '−16,94%'],
    ['Penghematan biaya rata-rata', 'Rp 1.073.076/jam', 'Rp 1.078.064/jam', 'Rp 938.501/jam'],
    ['Efisiensi penghematan biaya', 'Baseline', '+0,46% dibanding riil', '−12,54% dibanding riil'],
    ['Karakteristik pembagian beban', 'Fluktuasi aktual', 'Sangat presisi & konsisten', 'Sangat dinamis & bervariasi'],
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-400 pb-3">
        4. Optimasi Operasi Ekonomi (Economic Dispatch)
      </h1>

      <div className="prose prose-slate max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          <em>Economic Dispatch</em> (ED) bertujuan meminimalkan total biaya bahan bakar harian dengan memenuhi kendala kesetimbangan daya. Fungsi biaya total pembangkitan Fᵢ(Pᵢ) untuk unit ke-i dirumuskan dalam bentuk persamaan polinomial orde kedua:
        </p>

        {/* Formula */}
        <div className="bg-slate-800 text-white rounded-xl p-6 text-center my-8 shadow-lg">
          <p className="text-lg font-mono italic">
            Fᵢ(Pᵢ) = aᵢPᵢ² + bᵢPᵢ + cᵢ <span className="text-amber-300">[Rp/jam]</span>
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Simulasi pembebanan harian di PLTU Tanjung Jati B membandingkan metode deterministik <em>Lagrange Multiplier</em> dan metaheuristik <em>Particle Swarm Optimization</em> (PSO):
        </p>

        {/* Method comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📐</span>
              <h3 className="font-bold text-blue-800">Lagrange Multiplier</h3>
            </div>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>• Deterministik & presisi</li>
              <li>• Deviasi 0,00% dari riil</li>
              <li>• Penghematan +0,46%</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🧬</span>
              <h3 className="font-bold text-purple-800">Particle Swarm Optimization</h3>
            </div>
            <ul className="text-sm text-purple-900 space-y-1">
              <li>• Metaheuristik & dinamis</li>
              <li>• Deviasi −16,94% dari riil</li>
              <li>• Penghematan −12,54%</li>
            </ul>
          </div>
        </div>

        {/* Table 3 */}
        <div className="mt-8">
          <p className="text-sm font-bold text-gray-800 mb-3">
            Tabel 3. Perbandingan hasil simulasi pembebanan harian PLTU Tanjung Jati B
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Parameter Evaluasi</th>
                  <th className="px-4 py-3 text-left font-semibold">Kondisi Riil</th>
                  <th className="px-4 py-3 text-left font-semibold">Lagrange Multiplier</th>
                  <th className="px-4 py-3 text-left font-semibold">PSO</th>
                </tr>
              </thead>
              <tbody>
                {edData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-slate-800">{row[0]}</td>
                    <td className="px-4 py-3 text-gray-700">{row[1]}</td>
                    <td className="px-4 py-3 text-blue-700 font-medium">{row[2]}</td>
                    <td className="px-4 py-3 text-purple-700 font-medium">{row[3]}</td>
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
