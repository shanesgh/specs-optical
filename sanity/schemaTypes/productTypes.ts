import { defineType } from "sanity";
import { ProductNameInput } from "../productNameInput";

export const productTypes = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "product_name",
      title: "Product Code/Name",
      type: "string",
      description:
        "Code of the eyewear product | generate code if none is available",
      validation: (Rule) => Rule.required().max(70),
      components: { input: ProductNameInput },
    },
    {
      name: "slug",
      title: "Product Slug",
      type: "slug",
      options: {
        source: (doc) => doc.product_name,
        maxLength: 70,
        slugify: (input) => input,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
      description: "Price of the eyewear product",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
      description: "Brand of the eyewear product",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
      description: "Images of the eyewear product",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "availability",
      title: "Availability",
      type: "boolean",
      description: "Availability status of the eyewear product",
      initialValue: true,
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
      description: "Detailed description of the eyewear product",
    },

    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "frameMaterial",
      title: "Frame Material",
      type: "string",
      description: "Material of the eyewear frame",
    },
    {
      name: "lensMaterial",
      title: "Lens Material",
      type: "string",
      description: "Material of the eyewear lenses",
    },
    {
      name: "lensWidth",
      title: "Lens Width",
      type: "number",
      description: "Width of the lenses in millimeters",
    },
    {
      name: "bridgeWidth",
      title: "Bridge Width",
      type: "number",
      description: "Width of the bridge in millimeters",
    },
    {
      name: "templeLength",
      title: "Temple Length",
      type: "number",
      description: "Length of the temples in millimeters",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      description: "Color of the eyewear frame",
    },
  ],
  preview: {
    select: {
      title: "product_name",
    },
  },
});
