export default function Head() {
  const description = "Building smarter, more people friendly systems.",
    url = "https://osarogie.com",
    type = "WebSite",
    title = "Emmanuel Nosakhare",
    siteName = title

  return (
    <>
      <title>{title}</title>
      <meta name="description" key="description" content={description} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta property="og:site_name" key="og:site_name" content={siteName} />
      <meta property="og:type" key="og:type" content={type.toLowerCase()} />
      <meta property="og:title" key="og:title" content={title} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta property="og:url" key="og:url" content={url} />
      <link rel="canonical" key="canonical" href={url} />
      <meta property="al:web:url" key="al:web:url" content={url} />
      <meta
        name="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" key="twitter:title" content={title} />
      <meta
        name="twitter:description"
        key="twitter:description"
        content={description}
      />
      <meta name="twitter:url" key="twitter:url" content={url} />
    </>
  )
}
