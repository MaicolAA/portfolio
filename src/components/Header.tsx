import { useState } from 'react';
import { motion } from 'framer-motion';
import translations from './translate/translations';

type props = {
  onClickToggleLanguage: () => void;
};

const Header = ({ onClickToggleLanguage }: props) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    onClickToggleLanguage();
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const t = (key: string) => translations[key]?.[language] || key;

  return (
    <>
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
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </motion.span>
        </button>
      </header>
    </>
  );
};

export default Header;
