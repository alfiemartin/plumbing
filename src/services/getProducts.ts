import { IProduct } from "@/types/product";

export enum SortTypes {
  Recommended = 1,
  PriceLowToHigh,
  PriceHighToLow,
  LargestDiscount,
}

export interface PaginationResponse {
  from: number;
  size: number;
  total: number;
  sortType: SortTypes
}

export interface RangeValue {
  gte: number,
  lte: number
}

interface FacetOption {
  identifier: string;
  value: string | RangeValue;
  displayValue: string;
  productCount: number;
  priority: number;
}

export interface Facet {
  identifier: string;
  displayName: string;
  priority: number;
  options: Array<FacetOption>;
  facetType: number;
}

interface ProductsResponse {
  pagination: PaginationResponse;
  facets: Array<Facet>;
  products: Array<IProduct>;
}

const getProducts = async (sort: SortTypes = SortTypes.Recommended, filters: Record<string, unknown> = {}, page = 0): Promise<ProductsResponse>  => {
  const API_URI =
    "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI";

  try {
    const data = await fetch(API_URI, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "toilets",
        pageNumber: page,
        size: 0,
        additionalPages: 0,
        sort,
        facets: filters
      }),
    });

    return await data.json();
  } catch (e) {
    console.log(e);
  }
  
  throw Error('Unable to access API');
};

export default getProducts;