import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Tech for Impact — Technologie voor een eerlijke en duurzame toekomst",
  description:
    "Wij helpen jongeren om hun talent te ontwikkelen met technologie en om mee te bouwen aan een eerlijke en duurzame stad.",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport = {
  themeColor: "#0f9b72",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
