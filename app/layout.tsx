import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sarfaraz B Tonshyal Portfolio",
  description: "Portfolio of Sarfaraz B Tonshyal, BTech Computer Science Student at Presidency University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground min-h-screen transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
