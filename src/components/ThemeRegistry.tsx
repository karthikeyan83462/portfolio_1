'use client';

import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeContextProvider } from './ThemeContext';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      {children}
    </ThemeContextProvider>
  );
} 