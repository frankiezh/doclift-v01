import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { Statistics } from '@/components/statistics'
import { getHomePage } from '@/lib/contentful'

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  const homepage = await getHomePage()
  const { fields } = homepage
  
  return (
    <>
      <Hero 
        title={fields.heroTitle}
        description={fields.heroDescription}
      />
      <Statistics data={fields.statistics} />
      <Features data={fields.features} />
      <Testimonials data={fields.testimonials} />
    </>
  )
}

