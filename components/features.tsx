import { TypeFeature } from '@/types/contentful'
import { Entry } from 'contentful'
import Image from 'next/image'

interface FeaturesProps {
  data: Entry<TypeFeature>[]
}

export function Features({ data }: FeaturesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((feature) => {
            const iconUrl = feature.fields.icon?.fields?.file?.url
            return (
              <div key={feature.sys.id} className="bg-white p-6 rounded-lg shadow-md">
                {iconUrl && (
                  <div className="w-12 h-12 mb-4">
                    <Image
                      src={`https:${iconUrl}`}
                      alt={String(feature.fields.title)}
                      width={48}
                      height={48}
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{String(feature.fields.title)}</h3>
                <p className="text-gray-600">{String(feature.fields.description)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

