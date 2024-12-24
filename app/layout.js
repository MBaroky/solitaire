import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const gerbil = localFont({
  src: "./assets/fonts/gerbil.otf",
  variable: "--font-gerbil",
});

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Solitaire Crest",
  description: "Real Estate home",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${gerbil.variable} ${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
