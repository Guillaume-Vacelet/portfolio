import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface LanguageContextType {
  languages: string[];
  setLanguages: (languages: string[]) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  languages: ['En', 'Fr', 'Kr'],
  setLanguages: () => {}
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [languages, setLanguages] = useState<string[]>(['En', 'Fr', 'Kr']);

  const value = {
    languages,
    setLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;