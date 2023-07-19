import { IProduct } from "@/types/product";
import React, { ReactNode, useContext } from "react";
import Image from "next/image";
import Sort from "../sort";
import { Filter, MyContext } from "@/pages";

const Product = ({
  productName,
  image,
  price,
  averageRating,
  attributes,
}: IProduct) => {
  return (
    <div className="h-[400px] bg-gray-200 text-black">
      <div className="w-full h-2/3 relative">
        <Image
          src={image.url}
          alt={image.attributes.imageAltText}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-sm">{productName}</p>
      <p className="text-xl">£{price.priceIncTax}</p>
      {attributes.isNew && <p>NEW!!</p>}
      {attributes.isBestSeller && <p>BESTSELLER!!</p>}
      {averageRating && (
        <p className="text-sm">
          {new Array(Math.round(averageRating)).fill("").map(() => (
            <>⭐️</>
          ))}
        </p>
      )}
    </div>
  );
};

const ProductGrid = ({ children }: { children?: ReactNode }) => {
  const { state, setState } = useContext(MyContext);

  if(!state.pagination) return <></>;

  const { from, size, total } = state.pagination;

  const numPages = Math.ceil(total / size);
  const currentPage = (from / size) + 1;

  return (
    <section>
      <Sort />
      <div className="container mx-0 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {children}
      </div>
      <div className="flex gap-4">
        {new Array(numPages).fill("").map((x, i) => (
          <button onClick={() => {
            setState(x => ({ ...x, page: i + 1 }))
          }} className={`${i === currentPage - 1 && 'text-blue-500'}`} key={i}>{i + 1}</button>
        ))}
      </div>
    </section>
  );
};

export default Product;
export { ProductGrid };
