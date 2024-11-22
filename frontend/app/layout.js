import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "TalkMute",
  description: "Bridging the gap of sign language",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background">{children}</body>
    </html>
  );
}
