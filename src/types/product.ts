//https://transform.tools/json-to-typescript

export interface IProduct {
  id: string;
  legacyId: string;
  legacyVariantId: string;
  cultureCode: string;
  isDefaultVariant: boolean;
  sku: string;
  productName: string;
  slug: string;
  averageRating: number;
  reviewsCount: number;
  questionsCount: number;
  image: Image;
  stockStatus: StockStatus;
  price: Price;
  attributes: Attributes2;
  defaultCategory: DefaultCategory;
  brand: Brand;
  score: number;
}

interface Image {
  externalId: string;
  url: string;
  priority: number;
  isDefault: boolean;
  attributes: Attributes;
}

interface Attributes {
  imageAltText: string;
}

interface StockStatus {
  status: string;
}

interface Price {
  currencyCode: string;
  priceIncTax: number;
  priceExcTax: number;
  isOnPromotion: boolean;
}

interface Attributes2 {
  isApproved: boolean;
  isShownOnTv: boolean;
  isBestSeller: boolean;
  isFreeWaste: boolean;
  isPremium: boolean;
  isRecommended: boolean;
  isTrayIncluded: boolean;
  isBluetoothIncluded: boolean;
  isBatteryIncluded: boolean;
  isAntiSlipIncluded: boolean;
  isShortProjection: boolean;
  hasOneOutlet: boolean;
  hasTwoOutlets: boolean;
  hasThreeOutlets: boolean;
  isNew: boolean;
  hasMoreOptions: boolean;
}

interface DefaultCategory {
  externalId: string;
  slug: string;
  name: string;
  isDefault: boolean;
  ancestors: Ancestor[];
}

interface Ancestor {
  slug: string;
  externalId: string;
  name: string;
  depth: number;
}

interface Brand {
  externalId: string;
  slug: string;
  name: string;
  brandImage: BrandImage;
}

interface BrandImage {
  externalId: string;
  url: string;
  priority: number;
  isDefault: boolean;
  attributes: Attributes3;
}

interface Attributes3 {
  imageAltText: string;
}
