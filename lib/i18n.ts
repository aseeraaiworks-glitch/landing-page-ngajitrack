export type Lang = "id" | "en"

export const LANGS: { code: Lang; label: string; name: string }[] = [
  { code: "id", label: "ID", name: "Bahasa Indonesia" },
  { code: "en", label: "EN", name: "English" },
]

export const CONTACT_EMAIL = "customercare@aseerakarsa.com"
const WHATSAPP_NUMBER = "6287822060552"

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

type StageState = "progress" | "development" | "planned"

export const dictionary = {
  id: {
    nav: {
      features: "Fitur",
      audiences: "Untuk siapa",
      status: "Status",
      faq: "FAQ",
      home: "Beranda NgajiTrack",
      primary: "Navigasi utama",
      cta: "Hubungi kami",
      language: "Pilih bahasa",
    },
    hero: {
      badge: "Tahap awal · Dalam pengembangan",
      titleLead: "Setiap ayat yang dipelajari,",
      titleAccent: "tercatat dengan jelas.",
      body: "NgajiTrack adalah Sistem Manajemen Pembelajaran Al-Qur’an yang sedang dikembangkan untuk membantu lembaga memantau perkembangan Tahfiz dan Iqra — serta menjaga pengajar, pimpinan, dan wali santri tetap selaras.",
      primary: "Bicara dengan kami",
      secondary: "Apa yang kami bangun",
    },
    preview: {
      overview: "Ringkasan kelas",
      concept: "Pratinjau konsep",
      page: "Hal.",
      progress: "progres",
      summary: "Ringkasan mingguan siap dibagikan ke wali santri",
      caption: "Ilustrasi tampilan. Antarmuka dapat berubah.",
    },
    features: {
      eyebrow: "Apa yang kami bangun",
      title: "Dirancang sesuai cara Al-Qur’an benar-benar diajarkan",
      body: "Menggantikan buku catatan kertas dan pesan yang tercecer dengan satu catatan terstruktur untuk perjalanan setiap santri.",
      items: [
        {
          title: "Pemantauan Tahfiz",
          body: "Catat hafalan per surah, juz, dan ayat, lengkap dengan sabaq, sabqi, dan manzil dalam satu tempat.",
        },
        {
          title: "Perkembangan Iqra",
          body: "Ikuti setiap santri melewati jilid Iqra halaman demi halaman, agar tidak ada yang tertinggal atau terburu-buru.",
        },
        {
          title: "Wawasan lembaga",
          body: "Beri pimpinan gambaran jelas tentang perkembangan di seluruh kelas dan pengajar untuk keputusan yang lebih baik.",
        },
        {
          title: "Kabar untuk wali",
          body: "Bagikan ringkasan perkembangan yang sederhana dan rutin agar keluarga dapat mendukung belajar di rumah.",
        },
      ],
    },
    audiences: {
      title: "Satu gambaran bersama untuk semua pihak",
      items: [
        {
          role: "Pengajar",
          body: "Catat sesi dalam hitungan detik dan lihat posisi terakhir setiap santri sebelum kelas dimulai.",
        },
        {
          role: "Pimpinan",
          body: "Pahami perkembangan di setiap halaqah, kenali siapa yang perlu dibantu, dan susun laporan dengan yakin.",
        },
        {
          role: "Wali santri",
          body: "Tetap mengetahui bacaan dan hafalan anak Anda tanpa harus terus menanyakan kabar.",
        },
      ],
    },
    status: {
      eyebrow: "Posisi kami saat ini",
      title: "Dibangun dengan cermat, bersama para pengajar",
      body: "NgajiTrack masih di tahap awal dan belum tersedia untuk umum. Kami membentuknya bersama lembaga pembelajaran Al-Qur’an agar sesuai dengan kelas nyata sejak hari pertama.",
      states: { progress: "Berjalan", development: "Dikembangkan", planned: "Direncanakan" } as Record<
        StageState,
        string
      >,
      stages: [
        { label: "Riset bersama lembaga", state: "progress" },
        { label: "Pencatatan inti Tahfiz & Iqra", state: "development" },
        { label: "Kabar untuk wali", state: "planned" },
        { label: "Program uji coba", state: "planned" },
      ] as { label: string; state: StageState }[],
    },
    faq: {
      eyebrow: "FAQ",
      h: "Pertanyaan yang sering diajukan",
      body: "Jawaban singkat tentang NgajiTrack, rencana pengembangannya, dan cara lembaga dapat terlibat sejak awal.",
      moreTitle: "Masih ada pertanyaan?",
      moreBody: "Ceritakan tentang lembaga Anda dan hal yang ingin diperbaiki.",
      pilotCta: "Diskusikan Pilot",
      pilotMessage: "Assalamu’alaikum, saya ingin mendiskusikan pilot NgajiTrack untuk lembaga kami.",
      items: [
        { q: "NgajiTrack itu apa?", a: "NgajiTrack adalah Qur’an Learning Management System (QLMS) yang sedang kami bangun: platform pencatatan progres ngaji santri yang dirancang cepat dan mudah, dilengkapi Al-Qur’an digital. Guru mencatat progres harian, lalu pihak yang berwenang (wali, santri, lembaga, dan Mudir) dapat melihatnya sesuai pengaturan lembaga. Tujuannya mengurangi buku setoran manual yang mudah hilang atau tertukar." },
        { q: "Apakah harus selalu terhubung internet?", a: "Tidak. NgajiTrack ada mode offline gratis, jadi guru tetap bisa mencatat progres di HP tanpa internet. Nanti kalau ada internet baru sinkron otomatis." },
        { q: "Bagaimana wali memantau progres anak?", a: "Wali bisa memantau sesuai pengaturan lembaga. Progres Tahfiz & Iqra anak akan terlihat berkala di akun wali." },
        { q: "Apakah NgajiTrack sudah tersedia?", a: "Belum. NgajiTrack adalah produk tahap awal yang masih dalam pengembangan. Kami berdiskusi dengan lembaga tentang kebutuhan mereka dan kemungkinan pilot di masa depan." },
        { q: "Apakah NgajiTrack berbayar?", a: "Rencananya NgajiTrack berjalan sebagai SaaS B2B: lembaga, pesantren, atau TPQ berlangganan untuk mengelola santrinya. Untuk guru perorangan, kami berencana menyediakan mode offline gratis tanpa terhubung ke server, sehingga progres santri tetap bisa dicatat di HP. Paket dan harga belum ditetapkan." },
        { q: "NgajiTrack ini untuk siapa?", a: "Untuk empat pihak:\n• Guru/ustaz: dirancang agar setoran bisa dicatat dengan cepat.\n• Santri: melihat progres hafalannya sendiri, jika diaktifkan lembaga.\n• Wali: memantau ngaji anak dari rumah tanpa menunggu laporan bulanan.\n• Mudir/lembaga: memantau halaqah, aktivitas guru, dan rekap nilai dalam satu dashboard." },
        { q: "Apa bedanya dengan aplikasi Al-Qur’an lain?", a: "Aplikasi Al-Qur’an pada umumnya berfokus pada membaca. NgajiTrack dirancang menyatukan Al-Qur’an digital, buku setoran digital, rapor, dan dashboard lembaga, agar progres ngaji santri terpantau hingga khatam." },
        { q: "Apakah data santri aman?", a: "Perlindungan data santri adalah prioritas desain kami. Akses dirancang berbasis izin: hanya guru, wali yang bersangkutan, dan admin lembaga yang dapat melihatnya. Kami berkomitmen tidak menjual data. Detail teknis enkripsi dan kebijakan privasi akan kami publikasikan sebelum peluncuran." },
        { q: "Apakah cocok untuk TPQ atau rumah tahfidz kecil?", a: "Ya. NgajiTrack dirancang untuk lembaga dari berbagai skala, mulai TPQ dan rumah Qur’an kecil hingga pesantren besar. Kami ingin lembaga kecil pun bisa mulai dengan sederhana." },
        { q: "Apakah bisa memakai nama dan logo lembaga sendiri?", a: "Itu direncanakan untuk paket lembaga: dashboard dan laporan akan memakai nama dan logo lembaga Anda, sehingga tampil profesional di hadapan wali." },
        { q: "Apakah NgajiTrack menggantikan pendidik?", a: "Tidak. NgajiTrack dirancang untuk mendukung pencatatan dan keterbukaan informasi. Pengajaran dan penilaian tetap berada di tangan pendidik." },
        { q: "Apakah akan ada fitur AI?", a: "Sedang dijajaki: ringkasan administratif berbantuan AI yang menjaga privasi, tunduk pada validasi dan peninjauan pendidik. Fitur ini tidak akan menilai bacaan, menggantikan pendidik, atau menentukan kebenaran secara agama. Ini rencana ke depan, bukan fitur yang sudah dirilis." },
        { q: "Bagaimana lembaga bisa membahas pilot awal?", a: "Gunakan tombol “Diskusikan Pilot” untuk menghubungi kami via WhatsApp, berisi perkenalan lembaga Anda dan hal yang ingin diperbaiki." },
      ],
    },
    footer: {
      title: "Mengelola lembaga pembelajaran Al-Qur’an?",
      body: "Kami ingin mendengar bagaimana Anda memantau perkembangan santri saat ini dan apa yang paling membantu para pengajar Anda.",
      cta: "Hubungi Aseera",
      ctaLabel: "Hubungi Aseera melalui WhatsApp",
      whatsappMessage: "Assalamu’alaikum, saya ingin mengetahui lebih lanjut tentang NgajiTrack.",
      emailLabel: "Email",
      byline: "Produk dari",
      website: "Situs web Aseera",
      rights: "Hak cipta dilindungi.",
    },
  },
  en: {
    nav: {
      features: "Features",
      audiences: "Who it’s for",
      status: "Status",
      faq: "FAQ",
      home: "NgajiTrack home",
      primary: "Primary",
      cta: "Get in touch",
      language: "Choose language",
    },
    hero: {
      badge: "Early stage · In development",
      titleLead: "Every ayah learned,",
      titleAccent: "clearly tracked.",
      body: "NgajiTrack is a Qur’an Learning Management System being built to help institutions track Tahfiz and Iqra progress — and keep educators, leaders and guardians on the same page.",
      primary: "Talk to us",
      secondary: "What we’re building",
    },
    preview: {
      overview: "Class overview",
      concept: "Concept preview",
      page: "Page",
      progress: "progress",
      summary: "Weekly summary ready to share with guardians",
      caption: "Illustrative mock-up. Interface subject to change.",
    },
    features: {
      eyebrow: "What we’re building",
      title: "Designed around how Qur’an is actually taught",
      body: "Replacing paper logbooks and scattered chats with one structured record of every learner’s journey.",
      items: [
        {
          title: "Tahfiz tracking",
          body: "Record memorisation by surah, juz and ayah, with sabaq, sabqi and manzil reviews in one place.",
        },
        {
          title: "Iqra progression",
          body: "Follow each learner through Iqra levels page by page, so no one is held back or rushed ahead.",
        },
        {
          title: "Institution insights",
          body: "Give leaders a clear view of progress across classes and educators to support better decisions.",
        },
        {
          title: "Guardian updates",
          body: "Share simple, regular progress summaries so families can encourage learning at home.",
        },
      ],
    },
    audiences: {
      title: "One shared picture for everyone involved",
      items: [
        {
          role: "Educators",
          body: "Log a session in seconds and see exactly where each student left off before class begins.",
        },
        {
          role: "Leaders",
          body: "Understand progress across halaqah, spot who needs support and report with confidence.",
        },
        {
          role: "Guardians",
          body: "Stay informed about your child’s recitation and memorisation without chasing updates.",
        },
      ],
    },
    status: {
      eyebrow: "Where we are",
      title: "Built carefully, together with educators",
      body: "NgajiTrack is early and not yet available for general use. We’re shaping it alongside Qur’an learning institutions so it fits real classrooms from day one.",
      states: { progress: "In progress", development: "In development", planned: "Planned" } as Record<
        StageState,
        string
      >,
      stages: [
        { label: "Research with institutions", state: "progress" },
        { label: "Core Tahfiz & Iqra records", state: "development" },
        { label: "Guardian updates", state: "planned" },
        { label: "Pilot programme", state: "planned" },
      ] as { label: string; state: StageState }[],
    },
    faq: {
      eyebrow: "FAQ",
      h: "Frequently asked questions",
      body: "Short answers about NgajiTrack, how it is being developed, and how institutions can get involved early.",
      moreTitle: "Still have questions?",
      moreBody: "Tell us about your institution and what you hope to improve.",
      pilotCta: "Discuss a Pilot",
      pilotMessage: "Assalamu’alaikum, I’d like to discuss a NgajiTrack pilot for our institution.",
      items: [
        { q: "What is NgajiTrack?", a: "NgajiTrack is a Qur’an Learning Management System (QLMS) we are building: a platform for recording students’ Qur’an progress, designed to be fast and simple, with a digital Qur’an. Teachers record daily progress, and authorized parties (guardians, students, the institution, and the Mudir) can view it according to the institution’s settings. The goal is to reduce manual recitation books that get lost or mixed up." },
        { q: "Is NgajiTrack available yet?", a: "Not yet. NgajiTrack is an early-stage product in development. We are talking with institutions about their needs and a possible future pilot." },
        { q: "Is NgajiTrack paid?", a: "The plan is a B2B SaaS model: institutions, pesantren, and TPQ subscribe to manage their students. For individual teachers, we plan to offer a free offline mode that works without a server connection, so progress can still be recorded on a phone. Plans and pricing have not been set." },
        { q: "Who is NgajiTrack designed for?", a: "Four groups:\n• Teachers: designed so recitation records can be entered quickly.\n• Students: view their own progress, when the institution enables it.\n• Guardians: follow progress from home without waiting for monthly reports.\n• Mudir and institutions: oversee halaqah, teacher activity, and assessment recaps in one dashboard." },
        { q: "How is it different from other Qur’an apps?", a: "Most Qur’an apps focus on reading. NgajiTrack is designed to bring a digital Qur’an, a digital recitation book, report cards, and an institutional dashboard together, so students’ progress can be followed through to completion." },
        { q: "Does it always need internet?", a: "No. It is designed so teachers can record in offline mode. When a connection is available, data would sync automatically to the institution’s server, for institutions with a subscription." },
        { q: "How can guardians follow their child’s progress?", a: "Guardians would get a dedicated account, when the institution enables it. The planned view shows the pages or surahs recorded today, notes from the teacher, and a monthly progress chart." },
        { q: "Is student data safe?", a: "Protecting student data is a core design priority. Access is designed to be permission-based: only teachers, the relevant guardian, and institution admins can see it. We commit to never selling data. Technical details on encryption and our privacy policy will be published before launch." },
        { q: "Can small TPQ or tahfiz houses use it?", a: "Yes, it is designed for institutions of any size, from small TPQ and Qur’an houses to large pesantren. We want small institutions to be able to start simply." },
        { q: "Can an institution use its own name and logo?", a: "That is planned for institution plans: dashboards and reports would carry your institution’s name and logo, so they look professional to guardians." },
        { q: "Does it replace educators?", a: "No. NgajiTrack is designed to support recordkeeping and visibility. Teaching and assessment remain with educators." },
        { q: "Will there be AI features?", a: "Under exploration: privacy-conscious AI-assisted administrative summaries, subject to validation and educator review. It would not assess recitation, replace educators, or determine religious correctness. This is a future plan, not a released feature." },
        { q: "How can an institution discuss an early pilot?", a: "Use the “Discuss a Pilot” button to message us on WhatsApp, introducing your institution and what you hope to improve." },
      ],
    },
    footer: {
      title: "Run a Qur’an learning institution?",
      body: "We’d love to hear how you track progress today and what would help your educators most.",
      cta: "Contact Aseera",
      ctaLabel: "Contact Aseera on WhatsApp",
      whatsappMessage: "Assalamu’alaikum, I’d like to learn more about NgajiTrack.",
      emailLabel: "Email",
      byline: "A product by",
      website: "Aseera website",
      rights: "All rights reserved.",
    },
  },
}

export type Dictionary = (typeof dictionary)["id"]
