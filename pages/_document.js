import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/common/core/navbar'

export const metadata = {
  title: "DiGi Moda Library",
  description: "DiGi Moda Library - Digital Fashion Library for new generations!",
  keywords: [
    "DiGi Moda Library",
    "Fashion",
    "Art",
    "Cultures",
    "Higher Education",
    "University"
  ],
  authors: [{ name: "DiGi Moda Library" }],
  creator: "DiGi Moda Library",
  canonical: "https://digimoda.xyz",
  languages: "en-us",
  referrer: "origin-when-cross-origin",
  msapplicationTileColor: "#000000",
  manifest: "https://digimoda.xyz/manifest.json",
  openGraph: {
    title: "DiGi Moda",
    description: "DiGi Moda Library - Digital Fashion Library for new generations!",
    url: "https://digimoda.xyz/",
    siteName: "DiGi Moda Library",
    images: [
      {
        url: "/library-og.png",
        width: 1200,
        height: 800
            }
          ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: "DiGi Moda Library",
    card: "summary_large_image",
    description: "DiGi Moda - Digital Fashion Magazine for new generations",
    images: "/img/opengraph.png"
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16" }
        ],
    other: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/icons/apple-touch-icon.png"
            },
      {
        rel: "android-chrome-512x512.png",
        sizes: "512x51",
        url: "/icons/android-chrome-512x512.png"
            },
      {
        rel: "android-chrome-192x192.png",
        sizes: "192x192",
        url: "/icons/android-chrome-192x192.png"
            },
      {
        rel: "mask-icon",
        color: "#5bbad5",
        url: "/icons/safari-pinned-tab.svg"
            }
          ]
  }
}

export default function Document() {
  return (
    <Html lang="en">
   <Head>
    <title>DiGi Moda Library</title>
    <meta name="description" content="DiGi Moda online Library"/>
    <meta name="application-name" content="DiGital Library"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
   </Head>
   <body>
   <Main/>
   <NextScript/>
   </body>
  </Html>
  )
}