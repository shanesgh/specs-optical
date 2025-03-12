export type ProductType = {
  product_name: string;
  availability: boolean;
  description: string;
  price: number;
  slug: {
    current: string;
  };
  images: {
    _key: string;
    asset: {
      _id: string;
      url: string;
    };
  }[];
  brand: string;
  categories: {
    _id: string;
    name: string;
  }[];
  frameMaterial: string;
  lensMaterial: string;
  lensWidth: number | null;
  bridgeWidth: number | null;
  templeLength: number | null;
  color: string;
};

export type SingleProductBySlug = {
  images: {
    _key: string;
    asset: {
      _id: string;
      url: string;
    };
  }[];
  templeLength: number | null;
  color: string;
  price: number;
  frameMaterial: string;
  description: string;
  slug: string;
  brand: string;
  categories: {
    _id: string;
    name: string;
  }[];
  lensWidth: number | null;
  bridgeWidth: number | null;
  _id: string;
  availability: boolean;
  lensMaterial: string;
  product_name: string;
};

export type WhatsappAndPromoMessageType = {
  whatsappNumber: string;
  promo: string;
};

export type DealType = {
  name: string;
  image: { asset: { _id: string; url: string } } | false;
};

export type ImageSanity = {
  _key: string;
  asset: {
    _id: string;
    url: string;
  };
};
