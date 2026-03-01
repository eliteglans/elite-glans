import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4 uppercase tracking-wide">
            {t('Om oss', 'About Us')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t('Vi sätter standarden för städning', 'We set the standard for cleaning')}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            {t(
              'Elite Glans är ett nystartat städföretag med en tydlig ambition — att leverera den högsta kvaliteten inom städning i Vallentuna och omgivande områden. Vi tror på att noggrannhet, pålitlighet och kundnöjdhet är grunden för en framgångsrik verksamhet.',
              'Elite Glans is a newly established cleaning company with a clear ambition — to deliver the highest quality cleaning in Vallentuna and surrounding areas. We believe that precision, reliability, and customer satisfaction are the foundation of a successful business.'
            )}
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {t(
              'Vi arbetar strukturerat och med moderna metoder för att säkerställa bästa möjliga resultat varje gång. Oavsett om det handlar om hemstädning, storstädning eller lokalstädning — vi tar oss an varje uppdrag med samma engagemang och professionalitet.',
              'We work in a structured manner with modern methods to ensure the best possible results every time. Whether it\'s home cleaning, deep cleaning, or commercial cleaning — we approach every assignment with the same dedication and professionalism.'
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

























