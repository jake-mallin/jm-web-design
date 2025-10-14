'use client'

import { OrganizationJsonLd, WebPageJsonLd, BreadcrumbJsonLd } from 'next-seo'

type Props = {
  siteUrl: string
  orgName: string
  orgLogoUrl?: string
  breadcrumbs?: { name: string; item: string }[]
}

export default function SeoJsonLd({ siteUrl, orgName, orgLogoUrl, breadcrumbs }: Props) {
  return (
    <>
      <WebPageJsonLd
        id={`${siteUrl}#webpage`}
        useAppDir={true}
        url={siteUrl}
        name={orgName}
        potentialActions={[
          {
            '@type': 'SearchAction',
            target: `${siteUrl}/search?q={search_term_string}`,
            queryInput: 'required name=search_term_string',
          },
        ]}
      />
      <OrganizationJsonLd
        useAppDir={true}
        type="Organization"
        id={`${siteUrl}#organization`}
        logo={orgLogoUrl}
        name={orgName}
        url={siteUrl}
        sameAs={[
          'https://x.com/JMWeb_Design',
          'https://github.com/your-handle',
          'https://www.linkedin.com/in/your-handle',
        ]}
      />
      {breadcrumbs && breadcrumbs.length > 0 && (
        <BreadcrumbJsonLd
          useAppDir={true}
          itemListElements={breadcrumbs.map((b, i) => ({
            position: i + 1,
            name: b.name,
            item: b.item,
          }))}
        />
      )}
    </>
  )
}
