export default function Section1() {
  const clusters = [
    { letter: 'A', title: 'Klaster A:', desc: 'Optimasi Operasi Ekonomi dan Pemodelan Economic Dispatch.' },
    { letter: 'B', title: 'Klaster B:', desc: 'Efisiensi Termodinamika, Heat Rate (NPHR/GPHR), dan Kinerja Pembakaran Boiler.' },
    { letter: 'C', title: 'Klaster C:', desc: 'Keandalan Peralatan Bantu, Kualitas Daya (Power Quality), dan Manajemen Auxiliary Power.' },
    { letter: 'D', title: 'Klaster D:', desc: 'Energi Baru Terbarukan (EBT) Terintegrasi, Desalinasi Membran, dan Efisiensi Konsumsi Internal.' },
    { letter: 'E', title: 'Klaster E:', desc: 'Pengelolaan Lingkungan, Co-Combustion, dan Dampak Sosio-Ekonomi Pesisir.' },
  ]

  const taxonomyData = [
    ['A', 'Economic Dispatch, fungsi biaya kuadratik', 'Lagrange, PSO, iterasi lambda', 'Penghematan biaya bahan bakar hingga 0,46% dibanding riil'],
    ['B', 'Efisiensi termal, NPHR, destruksi eksergi, slagging', 'Cycle-Tempo, performance test, analisis vibrasi RMS', 'NPHR acuan 2.452–2.802 kcal/kWh; deteksi slagging tanpa outage'],
    ['C', 'Keandalan BFP, VFD harmonisa FFT, performa HPH', 'Capital budgeting (NPV, IRR), FFT, filter LC', 'NPV penggantian motor BFP Rp 8,04 M; THD 6,37% → 3,20%'],
    ['D', 'Kelayakan PLTS Rooftop, desalinasi RO', 'Arus kas terdiskonto (NPV, BCR, PBP)', 'PLTS 32 kWp layak (NPV Rp 210,4 Jt, BCR 1,17)'],
    ['E', 'Co-combustion IPAL, AMDAL, FABA', 'Survei kuantitatif, Paired Sample t-Test', 'Co-firing sludge rasio 15:1; transformasi pendapatan lokal (p<0,05)'],
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-400 pb-3">
        1. Pendahuluan dan Metodologi Tinjauan Sistematis
      </h1>

      <div className="prose prose-slate max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          Tinjauan Literatur Sistematis (<em>Systematic Literature Review</em>/SLR) ini bertujuan untuk menginvestigasi dan menyintesiskan korpus literatur ilmiah mengenai operasi ekonomi, efisiensi termodinamika, keandalan peralatan bantu (<em>auxiliary system</em>), kualitas daya listrik, serta dampak lingkungan dari Pembangkit Listrik Tenaga Uap (PLTU) yang beroperasi di Indonesia. Tinjauan ini mengadopsi standar sistematis berbasis kerangka kerja <em>Preferred Reporting Items for Systematic Reviews and Meta-Analyses</em> (PRISMA) guna menjamin transparansi dan objektivitas akademis.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Proses penapisan literatur dilakukan melalui penelusuran terstruktur pada repositori jurnal bereputasi, prosiding konferensi teknik, laporan pemantauan kinerja industri, dan publikasi hasil pengujian lapangan (<em>performance test</em>). Literatur yang lolos penapisan diklasifikasikan ke dalam lima klaster taksonomi utama:
        </p>

        {/* Clusters */}
        <div className="space-y-3 mb-8">
          {clusters.map((c) => (
            <div key={c.letter} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <span className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold text-sm">
                {c.letter}
              </span>
              <p className="text-gray-700">
                <strong>{c.title}</strong> {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Table 1 */}
        <div className="mt-8">
          <p className="text-sm font-bold text-gray-800 mb-3">
            Tabel 1. Ringkasan klaster taksonomi penelitian PLTU di Indonesia
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Klaster</th>
                  <th className="px-4 py-3 text-left font-semibold">Fokus Kajian</th>
                  <th className="px-4 py-3 text-left font-semibold">Metodologi Dominan</th>
                  <th className="px-4 py-3 text-left font-semibold">Kontribusi Utama</th>
                </tr>
              </thead>
              <tbody>
                {taxonomyData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-bold text-amber-600">{row[0]}</td>
                    <td className="px-4 py-3 text-gray-700">{row[1]}</td>
                    <td className="px-4 py-3 text-gray-600 italic">{row[2]}</td>
                    <td className="px-4 py-3 text-gray-700">{row[3]}</td>
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
