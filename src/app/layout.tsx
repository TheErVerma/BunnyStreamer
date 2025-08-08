import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { ThemeProvider } from 'next-themes';

import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Optional: use as CSS variable
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased dark:bg-gray-900 bg-gray-50  min-h-screen overflow-hidden flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <Header></Header>

          <div className='flex flex-grow relative'>
            <aside className="h-[calc(100vh-67px)] border-r border-gray-200 dark:border-gray-700 w-[250px] bg-white dark:bg-gray-800 overflow-auto">
              <Sidebar></Sidebar>
            </aside>
            <main className='h-[calc(100vh-67px)] w-[10%] flex-grow p-5 overflow-auto'>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


{ /*suppressHydrationWarning*/ }
