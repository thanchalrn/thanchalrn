import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
//component
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Thanchanok Portfolio",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header/>
        <StairTransition/>
        <PageTransition>
        {children}
        </PageTransition>

      </body>
    </html>
  );
}
