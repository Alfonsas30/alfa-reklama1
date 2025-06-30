
import { Languages, Check } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const languages = [
  { code: 'lt' as Language, name: 'Lietuvių', flag: '🇱🇹' },
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' }
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium">
        <Languages size={20} />
        <span className="hidden md:inline">{currentLanguage?.flag}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/90 backdrop-blur-xl border border-cyan-400/20 text-white">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center gap-3 cursor-pointer hover:bg-cyan-500/20 focus:bg-cyan-500/20"
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="flex-1">{lang.name}</span>
            {language === lang.code && <Check size={16} className="text-cyan-400" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
