import getProducts, { Facet, PaginationResponse, RangeValue, SortTypes } from "../services/getProducts";
import {
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import type { IProduct } from "@/types/product";
import Product, { ProductGrid } from "@/components/product";
import Sidebar from "@/components/sidebar";

export interface Filter { identifier: string, value: string | RangeValue};

interface State {
  products: Array<IProduct>;
  facets: Array<Facet>;
  sort: SortTypes;
  pagination: PaginationResponse; 
  queryFilters: Record<string, Filter[]>;
  page: number;
}

export const MyContext = createContext<{
  state: State
  setState: Dispatch<SetStateAction<State>>;
}>({ } as any);

export default function Home() {
  const [state, setState] = useState<State>({} as State);

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      if (response.products) {
        setState({ products: response.products, sort: SortTypes.Recommended, page: 1, facets: response.facets, pagination: response.pagination, queryFilters: {} });
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getProducts(state?.sort, state.queryFilters, state.page);
      setState(x => ({ ...x, products: response.products, facets: response.facets, pagination: response.pagination }))
    })();
  }, [state?.sort, state.queryFilters, state.page])

  if (!state?.products) return <div>Loading</div>;

  return (
    <MyContext.Provider value={{ state, setState }}>
      <header className="h-24 bg-gray-600 text-gray-100 flex justify-center items-center">
        <span>Header Here</span>
      </header>
      <main className={`flex min-h-screen flex-row`}>
        <Sidebar></Sidebar>
        <ProductGrid>
          {state?.products.map((product, i) => {
            return <Product key={i} {...product} />;
          })}
        </ProductGrid>
      </main>
    </MyContext.Provider>
  );
}
