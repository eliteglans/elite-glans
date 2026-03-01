import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, Settings, UserCheck, Star, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Eye,
      title: t('Noggrannhet i varje detalj', 'Precision in every detail'),
      desc: t(
        'Vi missar inget. Varje yta, varje hörn — alltid grundligt.',
        'We miss nothing. Every surface, every corner — always thorough.'
      ),
    },
    {
      icon: Settings,
      title: t('Flexibla lösningar', 'Flexible solutions'),
      desc: t(
        'Anpassade scheman och tjänster efter just dina behov.',
        'Customized schedules and services for your specific needs.'
      ),
    },
    {
      icon: UserCheck,
      title: t('Anpassad service', 'Tailored service'),
      desc: t(
        'Vi lyssnar på dig och anpassar oss efter dina önskemål.',
        'We listen to you and adapt to your wishes.'
      ),
    },
    {
      icon: Star,
      title: t('Professionellt bemötande', 'Professional approach'),
      desc: t(
        'Vi värdesätter respekt, punktlighet och god kommunikation.',
        'We value respect, punctuality, and good communication.'
      ),
    },
    {
      icon: Shield,
      title: t('Fokus på kvalitet', 'Focus on quality'),
      desc: t(
        'Kvalitet är inte bara ett löfte — det är vår standard.',
        'Quality is not just a promise — it\'s our standard.'
      ),
    },
  ];

  return (
    <section className="py-24 bg-[#F8F5F1]">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0F172A] text-white text-sm font-medium mb-4 uppercase tracking-wide">
            {t('Varför vi?', 'Why us?')}
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F172A]">
            {t('Varför välja Elite Glans?', 'Why choose Elite Glans?')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border border-[#E5E7EB] shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold text-[#0F172A] mb-1">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {reason.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
