import Hero from '@/components/Hero'
import SeoJsonLd from '@/components/SeoJsonLd'

export default function Page() {
  const siteUrl = 'https://www.example.com'
  return (
    <>
      <SeoJsonLd
        siteUrl={siteUrl}
        orgName="JM Web Design"
        orgLogoUrl={`${siteUrl}/og.jpg`}
        breadcrumbs={[{ name: 'Home', item: siteUrl }]}
      />
      <main className="relative">
        <Hero />
      </main>
    </>
  )
}
