import type { Entry, Asset } from 'contentful'

export interface TypeHomePage {
  title: string
  heroTitle: string
  heroDescription: string
  features: Entry<TypeFeature>[]
  statistics: Entry<TypeStatistic>[]
  testimonials: Entry<TypeTestimonial>[]
}

export interface TypeFeature {
  title: string
  description: string
  icon: Asset
}

export interface TypeStatistic {
  value: string
  label: string
}

export interface TypeTestimonial {
  name: string
  role: string
  quote: string
  image: Asset
}

