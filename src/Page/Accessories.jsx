import { useLocation } from "react-router-dom";
import { product_Women } from "../Data/women";
import product_Men from "../Data/men";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useInViewAnimation from "../Hook/useInViewAnimation.js";
import { useDataContext } from "../Context.jsx";
const makeSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

function Accessories() {
  const { new_array_item, userAccount, currentAccount, handleWishlist } =
    useDataContext();
  const [currentWishlistActive, setCurrentWishlistActive] = useState({});
  const [hover, setHover] = useState({}); // <-- FIX
  const [currentData, setCurrentData] = useState([]);
  const productRefs = useInViewAnimation("active", 200, [currentData]); // 100ms delay per product
  useEffect(() => {
    const accessoryTypes = ["men-accessories", "women-accessories"];

    const filteredProducts = new_array_item
      ?.filter((p) => accessoryTypes.includes(p.type))
      .sort(() => Math.random() - 0.5); // shuffle randomly
    setCurrentData(filteredProducts);
  }, [productRefs]);
  useEffect(() => {
    const userIndex = userAccount?.find(
      (check) => check?.id === currentAccount?.id
    );
    const currentlyActiveWishlist = userIndex?.activeWishlist;
    setCurrentWishlistActive(currentlyActiveWishlist);
  }, [userAccount, currentAccount]);
  return (
    <div className="flex flex-col gap-2 mx-4 xl:mx-40 mt-26">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentData?.map((item, index) => {
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
                onMouseEnter={
                  firstColor.product_image.length > 2
                    ? () => setHover((prev) => ({ ...prev, [item.id]: 2 }))
                    : () => setHover((prev) => ({ ...prev, [item.id]: 0 }))
                }
                onMouseLeave={
                  firstColor.product_image.length >= 2
                    ? () => setHover((prev) => ({ ...prev, [item.id]: 1 }))
                    : undefined
                }
              >
                <div className="relative w-full h-[15rem] md:h-[18rem] overflow-hidden rounded-lg">
                  {firstColor.product_image[0] && (
                    <img
                      src={firstColor.product_image[1]}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
                        hover[item.id] === 2 || 0 ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  )}

                  {firstColor.product_image[1] && (
                    <img
                      src={firstColor.product_image[2]}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
                        hover[item.id] === 2 || 0 ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  )}
                </div>
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

export default Accessories;
