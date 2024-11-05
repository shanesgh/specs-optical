import { defineType} from 'sanity'

export const categoryTypes = defineType({name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
    },
  ],
})