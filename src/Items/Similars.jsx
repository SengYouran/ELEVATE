import React, { useEffect, useState } from "react";
import ItemSimilar from "./ItemSimilar";

function Similars({ newArr, similar }) {
  const [itemSimilar, setItemSimilar] = useState([]);

  useEffect(() => {
  if (!newArr || !newArr.code || !similar) return; // important

  const keywords = newArr.product_name
    ?.toLowerCase()
    .split(" ")
    .slice(0, 3)
    .join(" ");

  const others = similar.filter(i =>
    String(i.code) !== String(newArr.code)
  );

  const matched = others.filter(item =>
    item.product_name
      .toLowerCase()
      .split(" ")
      .slice(0, 3)
      .join(" ")
      .includes(keywords)
  );

  setItemSimilar(matched);
}, [newArr, similar]);

  return (
    <div className="flex flex-col gap-2 mt-8">
      {itemSimilar.length !== 0 ? (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="border border-gray-300 w-full bg-black"></div>
            <h3 className="text-2xl font-medium">Similar</h3>
            <div className="border border-gray-200 w-full bg-black"></div>
          </div>

          <ItemSimilar itemSimilar={itemSimilar} />
        </div>
      ) : null}
    </div>
  );
}

export default Similars;
