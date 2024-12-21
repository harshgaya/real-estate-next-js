import { Inter, Montserrat, PT_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["greek"],
});

const monteserrat = Montserrat({
  variable: "--font-monte",
  subsets: ["vietnamese"],
});
const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Dream Home Real Estate",
  description:
    "Dream Home Real Estate offering premium properties and unmatched services.",
  keywords:
    "Dream Home Real Estate, Real Estate, Premium Properties, Luxury Homes, Real Estate Agency, Homes for Sale, Property Deals, Best Real Estate Services",
  authors: [{ name: "Dream Home Real Estate", url: "" }],
  creator: "Dream Home Real Estate",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Dream Home Real Estate",
    description:
      "Dream Home Real Estate offering premium properties and unmatched services.",
    url: "",
    type: "website",
    siteName: "Dream Home Real Estate",
    images: [
      {
        url: "/header/logo.png",
        width: 1200,
        height: 630,
        alt: "Dream Home Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DreamHomeRealEstate",
    title: "Dream Home Real Estate",
    description:
      "Dream Home Real Estate offering premium properties and unmatched services.",
    images: ["/header/logo.png"],
  },
  icons: {
    icon: "/header/logo.png",
    apple: "/header/logo.png",
  },
  alternates: {
    canonical: "",
    languages: {
      en: "",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${monteserrat.variable} ${ptSerif.variable} bg-customBg`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
