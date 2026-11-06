export default function References() {
  const references = [
    '[1] A. R. Yohanes, Widayat, and J. Windarta, "Optimization of mechanical thermal energy audit at Pelabuhan Ratu Unit 2 with Pi Vision," in E3S Web of Conferences, vol. 519, 2024, Art. no. 02004. doi: 10.1051/e3sconf/202451902004.',
    '[2] A. Faisal, F. Maycello, and M. A. Muflikhun, "Load variation analysis of heat rate in electricity generation and costs efficiency analysis of 3x330 MW coal-fired power plant: Case study from Indramayu coal-fired power plant, Indonesia," in Proc. Int. Conf. Sci. Technol. (ICST), 2023.',
    '[3] R. A. Putra and R. Nazir, "Power plant performance analysis on variations of generator loading at Ombilin coal fired steam power plant Unit 1 (2x100 MW)," Andalasian Int. J. of Applied Science, Engineering and Technology, vol. 3, no. 2, 2023.',
    '[4] A. E. Ariyanto and C. Soekardi, "Analisis pengaruh nilai kalori batubara terhadap efisiensi boiler CFB dan konsumsi bahan bakar Unit 1 PLTU Merak Energi Indonesia," Jurnal Teknik Mesin, vol. 12, no. 3, pp. 216–223, 2023.',
    '[5] B. Rudiyanto et al., "Energy and exergy analysis of steam power plant in Paiton, Indonesia," in IOP Conf. Series: Earth and Environmental Science, vol. 268, 2019.',
    '[6] F. N. Izzah, B. F. T. Kiono, and K. Rozi, "Energy and exergy analysis of the XYZ ultra-supercritical steam power plant," Green Technology & Innovation, vol. 1, no. 1, 2025. doi: 10.36922/gti.8099.',
    '[7] M. Saini, N. Hamzah, and D. P. Utomo, "Analisa keseimbangan energi PLTU Takalar (Punagaya) Unit 2 berdasarkan perubahan beban," SINERGI, vol. 18, no. 2, 2020.',
    '[8] D. Maulana and A. Mursadin, "Analisis heat rate pada PLTU PT. PLN Indonesia Power UBP Asam Asam (Unit 2)," Jtam Rotary, vol. 7, no. 2, pp. 229–240, 2025.',
    '[9] R. Basuki et al., "Quantitative analysis of excess air impact on boiler combustion efficiency in coal-fired power plant," Jurnal Teknik Mesin, vol. 12, no. 3, 2025.',
    '[10] H. Basri, A. Tijaniyah, and M. Moyo, "Real-time slagging detection in boiler tube panels using vibration signal analysis," Journal of Physics: Conference Series, vol. 2400, no. 1, 2023.',
    '[11] A. Purbowo and B. Adhi, "Capital budgeting analysis for Boiler Feed Pump motor replacement in coal-fired power plant," International Journal of Energy Economics and Policy, vol. 14, no. 6, 2025.',
    '[12] M. Sagaf and Safrizal, "Energy consumption comparison of TBFP and MBFP during cold start-up in 660 MW coal-fired power plant," SINERGI, vol. 18, no. 2, pp. 115–124, 2020.',
    '[13] A. Nugraha and M. Rizal, "Harmonic distortion mitigation using passive LC filter on 10 kV auxiliary busbar in coal-fired power plant," IEEE Access, vol. 14, pp. 112–120, 2026.',
    '[14] C. Cinicy, J. Windarta, and S. Saptadi, "Financial feasibility study of 32 kWp on-grid rooftop solar PV in coal-fired power plant facility," International Journal of Renewable Energy Development, vol. 12, no. 2, pp. 261–269, 2023.',
    '[15] International Energy Agency (IEA), "Navigating Indonesia\'s Power System Decarbonisation with the Indonesia Just Energy Transition Partnership," Paris, France, 2023.',
    '[16] Energy Transition Partnership (ETP), "Study on the Financial Implications of the Early Retirement of Coal-fired Power Plants in Indonesia - Phase 1 & 2," 2022.',
    '[17] Asian Development Bank (ADB), "MOU on early retirement of Cirebon-1 under the Energy Transition Mechanism," 2022.',
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-amber-400 pb-3">
        Daftar Pustaka
      </h1>

      <div className="space-y-4">
        {references.map((ref, i) => (
          <div
            key={i}
            className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 hover:border-amber-200 transition-colors"
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              {ref}
            </p>
          </div>
        ))}
      </div>

      {/* Summary stats */}
      <div className="mt-10 bg-slate-800 rounded-xl p-6 text-white">
        <h3 className="font-bold text-lg mb-4">Statistik Tinjauan</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-400">17</p>
            <p className="text-xs text-slate-300 mt-1">Referensi</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-400">5</p>
            <p className="text-xs text-slate-300 mt-1">Klaster</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-400">7+</p>
            <p className="text-xs text-slate-300 mt-1">PLTU Ditinjau</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-400">5</p>
            <p className="text-xs text-slate-300 mt-1">Research Gaps</p>
          </div>
        </div>
      </div>
    </div>
  )
}
