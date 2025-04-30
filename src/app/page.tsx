'use client'

type Mahasiswa = {
  id: string
  nama: string
  kelas: string
  poin: string
}

export default function Home() {
  const data: Mahasiswa[] = [
    {
      id: "1450",
      nama: "PUTRI AMELIA NUR F",
      kelas: "S1-SI-BP-SM5-20241",
      poin: "3860720"
    },
    {
      id: "1333",
      nama: "AGUNG FEBRIAN",
      kelas: "S1-SI-AP-SM5-20241",
      poin: "2729740"
    },
    {
      id: "1436",
      nama: "RIVALDI AHMAD MAULANA",
      kelas: "S1-SI-BP-SM5-20241",
      poin: "2683302"
    },
    {
      id: "1508",
      nama: "SAHNA PUTRI YUNINDRA",
      kelas: "S1-SI-BP-SM5-20241",
      poin: "3381662"
    },
    {
      id: "1506",
      nama: "SEKAR INDRYANI PUTERI",
      kelas: "S1-SI-BP-SM5-20241",
      poin: "2527010"
    },
    {
      id: "1339",
      nama: "HISYAM IRSYAD A",
      kelas: "S1-SI-AP-SM5-20241",
      poin: "3843015"
    },
    {
      id: "1322",
      nama: "DAPID AHMAD SATIBI",
      kelas: "S1-SI-AP-SM5-20241",
      poin: "2111227"
    },
    {
      id: "1362",
      nama: "MARSYAH FAJAR M",
      kelas: "S1-SI-BP-SM5-20241",
      poin: "2807778"
    },
    {
      id: "1462",
      nama: "TONI ILHAM HERMAWAN",
      kelas: "S1-SI-BP-SM5-20241",
      poin: "2215405"
    },
    {
      id: "1321",
      nama: "SINTA SOPYANTI",
      kelas: "S1-SI-AP-SM5-20241",
      poin: "2368423"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">Daftar Mahasiswa</h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {data.map((mhs) => (
          <div
            key={mhs.id}
            className="bg-white p-6 rounded-2xl shadow-lg border border-purple-200 hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-2">{mhs.nama}</h2>
            <p className="text-gray-700"><span className="font-semibold">Kelas:</span> {mhs.kelas}</p>
            <p className="text-gray-600"><span className="font-semibold">Poin:</span> {mhs.poin}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
