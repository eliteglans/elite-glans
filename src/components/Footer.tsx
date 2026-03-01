import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B1120] py-14">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Logo & Description */}
          <div>
            <span className="font-heading font-bold text-xl text-white mb-4 block">
              Elite Glans
            </span>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              {t(
                'Professionella städtjänster i Vallentuna och omgivning. Glans i varje detalj.',
                'Professional cleaning services in Vallentuna and surroundings. Shine in every detail.'
              )}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              {t('Tjänster', 'Services')}
            </h4>

            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white transition">Hemstädning</li>
              <li className="hover:text-white transition">Storstädning</li>
              <li className="hover:text-white transition">Lokalstädning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              {t('Kontakt', 'Contact')}
            </h4>

            <ul className="space-y-2 text-sm text-white/70">
              <li>070-123 45 67</li>
              <li>info@eliteglans.se</li>
              <li>Vallentuna, Stockholm</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Elite Glans.{' '}
            {t('Alla rättigheter förbehållna.', 'All rights reserved.')}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;