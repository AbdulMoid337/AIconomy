import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "../components/Footer";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI.Conomy",
  description: "one stop finance platform",
};

export default function RootLayout({ children ,Component, pageProps }) {
  return (
    <ClerkProvider debug>
      <html lang="en">
        <body className={`${inter.className}`}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
