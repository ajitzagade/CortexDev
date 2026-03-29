import { Helmet } from 'react-helmet-async'
import { site } from '@/lib/site'

const defaultUrl =
  typeof import.meta.env.VITE_SITE_URL === 'string' &&
  import.meta.env.VITE_SITE_URL.length > 0
    ? import.meta.env.VITE_SITE_URL.replace(/\/$/, '')
    : ''

export function Seo({
  title,
  description,
  path = '',
  image,
}: {
  title?: string
  description?: string
  path?: string
  image?: string
}) {
  const pageTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.title}`
  const desc =
    description ??
    `${site.name} — ${site.experienceYears} years building scalable systems and leading engineering teams. ${site.location}.`
  const url = defaultUrl ? `${defaultUrl}${path}` : undefined
  const ogImage = image ?? (defaultUrl ? `${defaultUrl}${site.ogImage}` : undefined)

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      {url ? <meta property="og:url" content={url} /> : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
    </Helmet>
  )
}
