import Icon from '@/components/ui/icon';
import { NAV_ITEMS } from '@/components/data';

interface HeaderProps {
  menuOpen: boolean;
  activeSection: string;
  onNav: (id: string) => void;
  onMenuToggle: () => void;
}

const Header = ({ menuOpen, activeSection, onNav, onMenuToggle }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'rgba(247,243,238,0.92)', borderColor: 'var(--sand)' }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => onNav('home')} className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold tracking-wide" style={{ color: 'var(--warm-brown)' }}>
            ДомоВита
          </span>
          <span className="hidden sm:block text-xs font-body tracking-widest uppercase" style={{ color: 'var(--olive)' }}>мебель</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
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
          <button className="md:hidden p-2 rounded" onClick={onMenuToggle}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 border-t" style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--cream)' }}>
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              className="block w-full text-left py-3 font-body text-sm border-b"
              style={{ borderColor: 'var(--sand)', color: 'var(--dark-wood)' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
