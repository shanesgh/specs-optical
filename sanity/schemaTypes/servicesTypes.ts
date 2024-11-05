import {defineField, defineType} from 'sanity'

export const servicesTypes = defineType({
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
      {
        name: 'serviceName',
        title: 'Service Name',
        type: 'string',
        validation: Rule => Rule.required().min(2).max(100)
      },
      {
        name: 'description',
        title: 'Service Description',
        type: 'text',
        validation: Rule => Rule.required().max(500)
      },
      {
        name: 'price',
        title: 'Service Price',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
    ]
  })