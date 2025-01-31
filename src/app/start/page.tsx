'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import translations from '@/components/translate/translations';
import Presentation from '@/components/Presentation';
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Start = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const t = (key: string) => translations[key]?.[language] || key;

  const router = useRouter();

  const goToProjects = () => router.push('/projects');

  return (
    <div className="min-h-screen flex flex-col gap-16 p-6 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <Header onClickToggleLanguage={toggleLanguage} />
      <main className="flex flex-col gap-8 items-center sm:items-start text-center sm:text-left">
        <Presentation
          heroTitle={t('heroTitle')}
          heroDescription={t('heroDescription')}
          heroButton={t('heroButton')}
          heroButtonAction={goToProjects}
        />
      </main>

      <AboutMe
        aboutTitle={t('aboutTitle')}
        aboutDescription={t('aboutDescription')}
      />

      <Contact
        contactTitle={t('contactTitle')}
        contactDescription={t('contactDescription')}
        contactButtonText={t('contactButton')}
      />

      <Footer headerTitle={t('headerTitle')} footer={t('footer')} />
    </div>
  );
};

export default Start;
