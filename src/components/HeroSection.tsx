import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-transparent overflow-hidden">
      
      {/* Subtle warm background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#EDE7DF] to-transparent opacity-70" />
      
      {/* Soft glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#C7D2FE]/40 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1C1C1E] text-white text-sm font-medium mb-8 tracking-wide uppercase shadow-sm">
            📍 Vallentuna, Stockholm
          </span>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            {t('Glans i varje detalj.', 'Shine in every detail.')}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            {t(
              'Professionell hem- och företagsstädning i Vallentuna med fokus på kvalitet, noggrannhet och trygghet.',
              'Professional home and commercial cleaning in Vallentuna with focus on quality, precision, and trust.'
            )}
          </p>

          <div className="flex flex-wrap gap-4">
            
            <Button
              variant="default"
              size="lg"
              className="text-base px-8 bg-black text-white hover:bg-neutral-800 transition"
              asChild
            >
              <a href="#quote">{t('Begär offert', 'Request a quote')}</a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 border-white text-white hover:bg-white hover:text-black transition"
              asChild
            >
              <a href="#services">{t('Våra tjänster', 'Our services')}</a>
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;