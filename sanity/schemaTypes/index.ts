import { type SchemaTypeDefinition } from 'sanity'
import {blockContentType} from './blockContentType'
import {productTypes} from './productTypes'
import { FAQTypes } from './faqTypes'
import { servicesTypes } from './servicesTypes'
import { companyTypes } from './companyTypes'
import { categoryTypes } from './categoryTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ productTypes,blockContentType, FAQTypes, servicesTypes, companyTypes, categoryTypes],
}
