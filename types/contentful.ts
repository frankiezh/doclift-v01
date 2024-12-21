import type { Entry, Asset, EntrySkeletonType } from 'contentful'

export interface TypeFeature extends EntrySkeletonType {
  contentTypeId: 'feature'
  fields: {
    title: string
    description: string
    icon: Asset
  }
}

export interface TypeStatistic extends EntrySkeletonType {
  contentTypeId: 'statistic'
  fields: {
    value: string
    label: string
  }
}

export interface TypeTestimonial extends EntrySkeletonType {
  contentTypeId: 'testimonial'
  fields: {
    name: string
    role: string
    quote: string
    image: Asset
  }
}

export interface TypeHomePage extends EntrySkeletonType {
  contentTypeId: 'homePage'
  fields: {
    title: string
    heroTitle: string
    heroDescription: string
    features: Entry<TypeFeature>[]
    statistics: Entry<TypeStatistic>[]
    testimonials: Entry<TypeTestimonial>[]
  }
}

