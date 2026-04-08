import Icon from '@/components/ui/icon';
import { CATALOG_ITEMS, FEATURED_PRODUCTS, TABLE_IMG } from '@/components/data';

interface CatalogSectionProps {
  onNav: (id: string) => void;
}

const CatalogSection = ({ onNav }: CatalogSectionProps) => {
  return (
    <section id="catalog" className="py-24 px-6" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--olive)' }}>Наш ассортимент</p>
          <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: 'var(--dark-wood)' }}>Каталог мебели</h2>
          <div className="mt-4 mx-auto w-16 h-px" style={{ backgroundColor: 'var(--terracotta)' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATALOG_ITEMS.map((item) => (
            <div
              key={item.title}
              className="hover-lift rounded-lg p-7 border relative cursor-pointer"
              style={{ backgroundColor: 'var(--sand)', borderColor: 'transparent' }}
            >
              {item.tag && (
                <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full font-body text-xs font-medium"
                  style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)' }}>
                  {item.tag}
                </span>
              )}
              <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--warm-brown)' }}>
                <Icon name={item.icon} size={22} style={{ color: 'var(--cream)' }} />
              </div>
              <h3 className="font-display text-xl font-medium mb-2" style={{ color: 'var(--dark-wood)' }}>{item.title}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--olive)' }}>{item.desc}</p>
              <div className="mt-5 flex items-center gap-1.5 font-body text-sm font-medium" style={{ color: 'var(--terracotta)' }}>
                Подробнее <Icon name="ArrowRight" size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Product cards */}
        <div className="mt-12">
          <h3 className="font-display text-2xl md:text-3xl font-light mb-8" style={{ color: 'var(--dark-wood)' }}>
            Избранные товары
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PRODUCTS.map((p) => (
              <div key={p.title} className="hover-lift rounded-xl overflow-hidden border" style={{ backgroundColor: 'var(--cream)', borderColor: 'var(--sand)' }}>
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full font-body text-xs font-medium"
                    style={{ backgroundColor: 'var(--warm-brown)', color: 'var(--cream)' }}>
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl font-medium mb-2" style={{ color: 'var(--dark-wood)' }}>{p.title}</h4>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--olive)' }}>{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-semibold" style={{ color: 'var(--warm-brown)' }}>{p.price}</span>
                    <button
                      onClick={() => onNav('contacts')}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-body text-sm font-medium transition-all hover:opacity-90"
                      style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)' }}
                    >
                      Заказать <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-xl overflow-hidden grid md:grid-cols-2 shadow-lg">
          <div className="relative h-64 md:h-auto">
            <img src={TABLE_IMG} alt="Обеденный стол из дуба" className="w-full h-full object-cover" />
          </div>
          <div className="p-10 flex flex-col justify-center" style={{ backgroundColor: 'var(--dark-wood)' }}>
            <p className="font-body text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--terracotta)' }}>Хит сезона</p>
            <h3 className="font-display text-3xl font-light mb-4" style={{ color: 'var(--cream)' }}>
              Обеденный стол «Дубрава»
            </h3>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'var(--sand)', opacity: 0.85 }}>
              Массив дуба, ручная обработка, масло-воск. Размеры от 120×80 до 300×100 см. Цвет и покрытие на выбор.
            </p>
            <div className="flex items-end gap-3 mb-6">
              <span className="font-display text-3xl" style={{ color: 'var(--cream)' }}>от 48 900 ₽</span>
            </div>
            <button
              onClick={() => onNav('contacts')}
              className="self-start px-7 py-3 rounded font-body text-sm font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)' }}
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
