import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { HERO_IMG } from '@/components/data';
import Header from '@/components/Header';
import CatalogSection from '@/components/CatalogSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactsSection from '@/components/ContactsSection';

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--cream)', color: 'var(--dark-wood)' }}>

      <Header
        menuOpen={menuOpen}
        activeSection={activeSection}
        onNav={scrollTo}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
      />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(58,36,21,0.75) 0%, rgba(58,36,21,0.15) 100%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
          <div className="max-w-xl animate-fade-up">
            <p className="font-body text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--sand)', opacity: 0.85 }}>
              Мебель ручной работы
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light leading-tight mb-6" style={{ color: 'var(--cream)' }}>
              Создаём уют<br />
              <em>с любовью</em>
            </h1>
            <p className="font-body text-base md:text-lg mb-10 leading-relaxed" style={{ color: 'var(--sand)', opacity: 0.9 }}>
              Каждый предмет мебели — это история о вашем доме. Мы создаём мебель, которая живёт вместе с вами долгие годы.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('catalog')}
                className="px-8 py-3.5 font-body font-medium text-sm tracking-wide rounded transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)' }}
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => scrollTo('contacts')}
                className="px-8 py-3.5 font-body font-medium text-sm tracking-wide rounded border transition-all hover:opacity-90"
                style={{ borderColor: 'var(--cream)', color: 'var(--cream)' }}
              >
                Связаться с нами
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: 'var(--cream)' }}>листайте</span>
          <Icon name="ChevronDown" size={18} style={{ color: 'white' }} />
        </div>
      </section>

      <CatalogSection onNav={scrollTo} />
      <ServicesSection />
      <AboutSection />
      <ContactsSection onNav={scrollTo} />

    </div>
  );
};

export default Index;
