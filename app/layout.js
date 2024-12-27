import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Squad Staking Mastery | Ethereum Validator Training Program",
  description: "Join the elite Squad Staking Mastery program for Ethereum validators. Get expert mentorship, hands-on experience, and industry recognition in squad staking validation.",
  keywords: [
    "Ethereum validator",
    "squad staking",
    "blockchain certification",
    "validator training",
    "Ethereum mastery",
    "blockchain education",
    "validator program",
    "crypto certification"
  ],
  openGraph: {
    title: "Squad Staking Mastery | Ethereum Validator Training Program",
    description: "Elite training program for Ethereum validators focusing on squad staking. Join industry experts and advance your validation career.",
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
    title: "Squad Staking Mastery | Ethereum Validator Training Program",
    description: "Elite training program for Ethereum validators focusing on squad staking. Join industry experts and advance your validation career.",
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
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
