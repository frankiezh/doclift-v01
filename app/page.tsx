import React from 'react'
import { getHomePage } from '@/lib/contentful'
import type { TypeHomePage, TypeStatistic, TypeTestimonial, TypeFeature } from '@/types/contentful'
import type { Entry } from 'contentful'
import { Features } from '@/components/features'

function isValidArray<T>(arr: any): arr is T[] {
  return Array.isArray(arr) && arr.length > 0
}

export default async function Home() {
  try {
    const page = await getHomePage()
    
    if (!page || !page.fields) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading content...</p>
        </div>
      )
    }

    const entry = page as Entry<TypeHomePage>
    const { 
      title = '', 
      heroTitle = '', 
      heroDescription = '', 
      features = [], 
      statistics = [], 
      testimonials = [] 
    } = entry.fields

    const validFeatures = features as Entry<TypeFeature>[]
    const validStatistics = statistics as Entry<TypeStatistic>[]
    const validTestimonials = testimonials as Entry<TypeTestimonial>[]

    return (
      <main className="container mx-auto px-4">
        <section className="py-20">
          <h1 className="text-4xl font-bold">{String(title)}</h1>
          <h2 className="text-2xl mt-4">{String(heroTitle)}</h2>
          <p className="mt-4">{String(heroDescription)}</p>
        </section>

        {validFeatures.length > 0 && (
          <Features data={validFeatures} />
        )}

        {validStatistics.length > 0 && (
          <section className="py-10 bg-gray-50">
            <div className="container mx-auto">
              <h3 className="text-2xl font-bold mb-6">Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {validStatistics.map((stat) => (
                  <div key={stat.sys.id} className="text-center">
                    <div className="text-3xl font-bold">{String(stat.fields.value)}</div>
                    <div className="text-gray-600">{String(stat.fields.label)}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {validTestimonials.length > 0 && (
          <section className="py-10">
            <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {validTestimonials.map((testimonial) => (
                <div key={testimonial.sys.id} className="p-6 border rounded-lg">
                  <blockquote className="text-lg italic mb-4">{String(testimonial.fields.quote)}</blockquote>
                  <div className="font-bold">{String(testimonial.fields.name)}</div>
                  <div className="text-gray-600">{String(testimonial.fields.role)}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    )
  } catch (error) {
    console.error('Error loading page:', error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Error loading content. Please try again later.</p>
      </div>
    )
  }
}

