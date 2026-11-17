export const profile = {
  name: "Faiz Fathir Ghifari",
  role: "IT Enthusiast",
  roles: ["Junior Developer", "IT Enthusiast"],
  summary: "Mahasiswa Politeknik Negeri Madiun yang antusias membuat website modern dan responsif.",
  image: "/profile.jpeg",
  heroImage: "/assets/image.png",
  education: { school: "Politeknik Negeri Madiun", degree: "D3 Teknologi Informasi", period: "2024 — sekarang" },
  educationHistory: [
    { school: "Politeknik Negeri Madiun", degree: "D3 Teknologi Informasi", period: "2024 — sekarang", description: "Mendalami pengembangan perangkat lunak, desain interface, dan teknologi digital." },
    { school: "MAN 2 Kota Madiun", degree: "MIPA 1 Riset Saintek", period: "2021 — 2023", description: "Menyelesaikan pendidikan menengah dan mulai mengembangkan ketertarikan pada teknologi." },
  ],
  experience: [
    { title: "Project Developer", period: "2024 — sekarang", place: "Politeknik Negeri Madiun", description: "Mengembangkan aplikasi mobile, sistem informasi, dan website reservasi sebagai project perkuliahan dan portfolio." },
    { title: "Web Developer Intern", period: "2025", place: "PT. Marstech Global", description: "Mengembangkan dan menyempurnakan antarmuka website, membantu implementasi fitur web, serta berkolaborasi dalam proses pengembangan sistem informasi perusahaan." },
  ],
  skills: { Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"], Backend: ["Laravel", "PHP", "Express.js"], Mobile: ["Flutter", "Kotlin"], Design: ["Figma", "Canva"] },
  projects: [
    { title: "GasKita — Desa Sukadatang", category: "Mobile Application", description: "Aplikasi mobile pemesanan gas dengan dashboard, katalog produk, pengumuman, riwayat, dan profil pengguna.", image: "/portfolio/Gaskita.png", technologies: ["Flutter", "Figma"], details: "Project ini berfokus pada pengalaman pemesanan gas yang sederhana dan mudah digunakan oleh masyarakat." },
    { title: "Sistem Informasi HR", category: "Information System", description: "Sistem informasi Human Resources untuk data karyawan, presensi, cuti, penggajian, dan laporan.", image: "/portfolio/Marstech.png", technologies: ["React", "Express.js"], details: "Sistem terpusat untuk membantu proses administrasi dan pemantauan data sumber daya manusia." },
    { title: "Sistem Reservasi Band", category: "Reservation Website", description: "Website untuk mengecek ketersediaan tanggal, melihat paket harga, dan reservasi penampilan band.", image: "/portfolio/Elvacoustic.jpg", technologies: ["PHP", "Laravel", "JavaScript"], details: "Website reservasi yang membantu calon pelanggan menemukan informasi paket dan menentukan jadwal event." },
  ],
  certificates: [{ title: "Dasar Pemrograman Web", issuer: "Dicoding", date: "Tambahkan tanggal penerbitan", description: "Sertifikat pembelajaran fundamental HTML, CSS, dan JavaScript." }],
  socials: { github: "https://github.com/", linkedin: "https://www.linkedin.com/in/faiz-fathir-ghifari-17810b341/", instagram: "https://www.instagram.com/" },
  whatsapp: "62895367321131",
  whatsappMessage: "Halo Faiz, saya melihat profil Anda dan ingin berdiskusi.",
};

export const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`;
