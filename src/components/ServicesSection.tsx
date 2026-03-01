import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Sparkles, Building2, Check } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('Hemstädning', 'Home Cleaning'),
      desc: t(
        'Regelbunden och noggrann städning av hela bostaden. Vi ser till att ditt hem alltid känns fräscht.',
        'Regular and thorough cleaning of your entire home. We make sure your home always feels fresh.'
      ),
      features: [
        t('Allmän städning av hela bostaden', 'General cleaning of the entire home'),
        t('Dammsugning och moppning', 'Vacuuming and mopping'),
        t('Noggrann rengöring av kök och badrum', 'Thorough cleaning of kitchen and bathroom'),
        t('Dammning av ytor', 'Dusting of surfaces'),
        t('Allt ingår förutom fönsterputs', 'Everything included except window cleaning'),
        t('Veckovis, varannan vecka eller månadsvis', 'Weekly, biweekly, or monthly'),
        t('RUT-avdrag (50 % av arbetskostnaden)', 'RUT deduction (50% of labor cost)'),
      ],
    },
    {
      icon: Sparkles,
      title: t('Storstädning', 'Deep Cleaning'),
      desc: t(
        'Djupgående rengöring för ett extra fräscht resultat. Perfekt vid säsongsstädning eller extra behov.',
        'In-depth cleaning for an extra fresh result. Perfect for seasonal cleaning or extra needs.'
      ),
      features: [
        t('Djupgående rengöring av alla ytor', 'Deep cleaning of all surfaces'),
        t('Flytt av lättare möbler för städning bakom och under', 'Moving lighter furniture for cleaning behind and underneath'),
        t('Extra noggrann badrumsrengöring', 'Extra thorough bathroom cleaning'),
        t('Rengöring av svåråtkomliga ytor', 'Cleaning of hard-to-reach surfaces'),
        t('Perfekt vid säsongsstädning', 'Perfect for seasonal cleaning'),
        t('Ingen flyttstädning erbjuds', 'No move-out cleaning offered'),
      ],
    },
    {
      icon: Building2,
      title: t('Lokalstädning', 'Commercial Cleaning'),
      desc: t(
        'Professionell städning av kontor, butiker, trapphus och andra lokaler. Anpassat efter er verksamhet.',
        'Professional cleaning of offices, shops, stairwells, and other premises. Adapted to your business.'
      ),
      features: [
        t('Alla typer av lokaler', 'All types of premises'),
        t('Kontor, butiker, trapphus m.m.', 'Offices, shops, stairwells, etc.'),
        t('Anpassade lösningar efter verksamhetens behov', 'Customized solutions for your business needs'),
        t('Möjlighet till fasta avtal', 'Option for fixed contracts'),
        t('Professionell och diskret service', 'Professional and discreet service'),
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-4 uppercase tracking-wide">
            {t('Våra tjänster', 'Our Services')}
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {t('Städtjänster för alla behov', 'Cleaning services for every need')}
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            {t(
              'Vi erbjuder professionella städtjänster i Vallentuna och omgivande områden.',
              'We offer professional cleaning services in Vallentuna and surrounding areas.'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-white/10"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0F172A] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-heading text-xl font-bold text-[#0F172A] mb-3">
                  {service.title}
                </h3>

                <p className="text-[#4B5563] leading-relaxed mb-6">
                  {service.desc}
                </p>

                <ul className="space-y-2.5">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[#374151]">
                      <Check className="w-4 h-4 text-[#0F172A] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;