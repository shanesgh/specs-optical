import { type SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import { productTypes } from "./productTypes";
import { FAQTypes } from "./faqTypes";
import { companyTypes } from "./companyTypes";
import { categoryTypes } from "./categoryTypes";
import { dealTypes } from "./dealType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productTypes,
    blockContentType,
    FAQTypes,
    companyTypes,
    categoryTypes,
    dealTypes,
  ],
};
