import { Fraunces, Work_Sans, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Display: Fraunces, a warm old-style serif with an optical-size axis,
// close in feel to the classic serif "GSR" in the logo.
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
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
      className={`${fraunces.variable} ${workSans.variable} ${geistMono.variable} h-full antialiased`}
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
