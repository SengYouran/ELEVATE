import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../Context";
import useInViewAnimation from "../Hook/useInViewAnimation.js";
const makeSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");
function Wishlist() {
  const { handleWishlist, userAccount, currentAccount, handleCart } =
    useDataContext();
  const [currentWishlist, setCurrentWish] = useState([]);
  const productRefs = useInViewAnimation("active", 200, [currentWishlist]);

  useEffect(() => {
    const userIndex = userAccount?.find(
      (check) => check?.id === currentAccount?.id
    );
    const date_wishlist = userIndex?.saveWishlist || [];
    setCurrentWish(date_wishlist);
  }, [userAccount, currentAccount]);
  return (
    <section className="mx-4 xl:mx-40 mt-[4rem] sm:mt-[7rem]">
      {currentWishlist?.length === 0 ? (
        <div className="flex flex-col gap-4 justify-center items-center my-12">
          <h2 className="text-2xl font-bold text-center">
            Aww ..Snap. Your wish list is empty!
          </h2>
          <p className="text-sm font-medium text-center">
            Check out our latest arrivals and stay up to date with our latest
            styles!
          </p>
          <div className="flex justify-center items-center gap-3">
            <Link
              to="/women"
              className="px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition inline-block"
            >
              Shop Women
            </Link>

            <Link
              to="/men"
              className="px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition inline-block"
            >
              Shop Men
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentWishlist?.map((item, index) => {
              const slug = makeSlug(`${item?.product_name}-${item?.code}`);
              const price =
                parseFloat(item?.product_price.replace("$", "")) || 0;

              // remove minus & percent
              const discountText =
                item?.discount?.replace("-", "").replace("%", "") || "0";

              const discountRate = parseFloat(discountText) / 100;
              const discountAmount = price * (1 - discountRate);
              // ROUND to 2 decimals
              const positiveValue = Number(discountAmount.toFixed(2));

              const firstColor = item?.cloth_colors[0];

              return (
                <div
                  key={item?.id}
                  ref={(el) => (productRefs.current[index] = el)}
                  className="fade-left"
                >
                  <Link to={`/${item?.type}/${slug}`}>
                    <img
                      src={firstColor?.product_image[1]}
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
                          {item?.product_price}
                        </h2>
                        <h2 className="text-red-500">{item?.discount}</h2>
                        {item?.discount && (
                          <h2 className="text-black font-medium">
                            ${positiveValue.toFixed(2)}
                          </h2>
                        )}
                      </div>
                    </div>

                    <h2 className="text-black w-[10rem] md:w-full overflow-hidden whitespace-nowrap text-ellipsis">
                      {item?.product_name}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <h2
                      className="bg-red-500 p-1 text-white text-[14px] cursor-pointer"
                      onClick={() => {
                        handleWishlist(item?.id);
                      }}
                    >
                      Delete
                    </h2>
                    <h2
                      onClick={() => {
                        handleWishlist(item?.id);
                        handleCart(item?.id);
                      }}
                      className="bg-green-500 p-1 text-white text-[14px] cursor-pointer"
                    >
                      Move to cart
                    </h2>
                  </div>

                  <div className="flex items-center gap-1 mt-1">
                    {item?.text_color?.map((color) => (
                      <div
                        className={`${color} border w-4 h-4 rounded-[50%]`}
                        key={color}
                      ></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default Wishlist;
