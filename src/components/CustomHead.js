import Head from "next/head"

export function CustomHead({
  site_name = "Emmanuel Nosakhare",
  description = "Building smarter, more people friendly systems.",
  url = "",
  type = "WebSite",
  title = "Emmanuel Nosakhare",
  dateModified = "",
  datePublished = "",
  dateCreated = "",
  keywords = "",
  image,
  author,
  android_url,
  ios_url,
  twitter = "",
}) {
  function fixUrl(url) {
    if (!url) return

    if (!url.substring(0, 5).includes("http")) {
      if (!url.substring(0, 2).includes("//")) return `https://${url}`
      return `https:${url}`
    }

    return url
  }

  function renderFavIcons() {
    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
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
      </>
    )
  }

  const isArticle = type == "Article"
  let ldjson = {
    "@context": "https://schema.org",
    name: site_name,
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

  if (type === "WebSite") {
    if (dateCreated) ldjson.dateCreated = dateCreated
    if (dateModified) ldjson.dateModified = dateCreated
  }

  if (url) ldjson.url = url

  if (image)
    ldjson.image = {
      "@type": "ImageObject",
      url: fixUrl(image.url),
      width: image.width,
      height: image.height,
    }

  if (isArticle) {
    ldjson = {
      ...ldjson,
      author: {
        "@type": "Person",
        name: author.name,
        url: author.publicUrl,
        sameAs: author.links ? [].concat(author.links) : [],
      },
      headline: title,
      datePublished,
      dateCreated,
      dateModified,
      keywords,
      description,
    }

    if (author.profilePicture) {
      ldjson.author.image = {
        "@type": "ImageObject",
        url: fixUrl(author.profilePicture),
        width: 250,
        height: 250,
      }
    }
  }

  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" key="description" content={description} />
      {renderFavIcons()}
      <meta
        name="apple-mobile-web-app-title"
        key="apple-mobile-web-app-title"
        content={site_name}
      />
      {process.env.FB_APP_ID && (
        <meta
          property="fb:app_id"
          key="fb:app_id"
          content={process.env.FB_APP_ID}
        />
      )}
      <meta property="og:site_name" key="og:site_name" content={site_name} />
      <meta property="og:type" key="og:type" content={type.toLowerCase()} />
      <meta property="og:title" key="og:title" content={title} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      {url && (
        <>
          <meta property="og:url" key="og:url" content={url} />
          <link rel="canonical" key="canonical" href={url} />
          <meta property="al:web:url" key="al:web:url" content={url} />
        </>
      )}
      {isArticle && (
        <>
          <meta
            property="article:published_time"
            key="article:published_time"
            content={datePublished}
          />
          <meta
            property="article:modified_time"
            key="article:modified_time"
            content={dateModified}
          />
          <meta property="article:tag" key="article:tag" content={keywords} />
        </>
      )}
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
      {image && (
        <meta
          name="twitter:image"
          key="twitter:image"
          content={fixUrl(image.url)}
        />
      )}
      {isArticle && (
        <>
          <meta
            name="twitter:label1"
            key="twitter:label1"
            content="Written by"
          />
          <meta
            name="twitter:data1"
            key="twitter:data1"
            content={author.name}
          />
          <meta
            name="twitter:label2"
            key="twitter:label2"
            content="Filed under"
          />
          <meta name="twitter:data2" key="twitter:data2" content={keywords} />
          {author.twitter && (
            <meta
              name="twitter:creator"
              key="twitter:creator"
              content={author.twitter}
            />
          )}
        </>
      )}
      <meta name="twitter:site" key="twitter:site" content={`@${twitter}`} />
      {image && (
        <>
          <meta property="og:image:width" key="og:image:width" content="200" />
          <meta
            property="og:image:height"
            key="og:image:height"
            content="200"
          />
          <meta property="og:image" key="og:image" content={image} />
        </>
      )}
      {process.env.ANDROID_PACKAGE && (
        <meta
          property="al:android:package"
          key="al:android:package"
          content={process.env.ANDROID_PACKAGE}
        />
      )}
      {process.env.ANDROID_APP_NAME && (
        <meta
          property="al:android:app_name"
          key="al:android:app_name"
          content={process.env.ANDROID_APP_NAME}
        />
      )}
      {ios_url && (
        <meta property="al:ios:url" key="al:ios:url" content={ios_url} />
      )}
      {android_url && (
        <meta
          property="al:android:url"
          key="al:android:url"
          content={android_url}
        />
      )}
      {process.env.IOS_APP_NAME && (
        <meta
          property="al:ios:app_name"
          key="al:ios:app_name"
          content={process.env.IOS_APP_NAME}
        />
      )}
      {process.env.IOS_APP_STORE_ID && (
        <meta
          property="al:ios:app_store_id"
          key="al:ios:app_store_id"
          content={process.env.IOS_APP_STORE_ID}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldjson) }}
      />
    </Head>
  )
}
