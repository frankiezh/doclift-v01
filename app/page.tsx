import React from 'react'
import { getHomePage } from '@/lib/contentful'

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

    const { title, heroTitle, heroDescription, features, statistics, testimonials } = page.fields

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

        {/* Similar sections for statistics and testimonials */}
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

