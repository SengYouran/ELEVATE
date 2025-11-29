import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../Context";
import Similars from "../Items/Similars";
import GoToBags from "../Items/GoToBags";
export default function ProductDetail() {
  const [newArr, setNewArr] = useState(null);
  const { slug } = useParams();
  const scrollRef = useRef(null);
  const indexRef = useRef(0);
  const [idProduct, setIdProduct] = useState(0);
  const [size, setSizes] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [alertSize, setAlertSize] = useState(false);
  

  const {
    handleCart,
    counters,
    handleCounterDash,
    handleCounterPlus,
    setSize,
    currentAccount,
    setShowLogin,
    setShowRegister,
    new_array_item,
    setBgLoginRegister,
    sizes,
    bgCarts,
    setBgCarts,
    setShowCart,gotoBag, setGoToBag
  } = useDataContext();
  // -------------------------
  // LOAD PRODUCT DETAIL
  // -------------------------
  useEffect(() => {
    setSimilar(new_array_item);
    const lastDash = slug.lastIndexOf("-");
    const code = slug.substring(lastDash + 1);
    const product = new_array_item.find((p) => p.code === code);
    setNewArr(product);
    setSize("");
    setSizes(null);
  }, [slug]);

  // -------------------------
  // scrollToIndex() — GLOBAL
  // -------------------------
  const scrollToIndex = (idx, smooth = true) => {
    const container = scrollRef.current;
    if (!container) return;

    const width = container.offsetWidth;
    const left = idx * width;

    container.style.scrollBehavior = smooth ? "smooth" : "auto";
    container.scrollTo({ left });

    if (!smooth) {
      requestAnimationFrame(() => {
        container.style.scrollBehavior = "smooth";
      });
    }
  };

  // -------------------------
  // AUTO SCROLL LOOP
  // -------------------------
  useEffect(() => {
    if (!newArr) return;

    const total = newArr.cloth_colors[0].product_image.length;

    const interval = setInterval(() => {
      indexRef.current += 1;

      if (indexRef.current === total) {
        scrollToIndex(indexRef.current, true);

        setTimeout(() => {
          scrollToIndex(0, false);
          indexRef.current = 0;
        }, 500);
      } else {
        scrollToIndex(indexRef.current, true);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [newArr]);

  // -------------------------
  // BUTTON: NEXT
  // -------------------------
  const handleNext = () => {
    if (!newArr) return;

    const total = newArr.cloth_colors[0].product_image.length;
    indexRef.current += 1;

    if (indexRef.current === total) {
      scrollToIndex(indexRef.current, true);

      setTimeout(() => {
        scrollToIndex(0, false);
        indexRef.current = 0;
      }, 300);
    } else {
      scrollToIndex(indexRef.current, true);
    }
  };

  // -------------------------
  // BUTTON: PREVIOUS
  // -------------------------
  const handlePrev = () => {
    if (!newArr) return;

    const total = newArr.cloth_colors[0].product_image.length;
    indexRef.current -= 1;

    if (indexRef.current < 0) {
      scrollToIndex(total, false);
      indexRef.current = total - 1;

      requestAnimationFrame(() => {
        scrollToIndex(indexRef.current, true);
      });
    } else {
      scrollToIndex(indexRef.current, true);
    }
  };

  if (!newArr) return <div>Loading...</div>;

  const images = newArr.cloth_colors[idProduct].product_image;
  const extendedImages = [...images, images[0]];
  const price = parseFloat(newArr?.product_price.replace("$", "")) || 0;

  // remove minus & percent
  const discountText =
    newArr?.discount?.replace("-", "").replace("%", "") || "0";

  const discountRate = parseFloat(discountText) / 100;
  const discountAmount = price * (1 - discountRate);
  // ROUND to 2 decimals
  const positiveValue = Number(discountAmount.toFixed(2));

  return (
    <section className="mt-[4rem] md:mt-[8rem] mx-2 xl:mx-32">
      <div className="block sm:flex gap-4">
        <div className="w-full md:w-[45%] p-2 rounded-xl mr-[10%] relative">
          <span
            onClick={handlePrev}
            className="absolute left-2 top-[50%] sm:top-[35%] bg-gray-50 py-1 px-2 rounded-full cursor-pointer z-10"
          >
            <i className="fa-solid fa-angle-left text-xl"></i>
          </span>

          <div
            ref={scrollRef}
            className="container-scroll overflow-x-auto flex w-full h-full scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {extendedImages.map((img, i) => (
              <div
                key={i}
                className="flex-none w-full h-130"
                style={{ scrollSnapAlign: "start" }}
              >
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <span
            onClick={handleNext}
            className="absolute right-2 top-[50%] sm:top-[35%] bg-gray-50 py-1 px-2 rounded-full cursor-pointer z-10"
          >
            <i className="fa-solid fa-angle-right text-xl"></i>
          </span>
        </div>

        <div className="mt-2 flex flex-col gap-2 text-[18px] md:w-[60%]">
          <div className="flex items-center gap-6">
            <h2 className="font-[500] text-xl">{newArr.product_name}</h2>
            <i className="fa-regular fa-heart text-2xl cursor-pointer ml-[4rem]"></i>
          </div>
          <div className="flex items-center gap-1">
            {newArr.discount && (
              <>
                <h2 className="text-gray-700 font-medium border-gray-700 line-through">
                  {newArr?.product_price}
                </h2>
                <h2 className="text-pink-600 font-medium">
                  {newArr?.discount}
                </h2>
              </>
            )}

            <h2 className="text-black font-medium">${positiveValue}</h2>
          </div>
          <h2 className="mt-2 text-xl font-medium">{newArr?.available}</h2>
          <div className="flex flex-wrap items-center gap-2">
            {newArr?.cloth_colors.map((render, index) => (
              <div
                className="flex flex-col justify-center items-center gap-1 "
                key={index}
              >
                <img
                  className={`w-[10rem] cursor-pointer ${
                    idProduct === index ? "border" : ""
                  }`}
                  src={render?.product_image[0]}
                  alt="Prodcut Item"
                  onClick={() => setIdProduct(index)}
                />
                <h2 className="text-[15px]">{render?.color}</h2>
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-col gap-4">
            <h2 className="font-bold">Size</h2>
            {alertSize && (
              <div className="flex flex-col gap-4 relative">
                <p className="text-sm text-red-600 -mt-4 ml-10">
                  Please select one size !
                </p>
                <i className="fa-solid fa-caret-down absolute left-27 text-red-800 custom-animation"></i>
              </div>
            )}
            <div className="flex items-center gap-2">
              {newArr?.size.map((render, index) => (
                <div
                  className={`bg-gray-100 w-18 h-[2.5rem] cursor-pointer flex items-center justify-center ${
                    size === index ? "border" : ""
                  }`}
                  onClick={() => {
                    setSizes(index);
                    setSize(render);
                    setAlertSize(false);
                  }}
                  key={index}
                >
                  <h2 className="font-medium text-[15px]">{render}</h2>
                </div>
              ))}
            </div>
            <div className="flex gap-1 mt-1">
              <div className="bg-black w-4 h-4 mt-[3px]"></div>
              <h2 className="text-[15px]">{newArr?.model}</h2>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold mt-4">Qty</h2>
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 w-18 h-[2.5rem] cursor-pointer flex items-center justify-center mt-2">
                <i
                  className="fa-solid fa-minus"
                  onClick={() => handleCounterDash(newArr?.id)}
                ></i>
              </div>
              <div className="bg-gray-100 w-18 h-[2.5rem] flex items-center justify-center mt-2">
                <h2 className="">{counters?.[newArr?.id] || 1}</h2>
              </div>
              <div className="bg-gray-100 w-18 h-[2.5rem] cursor-pointer flex items-center justify-center mt-2">
                <i
                  className="fa-solid fa-plus"
                  onClick={() => handleCounterPlus(newArr?.id)}
                ></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <h2 className="font-[500]">{newArr?.code}</h2>
            <h2 className="text-[15px]">{newArr?.product_text}</h2>
          </div>
          <div
            className="bg-black hover:bg-gray-800 h-[3rem] cursor-pointer flex items-center justify-center"
            onClick={() => {
              if (!currentAccount) {
                setShowLogin(true);
                setShowRegister(true);
                setBgLoginRegister(true);
                return;
              }
              if (sizes === "") {
                setAlertSize(true);
                return;
              }
              setGoToBag(true);
              setBgCarts(true);
              handleCart(newArr?.id);
            }}
          >
            <h2 className="text-center text-white font-medium ">Add to bag</h2>
          </div>
        </div>
      </div>
      <GoToBags
        gotoBag={gotoBag}
        setGoToBag={setGoToBag}
        newArr={newArr}
        setShowCart={setShowCart}
      />
      <Similars newArr={newArr} similar={similar} />
    </section>
  );
}
