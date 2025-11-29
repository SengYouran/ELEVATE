import { useEffect, useState } from "react";
import { useDataContext } from "../Context";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
function Order_Return() {
  const { userAccount, currentAccount, showHidden, setDetail } =
    useDataContext();
  const [currentPurchased, setCurrentPurchased] = useState([]);
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const selcectPruchased = userIndex?.storepurchased || [];
    setCurrentPurchased(selcectPruchased);
  }, [userAccount, currentAccount]);
  const navigate = useNavigate();
  function handleDetialProduct(id) {
    navigate(`/orderdetail?orderId=${id}`);
  }
  const location = useLocation();
  const isDetailPage = location.pathname.includes("/detail/");
  return (
    <div className={`min-h-[70vh] ${showHidden ? "hidden md:block" : "block"}`}>
      <div className="flex items-center gap-1">
        <h2 className="text-[18px] font-bold">Orders</h2>
        <p className="text-[18px] font-bold">&</p>
        <h2 className="text-[18px] font-bold">Return</h2>
      </div>
      {currentPurchased?.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-4 mt-8 min-h-[90vh]">
          <h2 className="no_pruchased text-center text-gray-700 text-lg font-medium">
            You haven’t made any purchases yet.
            <br />
            Once you place an order, it will show up here.
          </h2>
          <div className="flex justify-center items-center gap-2">
            <Link
              to="/women-shop-by-collection"
              className="check_product bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition"
            >
              Women Collection
            </Link>
            <Link
              to="/men-shop-by-collection"
              className="check_product bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition"
            >
              Men Collection
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mt-4">
          <div className="flex justify-center items-center gap-1">
            <h2 className="text-sm font-medium cursor-pointer">Orders</h2>
            <p>&</p>
            <h2 className="text-sm font-medium cursor-pointer">Return</h2>
          </div>
          <div 
            className={`mt-4 ${isDetailPage ? "hidden" : "flex flex-col gap-2"} `}
          >
            {currentPurchased?.map((render, index) => {
              const dateOftime = render?.date?.split(",")[0] || "";
              return (
                <div
                  className="flex flex-col gap-2 cursor-pointer"
                  key={index + render?.id}
                  onClick={() => {
                    handleDetialProduct(render?.id);
                    setDetail(true);
                  }}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-[16px]">#{render?.code}</h2>
                    <h2 className="text-[16px]">{dateOftime}</h2>
                    <h2 className="text-[16px] font-medium">
                      US {render?.product_price}
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-sm">
                      <span className="font-bold">Shipped</span> {dateOftime}{" "}
                      Qty{render?.counter}
                    </h2>
                  </div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-[15px] font-medium ">
                      {render?.product_name}
                    </h2>
                    <img
                      className="w-30"
                      src={render?.cloth_colors?.[0]?.product_image?.[1]}
                      alt="Product picture"
                    />
                  </div>
                  <div className="border border-gray-200"></div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Order_Return;
