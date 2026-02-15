import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anubhav Ranjan | Portfolio",
  description: "Portfolio of Anubhav Ranjan - Software Engineering & Data Science"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}

