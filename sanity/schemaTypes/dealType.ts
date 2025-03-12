import { defineType, defineField } from "sanity";

export const dealTypes = defineType({
  name: "deals",
  title: "Deal",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Explain the deal - in short eg christmas special",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Deal Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
