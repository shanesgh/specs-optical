import { defineArrayMember, defineField, defineType } from "sanity";

export const productTypes = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "product_name",
      title: "Product Name",
      type: "string",
      description: "Name of the eyewear product",
    },
    {
      name: "availability",
      title: "Availability",
      type: "boolean",
      description: "Availability status of the eyewear product",
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
      description: "Detailed description of the eyewear product",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
      description: "Price of the eyewear product",
    },
    {
      name: "slug",
      title: "Product Slug",
      type: "slug",
      options: {
        source: "product_name",
      },
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
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
      description: "Brand of the eyewear product",
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
    {
      name: "deal",
      title: "Deal",
      type: "boolean",
      description: "mark product on website as a special deal",
    },
    {
      name: "deal_discount",
      title: "deal discount",
      type: "number",
      description: "Discount value",
    },
    {
      name: "deal_description",
      title: "deal description",
      type: "string",
      description: "Description of deal/discount",
    },
  ],
  preview: {
    select: {
      title: "product_name",
    },
  },
});
