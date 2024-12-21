require('dotenv').config({ path: '.env.local' })
const { createClient } = require('contentful-management')

async function populateContent() {
  try {
    if (!process.env.CONTENTFUL_MANAGEMENT_TOKEN) {
      throw new Error('CONTENTFUL_MANAGEMENT_TOKEN is not set')
    }

    const client = createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
    })

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!)
    const environment = await space.getEnvironment('master')

    console.log('Creating asset...')
    // Create sample assets first (for icons and images)
    const iconAsset = await environment.createAsset({
      fields: {
        title: { 'en-US': 'Sample Icon' },
        file: {
          'en-US': {
            contentType: 'image/png',
            fileName: 'icon.png',
            upload: 'https://picsum.photos/200'
          }
        }
      }
    })

    console.log('Processing asset...')
    try {
      await iconAsset.processForAllLocales()
      await iconAsset.publish()
      console.log('Asset published successfully')
    } catch (error) {
      console.warn('Asset processing failed, continuing without icon:', error)
    }

    console.log('Creating feature...')
    // Create Features
    const feature1 = await environment.createEntry('feature', {
      fields: {
        title: { 'en-US': 'Modern Design' },
        description: { 'en-US': 'Clean and modern interface built with the latest technologies' },
        icon: { 'en-US': { sys: { type: 'Link', linkType: 'Asset', id: iconAsset.sys.id } } }
      }
    })
    await feature1.publish()

    console.log('Creating statistic...')
    // Create Statistics
    const statistic1 = await environment.createEntry('statistic', {
      fields: {
        value: { 'en-US': '100+' },
        label: { 'en-US': 'Happy Clients' }
      }
    })
    await statistic1.publish()

    console.log('Creating testimonial...')
    // Create Testimonials
    const testimonial1 = await environment.createEntry('testimonial', {
      fields: {
        name: { 'en-US': 'John Doe' },
        role: { 'en-US': 'CEO' },
        quote: { 'en-US': 'Amazing service and great results!' },
        image: { 'en-US': { sys: { type: 'Link', linkType: 'Asset', id: iconAsset.sys.id } } }
      }
    })
    await testimonial1.publish()

    console.log('Creating homepage...')
    // Create Homepage
    const homepage = await environment.createEntry('homePage', {
      fields: {
        title: { 'en-US': 'Welcome to DocLift' },
        heroTitle: { 'en-US': 'Modern Document Management' },
        heroDescription: { 'en-US': 'Streamline your document workflow with our powerful tools' },
        features: {
          'en-US': [
            { sys: { type: 'Link', linkType: 'Entry', id: feature1.sys.id } }
          ]
        },
        statistics: {
          'en-US': [
            { sys: { type: 'Link', linkType: 'Entry', id: statistic1.sys.id } }
          ]
        },
        testimonials: {
          'en-US': [
            { sys: { type: 'Link', linkType: 'Entry', id: testimonial1.sys.id } }
          ]
        }
      }
    })
    await homepage.publish()

    console.log('Sample content created successfully!')
  } catch (error) {
    console.error('Error creating content:', error)
    throw error
  }
}

populateContent().catch(console.error) 