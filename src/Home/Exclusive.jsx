import React, { useState } from "react";
import { Link } from "react-router-dom";
const makeSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");
import { product_Exclusive } from "../Data/home";
import useInViewAnimation from "../Hook/useInViewAnimation.js";
function Exclusive({ handleWishlist, currentWishlistActive }) {
  const [hover, setHover] = useState({}); // <-- FIX
  const productRefs = useInViewAnimation("active", 200);
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">✨ Up to 70% Off Exclusive!</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {product_Exclusive.map((item, index) => {
          const slug = makeSlug(`${item?.product_name}-${item?.code}`);
          const price = parseFloat(item.product_price.replace("$", "")) || 0;

          // remove minus & percent
          const discountText =
            item.discount?.replace("-", "").replace("%", "") || "0";

          const discountRate = parseFloat(discountText) / 100;
          const discountAmount = price * (1 - discountRate);
          // ROUND to 2 decimals
          const positiveValue = Number(discountAmount.toFixed(2));

          const firstColor = item.cloth_colors[0];

          return (
            <div
              key={item.id}
              ref={(el) => (productRefs.current[index] = el)}
              className="fade-in"
            >
              <Link
                to={`/${item?.type}/${slug}`}
                onMouseEnter={() =>
                  setHover((prev) => ({ ...prev, [item.id]: 2 }))
                }
                onMouseLeave={() =>
                  setHover((prev) => ({ ...prev, [item.id]: 1 }))
                }
              >
                <img
                  src={firstColor.product_image[hover[item.id] || 1]}
                  alt="Product item"
                  className="w-auto h-[15rem] md:h-[20rem] transition-all duration-150 ease-in"
                />
              </Link>

              <div className="flex flex-col mt-2">
                <div className="flex justify-between items-center gap-1">
                  <div className="flex items-center gap-1">
                    <h2
                      className={`text-gray-700 font-medium ${
                        item?.discount ? "line-through" : ""
                      }`}
                    >
                      {item.product_price}
                    </h2>
                    <h2 className="text-black">{item.discount}</h2>
                    {item.discount && (
                      <h2 className="text-red-500 font-medium">
                        ${positiveValue.toFixed(2)}
                      </h2>
                    )}
                  </div>
                  <span
                    onClick={() => {
                      handleWishlist(item?.id);
                    }}
                  >
                    {currentWishlistActive?.[item?.id] ? (
                      <i className="fa-solid fa-heart text-xl text-black cursor-pointer relative z-10"></i>
                    ) : (
                      <i className="fa-regular fa-heart text-xl text-black cursor-pointer relative z-10"></i>
                    )}
                  </span>
                </div>

                <h2 className="text-black w-[12rem] md:w-full overflow-hidden whitespace-nowrap text-ellipsis">
                  {item.product_name}
                </h2>
              </div>

              <div className="flex items-center gap-1 mt-1">
                {item?.text_color?.map((color, index) => (
                  <div
                    className={`${color} border w-4 h-4 rounded-[50%]`}
                    key={index}
                  ></div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Exclusive;
