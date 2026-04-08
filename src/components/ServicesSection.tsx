import Icon from '@/components/ui/icon';
import { SERVICES, GUARANTEES } from '@/components/data';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6" style={{ backgroundColor: 'var(--sand)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--olive)' }}>Что мы предлагаем</p>
          <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: 'var(--dark-wood)' }}>Услуги</h2>
          <div className="mt-4 mx-auto w-16 h-px" style={{ backgroundColor: 'var(--terracotta)' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="hover-lift rounded-lg p-7" style={{ backgroundColor: 'var(--cream)' }}>
              <div className="mb-5 w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--terracotta)' }}>
                <Icon name={s.icon} size={20} style={{ color: 'var(--cream)' }} />
              </div>
              <h3 className="font-display text-xl mb-3" style={{ color: 'var(--dark-wood)' }}>{s.title}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--olive)' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Guarantee banner */}
        <div className="mt-16 rounded-xl p-10 md:p-14" style={{ backgroundColor: 'var(--warm-brown)' }}>
          <div className="text-center mb-10">
            <p className="font-body text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--terracotta)' }}>Ваша уверенность</p>
            <h3 className="font-display text-3xl md:text-4xl font-light" style={{ color: 'var(--cream)' }}>
              Гарантия и условия возврата
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--sand)', opacity: 0.9 }}>
              Мы уверены в качестве нашей продукции и предлагаем прозрачные условия для каждого покупателя.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUARANTEES.map((g) => (
              <div key={g.title} className="rounded-lg p-6 border" style={{ borderColor: 'rgba(232,217,197,0.2)', backgroundColor: 'rgba(232,217,197,0.07)' }}>
                <div className="mb-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(196,112,58,0.25)' }}>
                  <Icon name={g.icon} size={19} style={{ color: 'var(--terracotta)' }} />
                </div>
                <h4 className="font-display text-lg mb-2" style={{ color: 'var(--cream)' }}>{g.title}</h4>
                <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--sand)', opacity: 0.8 }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
