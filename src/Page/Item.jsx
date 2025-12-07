import { useLocation, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { product_Women } from "../Data/women";
import product_Men from "../Data/men";
import useInViewAnimation from "../Hook/useInViewAnimation.js";
import { useDataContext } from "../Context.jsx";
import FilterItemRange from "../Items/FilterItemRange.jsx";

const makeSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

export default function Item() {
  const [hover, setHover] = useState({});
  const [currentWishlistActive, setCurrentWishlistActive] = useState({});
  const [isHeader, setIsHeader] = useState(false);
  const [totalItems, setTotalItems] = useState(null);
  const [currentItems, setCurrentItems] = useState([]);
  const [close, setClose] = useState(false);
  const [sortType, setSortType] = useState("");
  const location = useLocation();
  const productRefs = useInViewAnimation("active", 200, [currentItems]);
  const {
    userAccount,
    currentAccount,
    handleWishlist,
    showDataSearch,
    currentValue,
  } = useDataContext();
  const path = location.pathname.replace("/", "");
  useEffect(() => {
    const allItems = [...product_Women, ...product_Men];

    // filter by type or type2 based on path
    const filteredProducts = allItems.filter(
      (p) => p.type === path || p.type2 === path || p.sex === path
    );

    // shuffle randomly
    if (filteredProducts.length > 0) {
      let totalItems = filteredProducts.reduce((sum, product) => {
        return sum + (product.quantity || 1); // ប្រសិនបើ quantity មាន, បូក, ប្រសិនបើមិនមាន default = 1
      }, 0);
      setTotalItems(totalItems);
      setCurrentItems(filteredProducts.sort(() => Math.random() - 0.5));
    } else {
      let totalItems = showDataSearch.reduce((sum, product) => {
        return sum + (product.quantity || 1); // ប្រសិនបើ quantity មាន, បូក, ប្រសិនបើមិនមាន default = 1
      }, 0);
      setTotalItems(totalItems);
      setCurrentItems(showDataSearch);
    }
  }, [location]);
  useEffect(() => {
    const getWishlistActive = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const selectWishlist = getWishlistActive?.activeWishlist;
    setCurrentWishlistActive(selectWishlist);
  }, [userAccount, currentAccount]);
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos === 0) {
        // នៅ top
        setIsHeader(false);
      } else if (currentScrollPos > prevScrollPos) {
        // scroll down
        setIsHeader(true);
      } else {
        // scroll up
        setIsHeader(false);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatPath = (path) => {
    // "men-vests" -> "Men Vests"
    return path
      .split("-") // ["men", "vests"]
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // ["Men","Vests"]
      .join(" "); // "Men Vests"
  };

  const formattedPath = formatPath(path); // "Men Vests"
  // ===========================================
  // 🔥 SORTING LOGIC
  // ===========================================
  function filter() {
    let sorted = [...currentItems];

    if (sortType === "priceHigh") {
      sorted.sort(
        (a, b) =>
          parseFloat(b.product_price.replace("$", "")) -
          parseFloat(a.product_price.replace("$", ""))
      );
    }

    if (sortType === "priceLow") {
      sorted.sort(
        (a, b) =>
          parseFloat(a.product_price.replace("$", "")) -
          parseFloat(b.product_price.replace("$", ""))
      );
    }

    if (sortType === "discountHigh") {
      sorted.sort(
        (a, b) =>
          (parseFloat(b.discount?.replace("%", "").replace("-", "")) || 0) -
          (parseFloat(a.discount?.replace("%", "").replace("-", "")) || 0)
      );
    }

    if (sortType === "discountLow") {
      sorted.sort(
        (a, b) =>
          (parseFloat(a.discount?.replace("%", "").replace("-", "")) || 0) -
          (parseFloat(b.discount?.replace("%", "").replace("-", "")) || 0)
      );
    }

    setCurrentItems(sorted);
  }

  return (
    <React.Fragment>
      {currentItems.length > 0 ? (
        <div className="flex flex-col gap-6 mx-4 xl:mx-40 mt-[4rem] sm:mt-[7rem]">
          <div
            className={`bg-white mt-2 p-2 flex justify-between items-center transform transition-transform duration-500 ease-in-out ${
              isHeader ? "-translate-y-full " : "translate-y-0"
            }`}
          >
            <div>
              <h2>
                {formattedPath} ({totalItems}{" "}
                {totalItems > 1 ? "Items" : "Item"})
              </h2>
            </div>
            <div
              className="flex items-center gap-2 px-3 py-1 border border-black cursor-pointer"
              onClick={() => setClose(true)}
            >
              <i className="fa-solid fa-bars-staggered"></i>
              <h2>Filter</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 -mt-6 gap-6">
            {currentItems.map((item, index) => {
              const slug = makeSlug(`${item?.product_name}-${item?.code}`);
              const price =
                parseFloat(item.product_price.replace("$", "")) || 0;

              // discount calculation
              const discountRate =
                parseFloat(
                  item.discount?.replace("-", "").replace("%", "") || 0
                ) / 100;
              const discountedPrice = (price * (1 - discountRate)).toFixed(2);

              const firstColor = item.cloth_colors[0];

              return (
                <div
                  key={item.id}
                  ref={(el) => (productRefs.current[index] = el)}
                  className="fade-in flex flex-col"
                >
                  {/* Product Image */}
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
                    <div className="relative w-full h-[15rem] md:h-[18rem] overflow-hidden">
                      {firstColor.product_image[0] && (
                        <img
                          src={firstColor.product_image[1]}
                          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
                            hover[item.id] === 2 ? "opacity-0" : "opacity-100"
                          }`}
                        />
                      )}

                      {firstColor.product_image[1] && (
                        <img
                          src={firstColor.product_image[2]}
                          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
                            hover[item.id] === 2 || 0
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      )}
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {item.discount ? (
                          <React.Fragment>
                            <span className="line-through text-gray-700">
                              {item.product_price}
                            </span>
                            <span className="text-red-500 font-medium">
                              ${discountedPrice}
                            </span>
                          </React.Fragment>
                        ) : (
                          <span className="text-black font-medium">
                            {item.product_price}
                          </span>
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
                    <h2 className="text-black font-medium truncate w-full">
                      {item.product_name}
                    </h2>
                    {/* Colors */}
                    <div className="flex items-center gap-1 mt-1">
                      {item?.text_color?.map((color, idx) => (
                        <div
                          className={`${color} w-4 h-4 border rounded-full`}
                          key={idx}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="mt-[4rem] sm:mt-[10rem] sm:mb-[2rem]">
          <h2 className="text-center text-2xl font-bold">
            Aww ..Snap. No result were found for {currentValue}
          </h2>
        </div>
      )}
      <FilterItemRange
        formattedPath={formattedPath}
        sortType={sortType}
        setSortType={setSortType}
        filter={filter}
        setClose={setClose}
        close={close}
      />
    </React.Fragment>
  );
}
