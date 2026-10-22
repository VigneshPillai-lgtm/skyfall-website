import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Skyfall — Department of Computer Applications | Kristu Jayanti",
  description: "Skyfall Hackathon organised by Department of Computer Applications, School of Computational and Physical Sciences, Kristu Jayanti (Deemed to be University)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
