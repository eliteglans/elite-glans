import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="quote"  className="bg-secondary/60 backdrop-blur-md rounded-2xl p-8 border border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4 uppercase tracking-wide">
            {t('Kontakt', 'Contact')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('Begär en kostnadsfri offert', 'Request a free quote')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Fyll i formuläret så återkommer vi med en skräddarsydd offert.',
              'Fill in the form and we\'ll get back to you with a tailored quote.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                {t('Kontaktuppgifter', 'Contact Information')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-0.5">{t('Telefon', 'Phone')}</p>
                    <p className="font-medium text-foreground">070-123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-0.5">Email</p>
                    <p className="font-medium text-foreground">info@eliteglans.se</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-0.5">{t('Område', 'Area')}</p>
                    <p className="font-medium text-foreground">Vallentuna, Stockholm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote form */}
          <form className="bg-card rounded-lg p-8 shadow-soft border border-border space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                {t('Namn', 'Name')} *
              </label>
              <input
                type="text"
                required
                className="w-full h-11 px-4 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder={t('Ditt namn', 'Your name')}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                {t('Telefonnummer', 'Phone number')} *
              </label>
              <input
                type="tel"
                required
                className="w-full h-11 px-4 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder={t('Ditt telefonnummer', 'Your phone number')}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                E-post *
              </label>
              <input
                type="email"
                required
                className="w-full h-11 px-4 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder={t('Din e-post', 'Your email')}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                {t('Typ av tjänst', 'Type of service')}
              </label>
              <select className="w-full h-11 px-4 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">{t('Välj tjänst...', 'Select service...')}</option>
                <option>{t('Hemstädning', 'Home Cleaning')}</option>
                <option>{t('Storstädning', 'Deep Cleaning')}</option>
                <option>{t('Lokalstädning', 'Commercial Cleaning')}</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                {t('Meddelande', 'Message')}
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder={t('Berätta om dina behov...', 'Tell us about your needs...')}
              />
            </div>
            <Button variant="default" className="w-full" size="lg">
              {t('Skicka förfrågan', 'Send request')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
