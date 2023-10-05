import './globals.css';
import type { Metadata } from 'next';

import { ThemeWrapper } from '@/themes/theme';
import { UserProvider } from '@/contexts/userContext';

export const metadata: Metadata = {
  title: 'Quem tem boca',
  description: 'Acesse seus restaurantes prediletos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeWrapper>
          <UserProvider>{children}</UserProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}
