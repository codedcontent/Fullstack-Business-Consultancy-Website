import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const logoPath = "/images/Alex Web Tech.png";

export const metadata: Metadata = {
  title: "Alex Web Tech",
  description:
    "Alex Web Tech offers stunning, budget-friendly websites designed to boost your business's online presence. With over 4 years of experience and 100+ successful projects, we create professional sites that set you apart from the competition. Contact us today for a free consultation!",
  referrer: "origin-when-cross-origin",
  keywords: ["Business", "Small Business", "Need website", "Need website UK"],
  authors: [
    { name: "Ogechukwu" },
    { name: "Mephors", url: "https://ogemeph.vercel.app" },
  ],
  creator: "Ogechukwu Mephors",
  publisher: "Ogechukwu Mephors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Alex Web Tech",
    description:
      "Alex Web Tech offers stunning, budget-friendly websites designed to boost your business's online presence. With over 4 years of experience and 100+ successful projects, we create professional sites that set you apart from the competition. Contact us today for a free consultation!",
    url: "https://alexwebtech.co.uk",
    siteName: "Alex Web Tech",
    images: [
      {
        // url: "https://www.alexwebtech.co.uk/_next/image?url=%2Fimages%2Foffice%20hero%20img.jpg&w=1080&q=75",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}${logoPath}`,
        width: 400,
        height: 400,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
