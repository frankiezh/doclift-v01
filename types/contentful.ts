import type { Entry, Asset, EntrySkeletonType } from 'contentful'

export interface TypeFeatureFields {
  title: string
  description: string
  icon: {
    fields: {
      file: {
        url: string
      }
    }
  }
}

export interface TypeFeature extends EntrySkeletonType {
  contentTypeId: 'feature'
  fields: TypeFeatureFields
  sys: {
    id: string
  }
}

export interface TypeStatisticFields {
  value: string
  label: string
}

export interface TypeStatistic extends EntrySkeletonType {
  contentTypeId: 'statistic'
  fields: TypeStatisticFields
  sys: {
    id: string
  }
}

export interface TypeTestimonialFields {
  name: string
  role: string
  quote: string
  image: {
    fields: {
      file: {
        url: string
      }
    }
  }
}

export interface TypeTestimonial extends EntrySkeletonType {
  contentTypeId: 'testimonial'
  fields: TypeTestimonialFields
  sys: {
    id: string
  }
}

export interface TypeHomePageFields {
  title: string
  heroTitle: string
  heroDescription: string
  features: Entry<TypeFeature>[]
  statistics: Entry<TypeStatistic>[]
  testimonials: Entry<TypeTestimonial>[]
}

export interface TypeHomePage extends EntrySkeletonType {
  contentTypeId: 'homePage'
  fields: TypeHomePageFields
  sys: {
    id: string
  }
}

