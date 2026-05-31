import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DataLens — Your data, fully accounted for",
  description:
    "Track every MB across MTN, Airtel, Glo and 9mobile. Buy data in-app, see exactly where it went, and never wonder again. Built in Lagos.",
  keywords: ["data tracker", "Nigeria", "MTN", "Airtel", "Glo", "9mobile", "data usage", "Nigeria fintech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-dl-bg text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
