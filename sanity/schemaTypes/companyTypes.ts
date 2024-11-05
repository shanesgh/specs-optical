import { defineField, defineType } from "sanity";

export const companyTypes = defineType({
  name: "company",
  title: "Company",
  type: "document",
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: "address",
      title: "Company Address",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(200),
    },
    {
      name: "location",
      title: "Location",
      type: "geopoint",
      options: {
        leaflet: {
          defaultLocation: { lat: 10.654901, lng: -61.501925 }, // Default location (Port of Spain, Trinidad and Tobago)
        },
      },
    },
    {
      name: "phoneNumber",
      title: "Phone Number (format 888-8888)",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(/^\d{3}-\d{4}$/, {
          name: "phone number",
          invert: false,
        }),
    },
    {
      name: "whatsappNumber",
      title: "WhatsApp Number (format 888-8888)",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^\d{3}-\d{4}$/, {
          name: "WhatsApp number",
          invert: false,
        }),
    },
    {
      name: "email",
      title: "Email",
      type: "email",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "website",
      title: "Website",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      name: "description",
      title: "Company Description",
      type: "text",
      validation: (Rule) => Rule.max(500),
    },
    {
      name: "promo",
      title: "Promo Message",
      type: "string",
      validation: (Rule) => Rule.max(100),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "socialMedia",
      title: "Social Media",
      type: "object",
      fields: [
        {
          name: "facebook",
          title: "Facebook",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        },
        {
          name: "twitter",
          title: "Twitter",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        },
        {
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        },
        {
          name: "instagram",
          title: "Instagram",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        },
      ],
    },
  ],
});
