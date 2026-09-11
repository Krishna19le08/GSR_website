import { Zilla_Slab, Work_Sans, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const zillaSlab = Zilla_Slab({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GSR — Global Social Responsibility Welfare Foundation",
  description:
    "Global Social Responsibility Welfare Foundation (GSR) — protecting the environment, advancing education, empowering communities, and creating opportunities for all.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${zillaSlab.variable} ${workSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
