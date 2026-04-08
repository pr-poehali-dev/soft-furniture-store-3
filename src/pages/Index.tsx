import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/2c2f7bca-64bc-4b28-aff2-478e621513c7/files/0c03234e-2100-4575-b0da-7a7acffb7001.jpg';
const TABLE_IMG = 'https://cdn.poehali.dev/projects/2c2f7bca-64bc-4b28-aff2-478e621513c7/files/fb66d10a-b0a7-4231-9bde-2bd3a0c95657.jpg';
const CRAFT_IMG = 'https://cdn.poehali.dev/projects/2c2f7bca-64bc-4b28-aff2-478e621513c7/files/09f48eb8-312b-4bdb-a625-248941850ab5.jpg';

const NAV_ITEMS = [
  { id: 'home', label: 'Главная' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'services', label: 'Услуги' },
  { id: 'about', label: 'О нас' },
  { id: 'contacts', label: 'Контакты' },
];

const CATALOG_ITEMS = [
  { title: 'Диваны и кресла', desc: 'Мягкая мебель для гостиной и спальни', icon: 'Sofa', tag: 'Популярное' },
  { title: 'Обеденные столы', desc: 'Из массива дуба, ясеня и ореха', icon: 'UtensilsCrossed', tag: 'Новинка' },
  { title: 'Шкафы и комоды', desc: 'Вместительные решения для хранения', icon: 'Package', tag: '' },
  { title: 'Кровати', desc: 'Спальные места с ортопедическим основанием', icon: 'BedDouble', tag: '' },
  { title: 'Детская мебель', desc: 'Безопасная и экологичная для детей', icon: 'Baby', tag: 'Хит' },
  { title: 'Мебель на заказ', desc: 'Разработаем под ваш размер и стиль', icon: 'Ruler', tag: '' },
  { title: 'Кресла', desc: 'Кресла-качалки, акцентные и офисные модели', icon: 'Armchair', tag: 'Новинка' },
  { title: 'Матрасы', desc: 'Ортопедические матрасы для здорового сна', icon: 'BedSingle', tag: '' },
];

const SERVICES = [
  { icon: 'Pencil', title: 'Дизайн-проект', desc: 'Подберём мебель под интерьер вашего дома, разработаем расстановку и 3D-визуализацию.' },
  { icon: 'Truck', title: 'Доставка и сборка', desc: 'Доставляем по всему городу. Опытные сборщики установят мебель без лишнего шума и пыли.' },
  { icon: 'Wrench', title: 'Ремонт мебели', desc: 'Реставрируем и ремонтируем любую мебель — вернём любимым вещам вторую жизнь.' },
  { icon: 'RefreshCw', title: 'Трейд-ин', desc: 'Сдайте старую мебель и получите скидку на новую коллекцию до 20%.' },
];

const GUARANTEES = [
  { icon: 'ShieldCheck', title: 'Гарантия 5 лет', desc: 'На всю мебель собственного производства. Безвозмездно устраним любые дефекты материалов или сборки.' },
  { icon: 'RotateCcw', title: 'Возврат 14 дней', desc: 'Если товар не подошёл — вернём деньги в полном объёме без лишних вопросов.' },
  { icon: 'FileCheck', title: 'Обмен без хлопот', desc: 'Обменяем товар надлежащего качества, если размер или цвет не совпал с ожиданиями.' },
  { icon: 'Phone', title: 'Поддержка 24/7', desc: 'Консультируем по любым вопросам — от выбора мебели до решения гарантийных случаев.' },
];

const ABOUT_POINTS = [
  { num: '15+', label: 'лет на рынке' },
  { num: '3 000+', label: 'довольных клиентов' },
  { num: '500+', label: 'моделей в каталоге' },
  { num: '100%', label: 'натуральные материалы' },
];

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

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'rgba(247,243,238,0.92)', borderColor: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold tracking-wide" style={{ color: 'var(--warm-brown)' }}>
              ДомоВита
            </span>
            <span className="hidden sm:block text-xs font-body tracking-widest uppercase" style={{ color: 'var(--olive)' }}>мебель</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link font-body text-sm"
                style={{ color: activeSection === item.id ? 'var(--terracotta)' : 'var(--dark-wood)' }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+79001234567" className="hidden md:flex items-center gap-2 text-sm font-body" style={{ color: 'var(--warm-brown)' }}>
              <Icon name="Phone" size={15} />
              +7 (900) 123-45-67
            </a>
            <button className="md:hidden p-2 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 border-t" style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--cream)' }}>
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-3 font-body text-sm border-b"
                style={{ borderColor: 'var(--sand)', color: 'var(--dark-wood)' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

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

      {/* CATALOG */}
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
                onClick={() => scrollTo('contacts')}
                className="self-start px-7 py-3 rounded font-body text-sm font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: 'var(--terracotta)', color: 'var(--cream)' }}
              >
                Заказать
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
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

      {/* ABOUT */}
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
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--olive)' }}>Будем рады общению</p>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: 'var(--dark-wood)' }}>Контакты</h2>
            <div className="mt-4 mx-auto w-16 h-px" style={{ backgroundColor: 'var(--terracotta)' }} />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--cream)' }}>
              <h3 className="font-display text-2xl mb-6" style={{ color: 'var(--dark-wood)' }}>Наши данные</h3>
              <div className="space-y-5">
                {[
                  { icon: 'Phone', label: 'Телефон', value: '+7 (900) 123-45-67' },
                  { icon: 'Mail', label: 'Email', value: 'info@domovita.ru' },
                  { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Дубравная, 12' },
                  { icon: 'Clock', label: 'Режим работы', value: 'Пн–Вс: 10:00 – 20:00' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'var(--sand)' }}>
                      <Icon name={item.icon} size={16} style={{ color: 'var(--warm-brown)' }} />
                    </div>
                    <div>
                      <div className="font-body text-xs" style={{ color: 'var(--olive)' }}>{item.label}</div>
                      <div className="font-body text-sm font-medium mt-0.5" style={{ color: 'var(--dark-wood)' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: 'MessageCircle', label: 'WhatsApp' },
                  { icon: 'Send', label: 'Telegram' },
                  { icon: 'Phone', label: 'Позвонить' },
                ].map(s => (
                  <button
                    key={s.label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border font-body text-sm transition-all hover:opacity-80"
                    style={{ borderColor: 'var(--sand)', color: 'var(--warm-brown)', backgroundColor: 'var(--sand)' }}
                  >
                    <Icon name={s.icon} size={15} />
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--cream)' }}>
              <h3 className="font-display text-2xl mb-6" style={{ color: 'var(--dark-wood)' }}>Оставить заявку</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block font-body text-xs mb-1.5" style={{ color: 'var(--olive)' }}>Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-lg border font-body text-sm outline-none transition"
                    style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--sand)', color: 'var(--dark-wood)' }}
                  />
                </div>
                <div>
                  <label className="block font-body text-xs mb-1.5" style={{ color: 'var(--olive)' }}>Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-lg border font-body text-sm outline-none transition"
                    style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--sand)', color: 'var(--dark-wood)' }}
                  />
                </div>
                <div>
                  <label className="block font-body text-xs mb-1.5" style={{ color: 'var(--olive)' }}>Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Расскажите о вашем запросе..."
                    className="w-full px-4 py-3 rounded-lg border font-body text-sm outline-none resize-none transition"
                    style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--sand)', color: 'var(--dark-wood)' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg font-body text-sm font-medium tracking-wide transition-all hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: 'var(--warm-brown)', color: 'var(--cream)' }}
                >
                  Отправить заявку
                </button>
                <p className="font-body text-xs text-center" style={{ color: 'var(--olive)' }}>
                  Ответим в течение 30 минут в рабочее время
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t" style={{ backgroundColor: 'var(--dark-wood)', borderColor: 'rgba(232,217,197,0.1)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl" style={{ color: 'var(--sand)' }}>ДомоВита</span>
            <span className="font-body text-xs tracking-widest uppercase" style={{ color: 'var(--olive)' }}>мебель</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-body text-xs transition-colors hover:text-white"
                style={{ color: 'var(--olive)' }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <p className="font-body text-xs" style={{ color: 'var(--olive)' }}>
            © 2024 ДомоВита. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;