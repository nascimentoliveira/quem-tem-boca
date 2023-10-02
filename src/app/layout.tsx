import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quem tem boca',
  description: 'Acesse seus restaurantes prediletos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
