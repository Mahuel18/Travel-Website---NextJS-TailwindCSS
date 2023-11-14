import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./../components/navbar/page";
import Footer from "./../components/footer/page";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mahuel Travel',
  description: 'Travel Site Model by Emanuel Lopez',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
