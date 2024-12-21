import { createClient } from 'contentful'
import type { TypeHomePage, TypeFeature, TypeStatistic, TypeTestimonial } from '@/types/contentful'

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID environment variable is not set')
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN environment variable is not set')
}

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getHomePage() {
  try {
    const entries = await client.getEntries<TypeHomePage>({
      content_type: 'homePage',
      include: 2,
    })

    if (!entries.items.length) {
      throw new Error('No homepage entry found')
    }

    return entries.items[0]
  } catch (error) {
    console.error('Error fetching homepage:', error)
    throw error
  }
}

