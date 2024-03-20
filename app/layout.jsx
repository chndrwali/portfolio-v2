import { Outfit } from "next/font/google";
import "./globals.css";

// component
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Candra Wali Sanjaya | Portfolio",
  description: "Portfolio Candra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
        <Header /> 
        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  );
}
