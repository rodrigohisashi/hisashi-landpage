import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 bg-surface border border-border rounded-lg text-sm font-medium text-text-muted hover:text-text hover:border-border-hover transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Switch to ${language === 'pt' ? 'English' : 'Portuguese'}`}
    >
      <span className={language === 'pt' ? 'text-primary' : 'text-text-muted'}>
        PT
      </span>
      <div className="w-px h-4 bg-border" />
      <span className={language === 'en' ? 'text-primary' : 'text-text-muted'}>
        EN
      </span>
    </motion.button>
  );
}
