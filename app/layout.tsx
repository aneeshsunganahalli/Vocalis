import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Vocalis",
  description: "AI-Powered platform for preparing for interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.className} antialiased pattern`}
      >
        {children}
      </body>
    </html>
  );
}
