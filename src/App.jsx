import React, { useEffect, useMemo, useRef, useState } from 'react';
import heroBg from '../hero_bg.png';
import platHitam from '../plat_hitam.png';
import platKapal from '../plat_kapal.png';
import platBordes from '../plat_bordes.png';
import platStrip from '../plat_strip.png';
import besiSiku from '../besi_siku.png';
import hbeamWf from '../hbeam_wf.png';
import besiKonstruksi from '../besi_konstruksi.png';

const WHATSAPP =
  'https://wa.me/6281333399362?text=Halo%20PT.%20Cahaya%20Mandiri%20Bajamas,%20saya%20ingin%20menanyakan%20informasi%20produk.';
const MAPS_URL =
  'https://maps.google.com/?q=Jl.+Romokalisari+No.+80+Blok+E+No.+01,+Romokalisari,+Benowo,+Surabaya';
const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6123!2d112.6574!3d-7.2575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc2d3f5b7%3A0x5e3a2b4c6d7e8f9a!2sJl.%20Romokalisari%2C%20Surabaya!5e0!3m2!1sid!2sid!4v1';

const navItems = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang Kami' },
  { id: 'produk', label: 'Produk' },
  { id: 'logistik', label: 'Logistik' },
  { id: 'kontak', label: 'Kontak' }
];

const advantages = [
  {
    title: 'Rekam Jejak Matang',
    body: 'Melayani industri dan proyek konstruksi selama lebih dari 40 tahun dengan reputasi yang terbangun kuat.',
    icon: ClockIcon
  },
  {
    title: 'Pilihan Varian Luas',
    body: 'Menyediakan berbagai tipe, ukuran, dan ketebalan baja langsung dari gudang kami siap kirim kapan pun Anda butuhkan.',
    icon: GridIcon,
    featured: true
  },
  {
    title: 'Pengiriman Mandiri',
    body: 'Distribusi aman dengan armada transportasi operasional milik sendiri, efisien, tepat waktu, langsung ke site proyek.',
    icon: TruckIcon
  }
];

const products = [
  {
    name: 'Plat Hitam',
    en: 'Hot Rolled Steel Sheets',
    desc: 'Plat baja umum untuk kebutuhan fabrikasi standar dan struktural. Tersedia dalam berbagai ketebalan dan ukuran lembaran.',
    image: platHitam,
    alt: 'Plat Hitam Hot Rolled Steel',
    tag: 'Hot Rolled',
    category: 'plat',
    group: 'plat',
    waText: 'Halo,%20saya%20ingin%20menanyakan%20harga%20Plat%20Hitam.'
  },
  {
    name: 'Plat Kapal',
    en: 'Shipbuilding Quality Plates',
    desc: 'Plat dengan spesifikasi khusus ketahanan korosi lebih tinggi, standar industri galangan kapal dan tangki besar.',
    image: platKapal,
    alt: 'Plat Kapal Shipbuilding Quality',
    tag: 'Marine Grade',
    special: true,
    category: 'plat',
    group: 'plat',
    waText: 'Halo,%20saya%20ingin%20menanyakan%20harga%20Plat%20Kapal.'
  },
  {
    name: 'Plat Bordes',
    en: 'Checkered Plates',
    desc: 'Plat bertekstur kembang atau berpola, digunakan untuk lantai transportasi berat, tangga industri, dan fasilitas umum.',
    image: platBordes,
    alt: 'Plat Bordes Checkered Plate',
    tag: 'Anti-Slip',
    category: 'plat',
    group: 'plat',
    waText: 'Halo,%20saya%20ingin%20menanyakan%20harga%20Plat%20Bordes.'
  },
  {
    name: 'Plat Strip',
    en: 'Flat Bars',
    desc: 'Material baja pipih panjang untuk kebutuhan komponen struktural maupun industri otomotif dan karoseri.',
    image: platStrip,
    alt: 'Plat Strip Flat Bars',
    tag: 'Flat Bar',
    category: 'plat',
    group: 'plat',
    waText: 'Halo,%20saya%20ingin%20menanyakan%20harga%20Plat%20Strip.'
  },
  {
    name: 'Besi Siku',
    en: 'Angle Bars',
    desc: 'Profil baja siku untuk struktur pendukung, rangka, dan pekerjaan besi umum di konstruksi dan industri.',
    image: besiSiku,
    alt: 'Besi Siku Angle Bar',
    tag: 'Angle Bar',
    category: 'profil',
    group: 'profil',
    waText: 'Halo,%20saya%20ingin%20menanyakan%20harga%20Besi%20Siku.'
  },
  {
    name: 'H-Beam & WF-Beam',
    en: 'Wide Flange Steel Beams',
    desc: 'Material baja struktural utama berkapasitas beban tinggi untuk kolom dan balok bangunan pabrik atau jembatan. Tersedia berbagai ukuran profil.',
    image: hbeamWf,
    alt: 'H-Beam & WF-Beam',
    tag: 'Kapasitas Tinggi',
    category: 'profil',
    group: 'profil',
    special: true,
    wide: true,
    waText: 'Halo,%20saya%20ingin%20menanyakan%20harga%20H-Beam%20dan%20WF-Beam.'
  },
  {
    name: 'Kebutuhan Besi Konstruksi',
    en: 'Construction Steel & Pipes',
    desc: 'Menyediakan besi beton polos dan ulir serta pipa baja industri sesuai permintaan proyek Anda.',
    image: besiKonstruksi,
    alt: 'Kebutuhan Besi Konstruksi',
    tag: 'Custom Order',
    category: 'profil',
    group: 'profil',
    waText: 'Halo,%20saya%20ingin%20menanyakan%20kebutuhan%20besi%20konstruksi.'
  }
];

const productGroups = [
  {
    id: 'plat',
    eyebrow: 'Kategori A',
    title: 'Plat Baja',
    subtitle: 'Steel Plates',
    desc: 'Sektor utama pasokan kami dengan berbagai spesifikasi material mentah siap kirim.'
  },
  {
    id: 'profil',
    eyebrow: 'Kategori B',
    title: 'Profil & Baja Struktural',
    desc: 'Rangkaian produk baja profil berkapasitas tinggi untuk konstruksi bangunan dan infrastruktur.'
  }
];

const logistics = [
  {
    title: 'Kapasitas Gudang',
    desc: 'Operasional penyimpanan material terpusat di kawasan industri Romokalisari, Surabaya. Material terlindungi dari pengaruh cuaca dan tersimpan dengan aman sebelum pengiriman.',
    detail: 'Kawasan Industri Romokalisari, Surabaya',
    icon: WarehouseIcon
  },
  {
    title: 'Armada Pengiriman',
    desc: 'Pengiriman material berat dilakukan secara terjadwal menggunakan unit armada truk mandiri. Efisiensi biaya lebih terjaga dan ketepatan waktu sampai di site proyek lebih terjamin.',
    detail: 'Armada truk operasional milik sendiri',
    icon: TruckIcon,
    featured: true
  },
  {
    title: 'Jangkauan Nasional',
    desc: 'Melayani pengiriman ke berbagai wilayah di Indonesia untuk mendukung kebutuhan proyek konstruksi dan manufaktur skala besar maupun menengah.',
    detail: 'Distribusi ke seluruh Indonesia',
    icon: GlobeIcon
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [productFilter, setProductFilter] = useState('all');

  useRevealOnScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const current = navItems.findLast((item) => {
        const element = document.getElementById(item.id);
        return element ? window.scrollY + 120 >= element.offsetTop : false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        bottom: `${Math.random() * 40}%`,
        size: `${Math.random() * 3 + 1}px`,
        duration: `${4 + Math.random() * 8}s`,
        delay: `${Math.random() * 6}s`
      })),
    []
  );

  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <Header
        activeSection={activeSection}
        goToSection={goToSection}
        isMenuOpen={isMenuOpen}
        isScrolled={isScrolled}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero particles={particles} goToSection={goToSection} />
      <Advantages />
      <About goToSection={goToSection} />
      <Products productFilter={productFilter} setProductFilter={setProductFilter} />
      <Logistics />
      <CtaBanner />
      <Contact />
      <Footer goToSection={goToSection} />
      <FloatingWhatsapp />
      <ScrollProgress />
    </main>
  );
}

function Header({ activeSection, goToSection, isMenuOpen, isScrolled, setIsMenuOpen }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 shadow-2xl backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="page-container flex h-[68px] items-center justify-between gap-4 md:h-[76px] md:gap-6">
        <button className="flex shrink-0 items-center gap-3 text-left" onClick={() => goToSection('beranda')}>
          <LogoMark />
          <LogoText />
        </button>

        <nav
          className={`fixed inset-x-0 top-[68px] z-40 flex max-h-[calc(100svh-68px)] flex-col gap-1 overflow-y-auto border-b border-gold/20 bg-navy/95 p-4 backdrop-blur-xl transition-all duration-300 md:static md:z-auto md:flex md:max-h-none md:translate-y-0 md:flex-row md:items-center md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:pointer-events-auto ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-[110%] opacity-0 pointer-events-none'
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
              onClick={() => goToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <ExternalLink href={WHATSAPP} className="btn-whatsapp mt-2 md:ml-2 md:mt-0">
            <WhatsappIcon className="h-4 w-4" />
            Hubungi via WhatsApp
          </ExternalLink>
        </nav>

        <button
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          className={`hamburger md:hidden ${isMenuOpen ? 'hamburger-open' : ''}`}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero({ particles, goToSection }) {
  return (
    <section id="beranda" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img className="absolute inset-0 h-full w-full animate-hero-zoom object-cover" src={heroBg} alt="Gudang baja PT. Cahaya Mandiri Bajamas" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-navy/55" />
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              bottom: particle.bottom,
              width: particle.size,
              height: particle.size,
              animationDuration: particle.duration,
              animationDelay: particle.delay
            }}
          />
        ))}
      </div>

      <div className="page-container relative z-10 w-full max-w-[948px] pb-12 pt-28 sm:pb-16 sm:pt-32 md:py-36">
        <div className="hero-badge" data-reveal="fade-down">
          <span className="h-2 w-2 animate-dot-pulse rounded-full bg-whatsapp" />
          Stockist Baja Terpercaya Sejak 1986
        </div>
        <h1 className="mt-5 max-w-[12ch] font-display text-[2.35rem] font-black leading-[1.03] text-white min-[390px]:text-[2.7rem] sm:mt-6 sm:max-w-none sm:text-6xl lg:text-7xl" data-reveal="fade-up">
          Penyedia Besi & Plat Baja
          <br />
          <span className="relative text-gold after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-gold after:to-transparent">
            Komprehensif
          </span>
          <br />
          untuk Industri Anda
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8" data-reveal="fade-up">
          Berpengalaman dalam memenuhi kebutuhan material konstruksi dan manufaktur skala nasional sejak 1986. Sebagai stockist utama, kami memastikan
          ketersediaan barang yang stabil dan pengiriman yang presisi.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4" data-reveal="fade-up">
          <button className="btn btn-primary w-full sm:w-auto" onClick={() => goToSection('produk')}>
            Lihat Produk Kami
          </button>
          <ExternalLink href={WHATSAPP} className="btn btn-wa w-full sm:w-auto">
            <WhatsappIcon className="h-5 w-5" />
            Hubungi via WhatsApp
          </ExternalLink>
        </div>

        <div className="mt-10 grid w-full max-w-xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl sm:mt-14 md:flex md:w-fit md:max-w-3xl md:items-stretch" data-reveal="fade-up">
          <Stat target={40} suffix="+" label="Tahun Pengalaman" />
          <Stat target={1986} label="Tahun Berdiri" />
          <Stat target={7} suffix="+" label="Kategori Produk" />
          <div className="stat-block">
            <span className="font-display text-2xl font-black text-gold sm:text-3xl">OK</span>
            <span className="stat-label">Armada Sendiri</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-60 md:flex">
        <span className="text-xs uppercase tracking-[0.2em] text-white">Scroll</span>
        <span className="h-10 w-px animate-scroll-line bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section id="keunggulan" className="section-band bg-slate-50">
      <div className="page-container">
        <SectionHeader tag="Mengapa Kami?" title="Keunggulan Utama Kami" desc="Dipercaya oleh ratusan kontraktor dan pabrik di seluruh Indonesia selama lebih dari empat dekade." />
        <div className="grid gap-6 lg:grid-cols-3">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={`feature-card ${item.featured ? 'feature-card-dark' : ''}`} data-reveal="fade-up">
                <div className="icon-box">
                  <Icon className="h-7 w-7 sm:h-9 sm:w-9" />
                </div>
                <h3 className="font-display text-xl font-extrabold sm:text-2xl">{item.title}</h3>
                <p className={`mt-3 text-sm leading-7 ${item.featured ? 'text-white/75' : 'text-slate-600'}`}>{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About({ goToSection }) {
  const values = ['Produk Berstandar Industri', 'Ketersediaan Stok yang Stabil', 'Logistik Mandiri & Terpercaya', 'Layanan Skala Nasional'];

  return (
    <section id="tentang" className="section-band relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(13,27,42,.05),transparent_45%)]" />
      <div className="page-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative pb-8 sm:pb-6" data-reveal="fade-right">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-deep sm:rounded-[2rem]">
            <img className="h-full w-full object-cover" src={heroBg} alt="Gudang PT. Cahaya Mandiri Bajamas" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/65" />
            <div className="absolute right-4 top-4 rounded-xl bg-gold px-4 py-2.5 text-center text-navy shadow-gold sm:right-6 sm:top-6 sm:rounded-2xl sm:px-5 sm:py-3">
              <span className="block font-display text-2xl font-black leading-none sm:text-3xl">1986</span>
              <span className="text-[0.62rem] font-bold uppercase tracking-wider sm:text-xs">Tahun Berdiri</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-3 flex items-center gap-3 rounded-2xl border border-gold/25 bg-navy px-4 py-4 text-white shadow-deep sm:-bottom-5 sm:-left-2 sm:gap-4 sm:px-6 sm:py-5 md:-left-6">
            <span className="font-display text-4xl font-black leading-none text-gold sm:text-5xl">40+</span>
            <span className="text-xs leading-5 text-white/75 sm:text-sm">Tahun Melayani<br />Industri Indonesia</span>
          </div>
        </div>

        <div data-reveal="fade-left">
          <span className="section-tag">Tentang Kami</span>
          <h2 className="section-title mt-4 text-left">
            Mitra Baja Terpercaya
            <br />
            Sejak Generasi Pertama
          </h2>
          <p className="body-copy">
            PT. Cahaya Mandiri Bajamas berakar dari dedikasi panjang di industri perdagangan besi dan baja yang dimulai sejak tahun 1986. Berpusat
            di Surabaya, kami terus berevolusi hingga menjadi salah satu stockist baja dan kontraktor umum terpercaya di Indonesia.
          </p>
          <p className="body-copy">
            Kami berkomitmen penuh menjadi mitra strategis bagi kontraktor, pabrik, dan pengembang infrastruktur dengan menyediakan produk baja
            standar industri yang andal dari gudang kami langsung ke proyek Anda.
          </p>
          <div className="my-8 grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="flex items-center gap-3 rounded-lg bg-slate-100 px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-gold-pale hover:text-gold-dark">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {value}
              </div>
            ))}
          </div>
          <button className="btn btn-primary w-full sm:w-auto" onClick={() => goToSection('kontak')}>
            Hubungi Kami Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}

function Products({ productFilter, setProductFilter }) {
  const filters = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'plat', label: 'Plat Baja' },
    { id: 'profil', label: 'Profil Struktural' }
  ];

  return (
    <section id="produk" className="section-band bg-slate-50">
      <div className="page-container">
        <SectionHeader tag="Katalog Produk" title="Produk Baja & Besi Kami" desc="Stok material baja lengkap dan siap kirim dari plat baja hingga profil struktural berkapasitas tinggi." />

        <div className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-12 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0" data-reveal="fade-up">
          {filters.map((filter) => (
            <button key={filter.id} className={`tab-button ${productFilter === filter.id ? 'tab-button-active' : ''}`} onClick={() => setProductFilter(filter.id)}>
              {filter.label}
            </button>
          ))}
        </div>

        {productGroups
          .filter((group) => productFilter === 'all' || productFilter === group.id)
          .map((group) => (
            <div key={group.id} className="mt-12 first:mt-0">
              <div className="mb-8 text-center sm:mb-10" data-reveal="fade-up">
                <span className="rounded-full bg-gold-pale px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-gold-dark">{group.eyebrow}</span>
                <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
                  {group.title} {group.subtitle && <span className="text-gold-dark">({group.subtitle})</span>}
                </h3>
                <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">{group.desc}</p>
              </div>

              <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
                {products
                  .filter((product) => product.group === group.id)
                  .map((product) => (
                    <ProductCard key={product.name} product={product} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const href = `https://wa.me/6281333399362?text=${product.waText}`;

  return (
    <article className={`product-card ${product.wide ? 'xl:col-span-2' : ''}`} data-reveal="fade-up">
      <div className={`group relative overflow-hidden ${product.wide ? 'aspect-[16/10] sm:aspect-[16/8]' : 'aspect-[16/10]'}`}>
        <img className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={product.image} alt={product.alt} loading="lazy" />
        <div className="absolute inset-0 flex items-center justify-center bg-navy/75 opacity-0 transition group-hover:opacity-100">
          <ExternalLink href={href} className="translate-y-3 rounded-xl bg-gold px-6 py-3 text-sm font-bold text-navy transition group-hover:translate-y-0 hover:bg-gold-light">
            Tanya Harga
          </ExternalLink>
        </div>
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white ${product.special ? 'bg-gradient-to-r from-gold to-gold-dark' : 'bg-navy'}`}>
          {product.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h4 className="font-display text-xl font-extrabold leading-tight text-navy sm:text-2xl">{product.name}</h4>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gold-dark">{product.en}</p>
        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{product.desc}</p>
        <ExternalLink href={href} className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold text-gold-dark transition hover:gap-3 hover:text-gold">
          Tanya Ketersediaan
          <ArrowRightIcon className="h-4 w-4" />
        </ExternalLink>
      </div>
    </article>
  );
}

function Logistics() {
  return (
    <section id="logistik" className="section-band relative overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-navy-light">
      <div className="absolute inset-0 opacity-40 pattern-grid" />
      <div className="page-container relative">
        <SectionHeader
          light
          tag="Armada & Fasilitas"
          title="Logistik Mandiri & Terintegrasi"
          desc="Dari gudang Romokalisari langsung ke lokasi proyek Anda aman, terjadwal, dan efisien."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {logistics.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={`logistic-card ${item.featured ? 'border-gold/35 bg-gold/10' : ''}`} data-reveal="fade-up">
                <div className="icon-box bg-gold/15 text-gold">
                  <Icon className="h-7 w-7 sm:h-10 sm:w-10" />
                </div>
                <h3 className="mt-5 font-display text-xl font-extrabold text-white sm:mt-6 sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.desc}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-white/45">{item.detail}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2" data-reveal="fade-up">
          <LogisticPhoto image={heroBg} alt="Armada Truk PT. Cahaya Mandiri Bajamas" caption="Armada Operasional PT. CMB" />
          <LogisticPhoto image={platHitam} alt="Gudang Romokalisari PT. Cahaya Mandiri Bajamas" caption="Gudang Romokalisari, Surabaya" />
        </div>
      </div>
    </section>
  );
}

function LogisticPhoto({ image, alt, caption }) {
  return (
    <figure className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-deep">
      <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={image} alt={alt} />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-5 text-sm font-semibold text-white">{caption}</figcaption>
    </figure>
  );
}

function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold-dark via-gold to-gold-light py-14 sm:py-20">
      <div className="absolute inset-0 opacity-30 pattern-dots" />
      <div className="page-container relative flex flex-col items-stretch justify-between gap-7 text-center sm:items-center lg:flex-row lg:text-left" data-reveal="zoom-in">
        <div>
          <h2 className="font-display text-3xl font-black leading-tight text-navy sm:text-4xl">Siap Memenuhi Kebutuhan Baja Proyek Anda?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-navy/75 sm:text-base">Hubungi tim kami sekarang untuk konsultasi ketersediaan stok, spesifikasi teknis, dan penawaran harga terbaik.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ExternalLink href="https://wa.me/6281333399362?text=Halo%20PT.%20Cahaya%20Mandiri%20Bajamas,%20saya%20ingin%20menanyakan%20penawaran%20produk%20baja." className="btn btn-wa justify-center">
            <WhatsappIcon className="h-5 w-5" />
            Chat WhatsApp Sekarang
          </ExternalLink>
          <a href="tel:+62319900149" className="btn justify-center border-2 border-white/45 text-white hover:bg-white/10">
            <PhoneIcon className="h-5 w-5" />
            Telepon Kantor
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontak" className="section-band bg-white">
      <div className="page-container">
        <SectionHeader tag="Hubungi Kami" title="Informasi Kontak & Lokasi" desc="Kami siap melayani pertanyaan dan kebutuhan material baja Anda setiap hari kerja." />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
          <div className="flex flex-col gap-4 sm:gap-6" data-reveal="fade-right">
            <ContactCard icon={MapPinIcon} title="Alamat Kantor & Gudang">
              <p className="text-sm leading-7 text-slate-800">
                Jl. Romokalisari No. 80 Blok E No. 01,
                <br />
                Kelurahan Romokalisari, Kecamatan Benowo,
                <br />
                <strong>Surabaya - Indonesia</strong>
              </p>
              <ExternalLink href={MAPS_URL} className="mt-3 block text-sm font-semibold text-gold-dark hover:text-gold">
                Buka di Google Maps {'->'}
              </ExternalLink>
            </ContactCard>
            <ContactCard icon={WhatsappIcon} title="WhatsApp" accent>
              <ExternalLink href="https://wa.me/6281333399362" className="text-lg font-bold text-navy hover:text-gold-dark sm:text-xl">
                0813-3339-9362
              </ExternalLink>
            </ContactCard>
            <ContactCard icon={PhoneIcon} title="Telepon Kantor">
              <a className="block text-sm font-semibold text-gold-dark hover:text-gold" href="tel:+62319900149">
                (+62-31) 9900-1409
              </a>
              <a className="block text-sm font-semibold text-gold-dark hover:text-gold" href="tel:+62319900159">
                (+62-31) 9900-1593
              </a>
            </ContactCard>
            <ContactCard icon={MailIcon} title="Email Resmi">
              <a className="break-all text-sm font-semibold text-gold-dark hover:text-gold" href="mailto:ptcahayamandiri_bajamas89@yahoo.com">
                ptcahayamandiri_bajamas89@yahoo.com
              </a>
            </ContactCard>
          </div>

          <div data-reveal="fade-left">
            <div className="overflow-hidden rounded-2xl border-2 border-slate-200 shadow-deep">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi PT. Cahaya Mandiri Bajamas - Jl. Romokalisari No. 80, Surabaya"
              />
            </div>
            <ExternalLink href={MAPS_URL} className="btn mt-4 w-full justify-center border-2 border-slate-200 text-center text-navy hover:border-gold hover:text-gold">
              <MapPinIcon className="h-4 w-4" />
              Klik untuk Rute ke Gudang PT. CMB
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ accent = false, children, icon: Icon, title }) {
  return (
    <article className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-100 p-4 transition hover:-translate-y-1 hover:border-gold/40 hover:bg-gold-pale sm:gap-4 sm:p-6">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 sm:h-12 sm:w-12 ${accent ? 'border-transparent bg-gradient-to-br from-whatsapp to-whatsapp-dark text-white' : 'border-gold/25 bg-gold-pale text-gold-dark'}`}>
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <div className="min-w-0">
        <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">{title}</h4>
        {children}
      </div>
    </article>
  );
}

function Footer({ goToSection }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="border-b border-white/10 py-12 sm:py-16">
        <div className="page-container grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          <div>
            <button className="mb-5 flex items-center gap-3 text-left" onClick={() => goToSection('beranda')}>
              <LogoMark />
              <LogoText />
            </button>
            <p className="text-sm leading-7 text-white/55">Stockist baja & besi terpercaya di Indonesia.<br />Melayani industri konstruksi sejak 1986.</p>
          </div>
          <FooterLinks title="Navigasi" items={navItems.map((item) => ({ label: item.label, onClick: () => goToSection(item.id) }))} />
          <FooterLinks title="Produk" items={['Plat Hitam', 'Plat Kapal', 'Plat Bordes', 'H-Beam & WF', 'Besi Siku'].map((label) => ({ label, onClick: () => goToSection('produk') }))} />
          <div>
            <h5 className="footer-title">Kontak</h5>
            <ExternalLink href="https://wa.me/6281333399362" className="footer-link">WA: 0813-3339-9362</ExternalLink>
            <a href="tel:+62319900149" className="footer-link">Telp: (+62-31) 9900-1409</a>
            <a href="mailto:ptcahayamandiri_bajamas89@yahoo.com" className="footer-link break-all">ptcahayamandiri_bajamas89@yahoo.com</a>
            <ExternalLink href="https://wa.me/6281333399362" className="btn-whatsapp mt-3">
              <WhatsappIcon className="h-4 w-4" />
              Chat WhatsApp
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="page-container flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-white/35 md:flex-row md:text-left">
        <p>&copy; {year} PT. Cahaya Mandiri Bajamas. Seluruh hak cipta dilindungi.</p>
        <p>Jl. Romokalisari No. 80, Surabaya - Indonesia</p>
      </div>
    </footer>
  );
}

function FooterLinks({ items, title }) {
  return (
    <div>
      <h5 className="footer-title">{title}</h5>
      {items.map((item) => (
        <button key={item.label} className="footer-link block text-left" onClick={item.onClick}>
          {item.label}
        </button>
      ))}
    </div>
  );
}

function FloatingWhatsapp() {
  return (
    <ExternalLink href={WHATSAPP} className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-whatsapp to-whatsapp-dark text-white shadow-[0_8px_24px_rgba(37,211,102,.40)] transition hover:-translate-y-1 hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16" aria-label="Chat WhatsApp">
      <WhatsappIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      <span className="absolute -inset-1.5 rounded-full border-2 border-whatsapp animate-pulse-ring" />
    </ExternalLink>
  );
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="fixed left-0 top-0 z-[60] h-[3px] rounded-r bg-gradient-to-r from-gold to-gold-light transition-[width]" style={{ width: `${width}%` }} />;
}

function SectionHeader({ desc, light = false, tag, title }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center" data-reveal="fade-up">
      <span className={`section-tag ${light ? 'border-gold/35 bg-gold/15 text-gold-light' : ''}`}>{tag}</span>
      <h2 className={`section-title mt-4 ${light ? 'text-white' : ''}`}>{title}</h2>
      <p className={`mx-auto mt-4 max-w-2xl text-base leading-7 ${light ? 'text-steel-light' : 'text-slate-600'}`}>{desc}</p>
    </div>
  );
}

function Stat({ label, suffix = '', target }) {
  const { ref, value } = useCountUp(target);

  return (
    <div className="stat-block">
      <span className="font-display text-3xl font-black leading-none text-gold" ref={ref}>
        {value.toLocaleString('id-ID')}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function ExternalLink({ children, className = '', href, ...props }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function useCountUp(target) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const duration = 1800;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.floor(target * progress));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.unobserve(element);
      },
      { threshold: 0.6 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return { ref, value };
}

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function LogoText() {
  return (
    <span className="flex flex-col leading-none">
      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-gold">PT.</span>
      <span className="text-base font-bold text-white">Cahaya Mandiri</span>
      <span className="font-display text-sm font-black uppercase tracking-[0.15em] text-gold">Bajamas</span>
    </span>
  );
}

function LogoMark() {
  return (
    <svg className="h-[38px] w-[38px] shrink-0" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="38" height="38" rx="6" fill="url(#logoGrad)" />
      <path d="M8 10H30V14H22V28H16V14H8V10Z" fill="white" />
      <path d="M8 18H14V28H8V18Z" fill="rgba(255,255,255,0.4)" />
      <path d="M24 18H30V28H24V18Z" fill="rgba(255,255,255,0.4)" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8A020" />
          <stop offset="100%" stopColor="#C47A15" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ArrowRightIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ClockIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GridIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="7" height="7" />
      <rect x="15" y="3" width="7" height="7" />
      <rect x="15" y="14" width="7" height="7" />
      <rect x="2" y="14" width="7" height="7" />
    </svg>
  );
}

function TruckIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function WarehouseIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function GlobeIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function MapPinIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.63a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.02z" />
    </svg>
  );
}

function MailIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function WhatsappIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default App;
