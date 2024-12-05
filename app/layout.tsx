import "tailwindcss/tailwind.css"
import { Lato, Playfair } from "next/font/google"
import React from "react"

const lato = Lato({
  weight: ["100", "300", "400"],
  display: "swap",
  subsets: ["latin"],
})
const playFair = Playfair({
  weight: ["500", "300", "400"],
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
    <html>
      <body className={`${lato.className} ${playFair.className}`}>
        {children}
      </body>
    </html>
  )
}
