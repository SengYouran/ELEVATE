import { Link } from "react-router-dom";
import { product_Home } from "../Data/home";
import useInViewAnimation from "../Hook/useInViewAnimation.js";
const makeSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

function Vibes({handleWishlist, currentWishlistActive}) {
  const produtRefs = useInViewAnimation("active", 200);
  return (
    <div className="flex flex-col gap-2 mt-4">
      <h2 className="text-2xl font-bold">Back to Business Vibes 👔</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {product_Home.map((item, index) => {
          const slug = makeSlug(`${item?.product_name}-${item?.code}`);
          const price = parseFloat(item.product_price.replace("$", "")) || 0;

          // remove minus & percent
          const discountText =
            item.discount?.replace("-", "").replace("%", "") || "0";

          const discountRate = parseFloat(discountText) / 100;
          const discountAmount = price * (1 - discountRate);
          // ROUND to 2 decimals
          const positiveValue = Number(discountAmount.toFixed(2));
          return (
            <div
              key={item?.id}
              ref={(el) => (produtRefs.current[index] = el)}
              className="fade-in"
            >
              {item.cloth_colors.map((color, index) => (
                <Link to={`/${item?.type}/${slug}`} key={index} >
                  <img
                    src={color.product_image[1]}
                    alt="Product items"
                    key={color.color}
                    className="w-auto h-[15rem] md:h-[20rem]"
                  />
                </Link>
              ))}

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
                    {item?.discount ? (
                      <h2 className="text-red-500 font-medium">
                        ${positiveValue.toFixed(2)}
                      </h2>
                    ) : null}
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
    </div>
  );
}

export default Vibes;
