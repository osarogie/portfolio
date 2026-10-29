import "./globals.css"
import { Lato, Playfair } from "next/font/google"
import React from "react"

const lato = Lato({
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
  subsets: ["latin"],
})
const playFair = Playfair({
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
  subsets: ["latin"],
})
const fullName = "Emmanuel Nosakhare"
export const metadata = {
  title: fullName,
  publisher: fullName,
  openGraph: {
    type: "website",
    siteName: fullName,
    images: {
      type: "ImageObject",
      url: "https://osarogie.com/apple-icon.png",
      width: 60,
      height: 60,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (() => {
            let theme;
            try { theme = localStorage.getItem('portfolio-theme'); } catch {}
            if (theme !== 'light' && theme !== 'dark') {
              theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
            }
            document.documentElement.dataset.theme = theme;
          })();
        `,
          }}
        />
      </head>
      <body className={`${lato.variable} ${playFair.variable}`}>
        {children}
      </body>
    </html>
  )
}
