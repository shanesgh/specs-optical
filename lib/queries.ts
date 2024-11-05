export const getAllProducts = `*[_type == "product"]{
  product_name,
  availability,
  description,
  price,
  "slug":slug.current,
  "images": images[]{
    _key,
    asset->{
      _id,
      url
    }
  },
  brand,
  "categories": categories[]->{
    _id,
    name
  },
  frameMaterial,
  lensMaterial,
  lensWidth,
  bridgeWidth,
  templeLength,
  color,
  deal,
  deal_discount,
  deal_description
}`;

export const getProductBySlug = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  product_name,
  availability,
  description,
  price,
  "slug": slug.current,
  "images": images[]{
    _key,
    asset->{
      _id,
      url
    }
  },
  brand,
  "categories": categories[]->{
    _id,
    name
  },
  frameMaterial,
  lensMaterial,
  lensWidth,
  bridgeWidth,
  templeLength,
  color,
  deal,
  deal_discount,
  deal_description
}`;

export const getProductsBySearch = `*[_type == "product" && (product_name match $term || brand match $term)]{
_id,
  product_name,
  availability,
  description,
  price,
  "slug":slug.current,
  "images": images[]{
    _key,
    asset->{
      _id,
      url
    }
  },
  brand,
  "categories": categories[]->{
    _id,
    name
  },
  frameMaterial,
  lensMaterial,
  lensWidth,
  bridgeWidth,
  templeLength,
  color,
  deal,
  deal_discount,
  deal_description
}
`;

export const getWhatsappAndPromoMessage = `*[_type == "company"]{
whatsappNumber, promo
}`;
