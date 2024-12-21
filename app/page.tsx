import React from 'react'
import { getHomePage } from '@/lib/contentful'
import type { TypeHomePage } from '@/types/contentful'
import type { Entry } from 'contentful'

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

    const { title, heroTitle, heroDescription, features, statistics, testimonials } = page.fields as TypeHomePage

    return (
      <main className="container mx-auto px-4">
        <section className="py-20">
          <h1 className="text-4xl font-bold">{title}</h1>
          <h2 className="text-2xl mt-4">{heroTitle}</h2>
          <p className="mt-4">{heroDescription}</p>
        </section>

        {features && features.length > 0 && (
          <section className="py-10">
            <h3 className="text-2xl font-bold mb-6">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature: any) => (
                <div key={feature.sys.id} className="p-6 border rounded-lg">
                  <h4 className="font-bold">{feature.fields.title}</h4>
                  <p>{feature.fields.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {statistics && statistics.length > 0 && (
          <section className="py-10 bg-gray-50">
            <div className="container mx-auto">
              <h3 className="text-2xl font-bold mb-6">Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {statistics.map((stat: any) => (
                  <div key={stat.sys.id} className="text-center">
                    <div className="text-3xl font-bold">{stat.fields.value}</div>
                    <div className="text-gray-600">{stat.fields.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {testimonials && testimonials.length > 0 && (
          <section className="py-10">
            <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial: any) => (
                <div key={testimonial.sys.id} className="p-6 border rounded-lg">
                  <blockquote className="text-lg italic mb-4">{testimonial.fields.quote}</blockquote>
                  <div className="font-bold">{testimonial.fields.name}</div>
                  <div className="text-gray-600">{testimonial.fields.role}</div>
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

