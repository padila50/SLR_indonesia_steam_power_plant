export default function Section3() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-400 pb-3">
        3. Analisis Termodinamika, Heat Rate, dan Efisiensi Pembakaran
      </h1>

      <div className="prose prose-slate max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          Indikator utama kinerja teknik-ekonomi suatu PLTU ditunjukkan oleh nilai <em>Heat Rate</em> (NPHR/GPHR), yang berbanding terbalik dengan efisiensi termal.
        </p>

        {/* 3.1 */}
        <h2 className="text-xl font-bold text-slate-700 mt-8 mb-4">3.1 Degradasi Kinerja Lintas Beban</h2>
        
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 mb-6">
          <p className="text-gray-700 leading-relaxed">
            Studi pada <strong>PLTU Takalar Unit 2</strong> menunjukkan NPHR terbaik sebesar <span className="font-bold text-emerald-700">2.801,93 kcal/kWh</span> pada beban penuh (101,32 MW), namun memburuk menjadi <span className="font-bold text-red-700">3.558,92 kcal/kWh</span> pada beban rendah (55,82 MW) [7]. Fenomena serupa terjadi di <strong>PLTU Asam-Asam Unit 2</strong>, di mana GPHR meningkat dari 2.698,9 kcal/kWh saat <em>commissioning</em> menjadi 3.298,7 kcal/kWh akibat ayunan beban dan penggunaan lignit berkalori rendah [8].
          </p>
        </div>

        {/* Heat Rate comparison visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-slate-700 mb-3 text-sm">PLTU Takalar Unit 2</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">Beban Penuh (101,32 MW)</span>
                  <span className="font-bold text-emerald-600">2.802 kcal/kWh</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">Beban Rendah (55,82 MW)</span>
                  <span className="font-bold text-red-600">3.559 kcal/kWh</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-slate-700 mb-3 text-sm">PLTU Asam-Asam Unit 2</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">Commissioning</span>
                  <span className="font-bold text-emerald-600">2.699 kcal/kWh</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">Operasional (lignit)</span>
                  <span className="font-bold text-red-600">3.299 kcal/kWh</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3.2 */}
        <h2 className="text-xl font-bold text-slate-700 mt-8 mb-4">3.2 Analisis Destruksi Eksergi</h2>
        
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-5 mb-6">
          <p className="text-gray-700 leading-relaxed">
            Penerapan hukum kedua termodinamika pada PLTU Tanjung Jati B dan Paiton secara konsisten mengidentifikasi <strong><em>boiler</em></strong> sebagai komponen dengan destruksi eksergi terbesar (mencapai &gt;1.600 MW atau ~17–50% dari total input), terutama akibat irreversibilitas pembakaran dan perpindahan panas radiasi [5], [6].
          </p>
        </div>

        {/* 3.3 */}
        <h2 className="text-xl font-bold text-slate-700 mt-8 mb-4">3.3 Pengaruh Excess Air dan Diagnostik Slagging</h2>
        
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Peningkatan <em>excess air</em> (O₂ &gt; 6,20%) di PLTU Paiton menurunkan efisiensi pembakaran dari <span className="font-bold">92,94%</span> menjadi <span className="font-bold">92,04%</span> akibat <em>stack loss</em> [9].
          </p>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <p className="text-sm text-gray-700">
              <strong>Inovasi Diagnostik:</strong> Analisis sinyal vibrasi RMS pada panel pipa <em>boiler</em> terbukti dapat mendeteksi ketebalan <em>slagging</em> secara <em>real-time</em> tanpa <em>outage</em> [10].
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
