import { useLanguage } from '@/contexts/LanguageContext';
import { Receipt } from 'lucide-react';

const RutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="rut" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-white rounded-xl p-10 md:p-14 border border-[#E5E7EB] shadow-md">
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-[#0F172A] flex items-center justify-center">
                <Receipt className="w-6 h-6 text-white" />
              </div>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0F172A]">
                {t('RUT-avdrag', 'RUT Tax Deduction')}
              </h2>
            </div>

            <p className="text-[#374151] leading-relaxed text-lg mb-6">
              {t(
                'Som privatperson har du möjlighet att utnyttja RUT-avdraget, vilket innebär att du får 50 % av arbetskostnaden avdragen direkt på fakturan. Det gör professionell städning mer prisvärd och tillgänglig.',
                'As a private individual, you can take advantage of the RUT tax deduction, which means 50% of the labor cost is deducted directly on your invoice. This makes professional cleaning more affordable and accessible.'
              )}
            </p>

            <p className="text-[#374151] leading-relaxed">
              {t(
                'RUT-avdraget gäller för tjänster som hemstädning och storstädning. Vi hanterar avdraget åt dig så att du slipper tänka på det — du betalar bara halva arbetskostnaden.',
                'The RUT deduction applies to services like home cleaning and deep cleaning. We handle the deduction for you so you don\'t have to think about it — you only pay half the labor cost.'
              )}
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default RutSection;
