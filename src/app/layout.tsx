import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Vishak | SOC Analyst & Threat Hunter",
    template: "%s | Vishak - SOC Analyst"
  },
  description: "Portfolio of Vishak - SOC Analyst specializing in SIEM (Splunk), Incident Response, Digital Forensics, and Blue Team Defense.",
  keywords: ["SOC Analyst", "Threat Hunting", "Splunk", "Digital Forensics", "Blue Team", "Cyber Security", "Incident Response", "Vishak"],
  authors: [{ name: "Vishak" }],
  creator: "Vishak",
  openGraph: {
    title: "Vishak | SOC Analyst & Threat Hunter",
    description: "Portfolio of Vishak - SOC Analyst specializing in SIEM, Incident Response, and Blue Team Defense.",
    url: "/",
    siteName: "Vishak Portfolio",
    images: [
      {
        url: "/og-image.png", // You can update this image later if you want
        width: 1200,
        height: 630,
        alt: "Vishak - SOC Analyst",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishak | SOC Analyst",
    description: "Portfolio of Vishak - SOC Analyst & Blue Team Defender",
    images: ["/og-image.png"],
    creator: "@vishak", // Update if you have a Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This helps Google understand your profile better
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vishak",
    jobTitle: "SOC Analyst",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    sameAs: [
      "https://github.com/vishak-SOC",
      "https://linkedin.com/in/vishak-s-p-15438931b/",
      "https://tryhackme.com/p/vishak32",
    ],
    description: "SOC Analyst specializing in SIEM, Incident Response, and Threat Hunting.",
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/og-image.png`,
    knowsAbout: ["Security Operations", "Splunk", "Incident Response", "Network Forensics", "Blue Team"],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Microsoft Clarity Analytics */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
            }}
          />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}