import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bajwa Web Studio | Websites for Growing Businesses",
  description: "Strategic websites and custom web applications for local businesses that want to look established, earn trust, and win more customers.",
  keywords: ["web design", "web development", "small business website", "Bajwa Web Studio", "Haider Bajwa"],
  authors: [{ name: "Haider Bajwa" }],
  openGraph: { title: "Bajwa Web Studio", description: "Websites that make your business hard to overlook.", type: "website" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
