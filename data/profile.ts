export const profile = {
  name: "Faiz Fathir Ghifari",
  nickname: "IT Enthusiast",
  summary:
    "Mahasiswa Politeknik Negeri Madiun yang antusias membuat website modern dan responsif.",
  image: "/profile.jpeg",
  education: "D3 Teknologi Informasi",
  campus: "Politeknik Negeri Madiun",
  studyPeriod: "2024 — sekarang",
  interests: ["Web development", "Desain UI", "Videografis"],
  whatsapp: "62895367321131",
  whatsappMessage: "Halo Faiz, saya melihat profil Anda dan ingin berdiskusi.",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/faiz-fathir-ghifari-17810b341/",
    instagram: "https://www.instagram.com/",
  },
  skills: {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    Backend: ["Laravel"],
    Mobile: ["Flutter", "Kotlin"],
    Desain: ["Figma"],
  },
  portfolio: [
    {
      title: "GasKita — Desa Sukadatang",
      description: "Project aplikasi mobile untuk pemesanan gas, lengkap dengan dashboard utama, daftar produk, pengumuman, riwayat, dan profil pengguna.",
      type: "Aplikasi mobile",
      image: "/portfolio/Gaskita.png",
    },
    {
      title: "Sistem Informasi HR",
      description: "Sistem informasi Human Resources untuk memantau data karyawan, presensi, cuti, penggajian, laporan, dan aktivitas administrasi secara terpusat.",
      type: "Sistem informasi",
      image: "/portfolio/Marstech.png",
    },
    {
      title: "Sistem Reservasi Band",
      description: "Website reservasi penampilan band untuk mengecek ketersediaan tanggal, melihat paket harga, dan memesan jadwal event secara online.",
      type: "Website reservasi",
      image: "/portfolio/Elvacoustic.jpg",
    },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`;
