import Icon from '@/components/ui/icon';
import { ABOUT_POINTS, TEAM, CRAFT_IMG } from '@/components/data';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--olive)' }}>Наша история</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ color: 'var(--dark-wood)' }}>
              О нас —<br /><em>с теплом к делу</em>
            </h2>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: 'var(--terracotta)' }} />
            <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--olive)' }}>
              Мы — семейная мастерская, которая вот уже 15 лет создаёт мебель, где каждая деталь несёт в себе любовь к ремеслу. Наши мастера работают с натуральными материалами и вкладывают в каждое изделие частицу своей души.
            </p>
            <p className="font-body text-sm leading-relaxed mb-8" style={{ color: 'var(--olive)' }}>
              Мы верим, что хорошая мебель — это не просто предмет интерьера, а основа уютного дома, место силы и тепла. Именно поэтому мы никогда не идём на компромисс с качеством.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {ABOUT_POINTS.map(p => (
                <div key={p.label} className="border-l-2 pl-4" style={{ borderColor: 'var(--terracotta)' }}>
                  <div className="font-display text-3xl font-semibold" style={{ color: 'var(--warm-brown)' }}>{p.num}</div>
                  <div className="font-body text-xs mt-1" style={{ color: 'var(--olive)' }}>{p.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src={CRAFT_IMG} alt="Наше производство" className="w-full h-96 object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl p-6 shadow-lg max-w-xs" style={{ backgroundColor: 'var(--dark-wood)' }}>
              <Icon name="Quote" size={24} style={{ color: 'var(--terracotta)' }} />
              <p className="font-display text-lg italic leading-snug mt-3" style={{ color: 'var(--cream)' }}>
                «Каждый стол и каждый стул — это не товар, это история вашего дома»
              </p>
              <p className="font-body text-xs mt-3" style={{ color: 'var(--sand)', opacity: 0.7 }}>— Михаил, основатель ДомоВита</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--olive)' }}>Люди бренда</p>
            <h3 className="font-display text-3xl md:text-4xl font-light" style={{ color: 'var(--dark-wood)' }}>Наша команда</h3>
            <div className="mt-4 mx-auto w-16 h-px" style={{ backgroundColor: 'var(--terracotta)' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center hover-lift">
                <div className="relative mx-auto mb-5 w-40 h-40 rounded-full overflow-hidden border-4 shadow-lg"
                  style={{ borderColor: 'var(--sand)' }}>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <h4 className="font-display text-xl font-medium" style={{ color: 'var(--dark-wood)' }}>{member.name}</h4>
                <p className="font-body text-xs tracking-wide uppercase mt-1 mb-3" style={{ color: 'var(--terracotta)' }}>{member.role}</p>
                <p className="font-body text-sm leading-relaxed max-w-xs mx-auto" style={{ color: 'var(--olive)' }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
