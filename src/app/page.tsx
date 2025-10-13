import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WorkGrid from '@/components/WorkGrid'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WorkGrid />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
