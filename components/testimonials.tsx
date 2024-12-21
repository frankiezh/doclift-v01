import { TypeTestimonial } from '@/types/contentful'
import Image from 'next/image'

interface TestimonialsProps {
  data: TypeTestimonial[]
}

export function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={`https:${testimonial.fields.image.fields.file.url}`}
                  alt={testimonial.fields.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.fields.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.fields.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.fields.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

