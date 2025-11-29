import { Link } from "react-router-dom";
import {
  FaShippingFast,
  FaExchangeAlt,
  FaHeadset,
  FaLock,
  FaStar,
  FaBolt,
} from "react-icons/fa";
import useInViewAnimation from "../Hook/useInViewAnimation.js";
function Features() {
  const features = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      desc: "Enjoy complimentary delivery on all orders over $50.",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Easy Returns",
      desc: "Return or exchange items within 7 days, no hassle.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      desc: "Our support team is always here to assist you.",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      desc: "Encrypted payments ensure a safe shopping experience.",
    },
    {
      icon: <FaStar />,
      title: "Premium Quality",
      desc: "We provide high-quality clothing & accessories.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Delivery",
      desc: "Receive your order quickly with our fast shipping.",
    },
  ];
  const productRefs = useInViewAnimation("active", 200, [features]);
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      {/* Top Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-semibold tracking-wide mb-4">
          Why Shop With Us
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          We combine style, convenience, and quality to give you the best
          shopping experience.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {features.map((item, i) => (
          <div
            ref={(el) => (productRefs.current[i] = el)}
            key={i}
            className="fade-left p-8 border rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-center mb-5 text-black text-5xl">
              {item.icon}
            </div>

            <h2 className="text-xl font-bold text-center mb-2">{item.title}</h2>

            <p className="text-center text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Call-to-Action */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-semibold mb-3">Shop With Confidence</h2>
        <p className="text-gray-600 mb-6">
          Explore our latest clothing & accessories collection.
        </p>

        <div className="flex justify-center items-center gap-3">
          <Link
            to="/women-shop-by-collection"
            className="px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition inline-block"
          >
            Explore Women Collection
          </Link>

          <Link
            to="/men-shop-by-collection"
            className="px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition inline-block"
          >
            Explore Men Collection
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Features;
