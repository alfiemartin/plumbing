import { Filter, MyContext } from "@/pages";
import React, { useContext } from "react";

const Sidebar = () => {
  const { state, setState } = useContext(MyContext);

  const addFilter = (filter: Record<string, Filter[]>) => {
    setState((x) => {
      return { ...x, queryFilters: { ...x.queryFilters, ...filter } };
    });
  };

  return (
    <section className="w-64 bg-blue-200">
      <div className="flex flex-col gap-3">
        <h2>Choose a style:</h2>
        <div className="flex gap-4">
          {state.facets
            .find((x) => x.identifier === "toiletStyle")
            ?.options.map((opt, i) => {
              return (
                <button
                  onClick={() =>
                    addFilter({
                      toiletStyle: [
                        { identifier: opt.identifier, value: opt.value },
                      ],
                    })
                  }
                  key={i}
                >
                  {opt.displayValue}({opt.productCount})
                </button>
              );
            })}
        </div>
        <button onClick={() => setState((x) => ({ ...x, queryFilters: {} }))}>
        clear filter
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
