import { useEffect, useState } from "react";
import useInViewAnimation from "../Hook/useInViewAnimation.js";
import { Link } from "react-router-dom";
import { useDataContext } from "../Context.jsx";

const makeSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

function ItemSimilar({ itemSimilar }) {
  const produtRefs = useInViewAnimation("active", 200, [itemSimilar]);
  const { handleWishlist, userAccount, currentAccount } = useDataContext();
  const [currentWishlistActive, setCurrentWishlistActive] = useState({});
  // 🔹 Reset refs array whenever itemSimilar changes
  useEffect(() => {
    produtRefs.current = [];
  }, [itemSimilar]);
  useEffect(() => {
    const getWishlistActive = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const selectWishlist = getWishlistActive?.activeWishlist;
    setCurrentWishlistActive(selectWishlist);
  }, [userAccount, currentAccount]);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {itemSimilar.map((item, index) => {
        const slug = makeSlug(`${item?.product_name}-${item?.code}`);
        const price = parseFloat(item.product_price.replace("$", "")) || 0;

        const discountText =
          item.discount?.replace("-", "").replace("%", "") || "0";
        const discountRate = parseFloat(discountText) / 100;
        const discountAmount = price * (1 - discountRate);
        const positiveValue = Number(discountAmount.toFixed(2));

        const firstItem = item?.cloth_colors[0];

        // ✅ Fallback image
        const itemImg =
          firstItem?.product_image?.[1] ||
          firstItem?.product_image?.[0] ||
          "/placeholder.png";

        return (
          <div
            key={item?.id}
            ref={(el) => (produtRefs.current[index] = el)}
            className="fade-in"
          >
            <Link to={`/${item?.type}/${slug}`}>
              <img
                src={itemImg}
                alt={item.product_name || "Product item"}
                className="w-full h-[15rem] md:h-[20rem]"
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
                  {item?.discount && (
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
          </div>
        );
      })}
    </div>
  );
}

export default ItemSimilar;
