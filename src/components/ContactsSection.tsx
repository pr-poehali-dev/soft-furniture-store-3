import Icon from '@/components/ui/icon';
import { NAV_ITEMS } from '@/components/data';

interface ContactsSectionProps {
  onNav: (id: string) => void;
}

const ContactsSection = ({ onNav }: ContactsSectionProps) => {
  return (
    <>
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
                onClick={() => onNav(item.id)}
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
    </>
  );
};

export default ContactsSection;
