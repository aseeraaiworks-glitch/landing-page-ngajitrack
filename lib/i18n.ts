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
