import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface HeroProps {
  title: string
  description: string
}

export function Hero({ title, description }: HeroProps) {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-teal-500 to-teal-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-xl opacity-90">
              {description}
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary">
                Demo buchen
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Zu den Fortbildungen
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] hidden lg:block">
            <Image
              src="/images/doctor-hero.png"
              alt="Medical Professional"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

