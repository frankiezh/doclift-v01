import type { Entry, Asset } from 'contentful'

interface FeatureFields {
  title: string
  description: string
  icon: Asset
}

export interface TypeFeature {
  contentTypeId: 'feature'
  fields: FeatureFields
}

interface StatisticFields {
  value: string
  label: string
}

export interface TypeStatistic {
  contentTypeId: 'statistic'
  fields: StatisticFields
}

interface TestimonialFields {
  name: string
  role: string
  quote: string
  image: Asset
}

export interface TypeTestimonial {
  contentTypeId: 'testimonial'
  fields: TestimonialFields
}

interface HomePageFields {
  title: string
  heroTitle: string
  heroDescription: string
  features: Entry<TypeFeature>[]
  statistics: Entry<TypeStatistic>[]
  testimonials: Entry<TypeTestimonial>[]
}

export interface TypeHomePage {
  contentTypeId: 'homePage'
  fields: HomePageFields
}

