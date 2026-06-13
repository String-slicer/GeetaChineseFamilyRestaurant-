import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Geeta Chinese Family Restaurant | Best Chinese Restaurant in Nallasopara East",

  description:
    "Geeta Chinese Family Restaurant in Nallasopara East serves delicious Chinese cuisine, soups, noodles, fried rice, starters, and family meals. Visit us near Kapol School, Surbhi Villa Society, Achole Road for authentic flavors and a memorable dining experience.",

  keywords: [
    "Geeta Chinese Family Restaurant",
    "Chinese Restaurant Nallasopara East",
    "Best Chinese Food Nallasopara",
    "Chinese Restaurant Achole Road",
    "Family Restaurant Nallasopara",
    "Chinese Food Near Me",
    "Noodles Nallasopara",
    "Fried Rice Nallasopara",
    "Chinese Starters Nallasopara",
    "Restaurant Near Kapol School",
    "Restaurant Achole Road",
    "Chinese Restaurant Vasai",
    "Chinese Restaurant Nallasopara East",
  ],

  authors: [{ name: "Geeta Chinese Family Restaurant" }],

  creator: "Geeta Chinese Family Restaurant",

  publisher: "Geeta Chinese Family Restaurant",

  metadataBase: new URL("https://geeta-chinese-family-restaurant.vercel.app/"),

  openGraph: {
    title:
      "Geeta Chinese Family Restaurant | Best Chinese Restaurant in Nallasopara East",
    description:
      "Enjoy authentic Chinese cuisine, noodles, fried rice, soups, and family dining at Geeta Chinese Family Restaurant, Nallasopara East.",
    url: "hhttps://geeta-chinese-family-restaurant.vercel.app/",
    siteName: "Geeta Chinese Family Restaurant",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Geeta Chinese Family Restaurant | Best Chinese Restaurant in Nallasopara East",
    description:
      "Authentic Chinese cuisine and family dining experience in Nallasopara East.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
