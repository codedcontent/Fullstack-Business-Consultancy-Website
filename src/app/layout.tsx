import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alex Web Tech",
  description:
    "Alex Web Tech offers stunning, budget-friendly websites designed to boost your business's online presence. With over 4 years of experience and 100+ successful projects, we create professional sites that set you apart from the competition. Contact us today for a free consultation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative`}>
        <Navbar />

        <div className="lg:px-20 md:px-10 px-5">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
