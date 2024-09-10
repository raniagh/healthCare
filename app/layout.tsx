import type { Metadata } from "next";
///import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./globals.css";

/* const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
}); */

export const metadata: Metadata = {
  title: "HealthCare",
  description: "A healthcare management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
