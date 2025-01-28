'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import translations from '@/components/translate/translations';

const Start = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const t = (key: string) => translations[key]?.[language] || key;

  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col gap-16 p-6 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="flex justify-between items-center w-full text-sm">
        <h1 className="text-lg font-bold">{t('headerTitle')}</h1>
        <nav className="flex gap-5 text-sm pb-4">
          <a href="#about" className="hover:underline">
            {t('navAbout')}
          </a>
          <a href="#projects" className="hover:underline">
            {t('navProjects')}
          </a>
          <a href="#contact" className="hover:underline">
            {t('navContact')}
          </a>
        </nav>
        <button
          onClick={toggleLanguage}
          className="ml-4 px-4 py-2 border rounded relative overflow-hidden"
        >
          <motion.span
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </motion.span>
        </button>
      </header>

      <main className="flex flex-col gap-8 items-center sm:items-start text-center sm:text-left">
        <h2 className="text-2xl font-bold">{t('heroTitle')}</h2>
        <p className="text-sm font-[family-name:var(--font-geist-mono)]">
          {t('heroDescription')}
        </p>
        <a
          onClick={() => router.push('/projects')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {t('heroButton')}
        </a>
      </main>

      <section id="about" className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">{t('aboutTitle')}</h3>
        <p>{t('aboutDescription')}</p>
      </section>

      <section id="contact" className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">{t('contactTitle')}</h3>
        <p>{t('contactDescription')}</p>
        <a
          href="mailto:maicolaroyave10@gmail.com"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          {t('contactButton')}
        </a>
      </section>

      <footer className="text-sm text-center">
        &copy; {new Date().getFullYear()} {t('headerTitle')}. {t('footer')}
      </footer>
    </div>
  );
};

export default Start;
