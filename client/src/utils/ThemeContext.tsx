import { createContext, useContext } from 'react';
import { ThemeConfig } from './ThemeConfig';

interface Props {
   children: React.ReactNode;
}

const ThemeContext = createContext(ThemeConfig);

export const ThemeContextProvider = ({ children }: Props) => {
   return (
      <ThemeContext.Provider value={ThemeConfig}>
         {children}
      </ThemeContext.Provider>
   );
};
