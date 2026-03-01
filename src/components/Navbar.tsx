import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t('Tjänster', 'Services'), href: '#services' },
    { label: t('Om oss', 'About'), href: '#about' },
    { label: t('RUT-avdrag', 'RUT Deduction'), href: '#rut' },
    { label: t('Kontakt', 'Contact'), href: '#quote' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <a href="#" className="font-heading font-bold text-xl text-foreground tracking-tight"> Elite <span className="text-gradient">Glans</span> </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={() => setLang(lang === 'sv' ? 'en' : 'sv')}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === 'sv' ? 'EN' : 'SV'}
          </button>

          <Button variant="default" size="sm" asChild>
            <a href="#quote">{t('Begär offert', 'Get a quote')}</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === 'sv' ? 'en' : 'sv')}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              {lang === 'sv' ? 'English' : 'Svenska'}
            </button>
            <Button variant="default" size="sm" asChild>
              <a href="#quote">{t('Begär offert', 'Get a quote')}</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
