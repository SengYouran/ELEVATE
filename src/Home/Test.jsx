import React from "react";
import product_Men from "../Data/men";
import { product_Women } from "../Data/women";
function Test() {
  console.log(product_Women);
  return (
    <div>
      {product_Women?.map((render) => (
        <div key={render.id}>
          <h2>{render.product_name}</h2>
          <h2 className="text-red-500">{render?.discount}</h2>
          <h2>{render?.type2}</h2>
          {render?.text_color?.map((render, index) => (
            <div className={`${render} w-5 h-5 border`} key={index}></div>
          ))}
          <h2>{render?.product_price}</h2>
          {render.cloth_colors.map((color, index) => (
            <div key={index} className="flex justify-center items-center gap-1">
              <p>Color: {color.color}</p>
              {color.product_image.map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`${render.product_name} - ${color.color}`}
                  width={100}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Test;
