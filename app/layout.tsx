import "tailwindcss/tailwind.css"
import "./styles/global.css"
import "./styles/workItem.css"
import { KoHo } from "next/font/google"

const koHo = KoHo({
  weight: ["200", "400"],
  display: "swap",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const type = "WebSite",
    title = "Emmanuel Nosakhare",
    siteName = title

  const ldjson = {
    "@context": "https://schema.org",
    name: siteName,
    "@type": type,
    publisher: {
      "@type": "Organization",
      name: "Emmanuel Nosakhare",
      logo: {
        "@type": "ImageObject",
        url: "https://osarogie.com/apple-icon.png",
        width: 60,
        height: 60,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://osarogie.com/",
    },
  }

  return (
    <html>
      <head />
      <body className={koHo.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldjson) }}
        />
      </body>
    </html>
  )
}
