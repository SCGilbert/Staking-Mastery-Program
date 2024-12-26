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
  title: "Squad Staking Mastery | Solana Validator Training Program",
  description: "Join the elite Squad Staking Mastery program for Solana validators. Get expert mentorship, hands-on experience, and industry recognition in squad staking validation.",
  keywords: [
    "Solana validator",
    "squad staking",
    "blockchain certification",
    "validator training",
    "Solana mastery",
    "blockchain education",
    "validator program",
    "crypto certification"
  ],
  openGraph: {
    title: "Squad Staking Mastery | Solana Validator Training Program",
    description: "Elite training program for Solana validators focusing on squad staking. Join industry experts and advance your validation career.",
    url: "https://squadstaking.com/mastery",
    siteName: "Squad Staking Mastery",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to the public directory
        width: 1200,
        height: 630,
        alt: "Squad Staking Mastery Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Squad Staking Mastery | Solana Validator Training Program",
    description: "Elite training program for Solana validators focusing on squad staking. Join industry experts and advance your validation career.",
    images: ["/og-image.jpg"],
    creator: "@SquadStaking",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
  alternates: {
    canonical: "https://squadstaking.com/mastery",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
