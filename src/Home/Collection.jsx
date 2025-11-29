import Women from "../assets/Banner/Artboard 1.jpg";
import Men from "../assets/Banner/Artboard 1 copy.jpg";
import useInViewAnimation from "../Hook/useInViewAnimation.js";
import { Link } from "react-router-dom";
const data_collection = [
  {
    id: 1,
    type: "women",
    img: Women,
    text: "Women Collection",
  },
  {
    id: 2,
    type: "men",
    img: Men,
    text: "Men Collection",
  },
];
function Collection() {
  const productRefs = useInViewAnimation("active", 200);
 
  return (
    <div className="flex justify-center items-center gap-4 md:mx-0">
      {data_collection.map((render, index) => (
        <Link
          className="flex flex-col gap-2 cursor-pointer fade-in"
          key={render?.id}
          ref={(el) => (productRefs.current[index] = el)}
          to={`${render.type}`}
        >
          <img src={render?.img} alt="Women" className="w-[32rem] h-full" />
          <button className="border w-full h-[2.5rem] text-center font-medium cursor-pointer">
            {render?.text}
          </button>
        </Link>
      ))}
    </div>
  );
}
export default Collection;
