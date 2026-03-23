import "./globals.css";

export const metadata = {
  title: "Tech 4 Impact — Technology for a sustainable community",
  description:
    "We help internationals to develop their talents with technology and contribute to a fair and sustainable city.",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport = {
  themeColor: "#0f9b72",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
