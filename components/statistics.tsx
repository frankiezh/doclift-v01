import { TypeStatistic } from '@/types/contentful'

interface StatisticsProps {
  data: TypeStatistic[]
}

export function Statistics({ data }: StatisticsProps) {
  return (
    <section className="py-16 bg-teal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.fields.value}</div>
              <div className="text-xl">{stat.fields.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

