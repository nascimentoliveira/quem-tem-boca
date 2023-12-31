import './globals.css';
import type { Metadata } from 'next';

import theme, { ThemeWrapper } from '@/themes/theme';
import { UserProvider } from '@/contexts/userContext';
import { ScreenSizeProvider } from '@/contexts/screenContext';

export const metadata: Metadata = {
  title: 'Quem tem boca',
  description: 'Acesse seus restaurantes prediletos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeWrapper>
          <ScreenSizeProvider theme={theme}>
            <UserProvider>{children}</UserProvider>
          </ScreenSizeProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}
