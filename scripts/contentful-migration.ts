require('dotenv').config({ path: '.env.local' })
const { createClient } = require('contentful-management')

async function createContentModel() {
  if (!process.env.CONTENTFUL_MANAGEMENT_TOKEN) {
    throw new Error('CONTENTFUL_MANAGEMENT_TOKEN is not set')
  }

  const client = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
  })

  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!)
  const environment = await space.getEnvironment('master')

  // Create HomePage content type
  const homePage = await environment.createContentTypeWithId('homePage', {
    name: 'Home Page',
    fields: [
      { id: 'title', name: 'Title', type: 'Symbol', required: true, localized: false },
      { id: 'heroTitle', name: 'Hero Title', type: 'Symbol', required: true, localized: false },
      { id: 'heroDescription', name: 'Hero Description', type: 'Text', required: true, localized: false },
      {
        id: 'features',
        name: 'Features',
        type: 'Array',
        required: false,
        localized: false,
        items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['feature'] }] }
      },
      {
        id: 'statistics',
        name: 'Statistics',
        type: 'Array',
        required: false,
        localized: false,
        items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['statistic'] }] }
      },
      {
        id: 'testimonials',
        name: 'Testimonials',
        type: 'Array',
        required: false,
        localized: false,
        items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['testimonial'] }] }
      }
    ]
  })
  await homePage.publish()

  // Create Feature content type
  const feature = await environment.createContentTypeWithId('feature', {
    name: 'Feature',
    fields: [
      { id: 'title', name: 'Title', type: 'Symbol', required: true, localized: false },
      { id: 'description', name: 'Description', type: 'Text', required: true, localized: false },
      { id: 'icon', name: 'Icon', type: 'Link', linkType: 'Asset', required: true, localized: false }
    ]
  })
  await feature.publish()

  // Create Statistic content type
  const statistic = await environment.createContentTypeWithId('statistic', {
    name: 'Statistic',
    fields: [
      { id: 'value', name: 'Value', type: 'Symbol', required: true, localized: false },
      { id: 'label', name: 'Label', type: 'Symbol', required: true, localized: false }
    ]
  })
  await statistic.publish()

  // Create Testimonial content type
  const testimonial = await environment.createContentTypeWithId('testimonial', {
    name: 'Testimonial',
    fields: [
      { id: 'name', name: 'Name', type: 'Symbol', required: true, localized: false },
      { id: 'role', name: 'Role', type: 'Symbol', required: true, localized: false },
      { id: 'quote', name: 'Quote', type: 'Text', required: true, localized: false },
      { id: 'image', name: 'Image', type: 'Link', linkType: 'Asset', required: true, localized: false }
    ]
  })
  await testimonial.publish()

  console.log('Content models created successfully!')
}

createContentModel().catch(console.error)