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

const siteDescription =
  "Global Social Responsibility Welfare Foundation (GSR) — protecting the environment, advancing education, empowering communities, and creating opportunities for all.";

export const metadata = {
  metadataBase: new URL("https://www.gsrwf.com"),
  title: {
    default: "GSR — Global Social Responsibility Welfare Foundation",
    template: "%s",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "GSR — Global Social Responsibility Welfare Foundation",
    title: "GSR — Global Social Responsibility Welfare Foundation",
    description: siteDescription,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "GSR — Global Social Responsibility Welfare Foundation",
    description: siteDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${zillaSlab.variable} ${workSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a href="#main-content" className="gsr-skip-link">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
