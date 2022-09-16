import Head from "next/head"

interface SeoProps {
  title?: string
  description?: string
  keywords?: string
  image_url?: string
}

export default function Seo({
  title,
  description,
  keywords,
  image_url
}: SeoProps) {
  const metaDescription = description || "this is a description"
  const defaultTitle = title || "NextJS Project"
  const imageUrl = image_url || ""
  const metaKeywords = keywords || ""

  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      <title>{defaultTitle}</title>

      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="title" content={defaultTitle} />
      <meta property="description" content={metaDescription} />

      <meta property="og:title" content={defaultTitle} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={defaultTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta property="twitter:image" content={imageUrl} />
    </Head>
  )
}

