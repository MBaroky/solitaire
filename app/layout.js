import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Logo from "@/assets/logoWhite.svg";
import Footer from "./sections/Footer";

export const metadata = {
  title: "Solitaire Crest",
  description: "Real Estate home",
};

const gerbil = localFont({
  src: "./assets/fonts/gerbil.otf",
  variable: "--font-gerbil",
});

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${gerbil.variable} ${roboto.className} antialiased`}>
        <Header data={{ Logo }} />
        {children}

        <Footer data={{ Logo }} />
      </body>
    </html>
  );
}
