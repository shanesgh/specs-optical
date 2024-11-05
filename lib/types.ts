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
  deal: boolean | null;
  deal_discount: number | null;
  deal_description: string | null;
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
  deal_description: string;
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
  deal: boolean;
  _id: string;
  deal_discount: number;
  availability: boolean;
  lensMaterial: string;
  product_name: string;
};

export type WhatsappAndPromoMessageType = {
  whatsappNumber: string;
  promo: string;
};
