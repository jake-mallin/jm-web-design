import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SeoJsonLd from '@/components/SeoJsonLd'
import Services from '@/components/Services'
import WorkGrid from '@/components/WorkGrid'

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
      <main className="relative p-4 md:p-6">
        <Header />
        <Hero />
        <Services />
        <WorkGrid />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
