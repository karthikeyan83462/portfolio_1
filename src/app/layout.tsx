import type { Metadata } from 'next';
import ThemeRegistry from '../components/ThemeRegistry';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Karthikeyan - Developer & Writer',
  description: 'Personal developer blog and portfolio website of Karthikeyan, inspired by Josh W Comeau.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          <main style={{ minHeight: '80vh', paddingTop: '72px' }}>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
} 