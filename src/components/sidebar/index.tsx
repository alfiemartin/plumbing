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
        <div className="flex flex-col gap-4">
          {state.facets.map((facet, i) => {
            return (
              <div className="mb-4 flex flex-col" key={i}>
                <p className="text-black">{facet.displayName}</p>
                {facet.options.map((opt, i) => {
                  return (
                    <button
                      className="text-black"
                      onClick={() =>
                        addFilter({
                          [facet.identifier]: [
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
