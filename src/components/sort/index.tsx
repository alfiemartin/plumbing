import { MyContext } from "@/pages";
import { SortTypes } from "@/services/getProducts";
import React, { useContext } from "react";

const Sort = () => {
  const { setState } = useContext(MyContext);

  return (
    <div>
      <select
        onChange={(e) =>
          setState((x) => ({ ...x, sort: parseInt(e.target.value) as SortTypes }))
        }
      >
        <option value={SortTypes.Recommended}>Recommended</option>
        <option value={SortTypes.PriceHighToLow}>High to low</option>
        <option value={SortTypes.PriceLowToHigh}>Low to high</option>
        <option value={SortTypes.LargestDiscount}>Biggest discount</option>
      </select>
    </div>
  );
};

export default Sort;
