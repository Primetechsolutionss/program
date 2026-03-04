import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import ServicesOverview from '@/components/sections/ServicesOverview'
import HowItWorks from '@/components/sections/HowItWorks'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Industries from '@/components/sections/Industries'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <HowItWorks />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
