import type { Metadata } from "next";
import { Spline_Sans } from "next/font/google";
import "./globals.css";

const spline = Spline_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shelter soul",
  description: "Help homeless mental disabled individuals ",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png?v=4"],
  },
  }
;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${spline.className}`}>{children}</body>
      </html>
    </>
  );
}
