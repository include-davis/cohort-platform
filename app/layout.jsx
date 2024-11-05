import "./globals.scss";
import { Inter } from 'next/font/google';

import Navbar from "./_components/navbar/navbar";
import Footer from "./_components/footer/footer";

const inter = Inter({
  subsets: ['latin']
});

export const metadata = {
  title: "Cohort Platform",
  description: "Educational platform for #include at Davis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="layout-container">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
       </div>
      </body>
    </html>
  );
}
