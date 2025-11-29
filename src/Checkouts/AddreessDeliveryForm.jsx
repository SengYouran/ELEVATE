import { useDataContext } from "../Context";
import { provinces } from "../Data/provinces";
function AddreessDeliveryForm({
  showProvinces,
  setShowProvinces,
  bgForm2,
  setBgForm2,
  textAddress,
}) {
  const {
    deliveryAddress,
    setDeliveryAddress,
    handleSaveDiliveryAddress,
    deliveryAddressProvince,
  } = useDataContext();
  console.log(textAddress);
  return (
    <form
      className={`fixed top-1/2 left-1/2 -translate-1/2 bg-white w-full md:w-auto h-full transition-all duration-500 ease-in-out
         ${
           bgForm2
             ? "transform scale-100 opacity-100 z-90"
             : " scale-0 -z-90 opacity-0"
         }`}
    >
      <div
        className="absolute top-6 right-4 w-8 h-8 cursor-pointer transform -translate-y-1/2 group"
        onClick={() => setBgForm2(false)}
      >
        <div className="absolute top-1/2 w-full h-[2px] bg-black origin-center transition-all duration-200 ease-in-out transform rotate-45 group-hover:rotate-0"></div>
        <div className="absolute top-1/2 w-full h-[2px] bg-black origin-center transition-all duration-200 ease-in-out transform -rotate-45 group-hover:rotate-0"></div>
      </div>
      <div className="flex flex-col gap-4 px-6 py-4 mt-4">
        <h2 className="text-2xl font-bold">{textAddress}</h2>
        <label htmlFor="shippFullname">
          <h2 className="text-sm">Fullname</h2>
          <input
            className="border border-pink-500 w-full h-[2.5rem] pl-4 rounded outline-0"
            type="text"
            name="shippFullname"
            id="shippFullname"
            placeholder="Enter your name..."
            value={deliveryAddress?.fullName ?? ""}
            onChange={(e) =>
              setDeliveryAddress({
                ...deliveryAddress,
                fullName: e.target.value,
              })
            }
          />
        </label>
        <label htmlFor="shipppPhone" className="flex items-center gap-2">
          <input
            className="border mt-6 border-gray-500 w-[20%] h-[2.5rem] pl-4 rounded outline-0"
            type="text"
            value={"+855"}
            name="shipppCode"
            id="shipppCode"
            disabled
          />
          <span className="w-[80%]">
            <h2 className="text-sm">Telephone(Required)</h2>
            <input
              className="border border-pink-500 w-full h-[2.5rem] pl-4 rounded outline-0"
              type="tel"
              inputMode="numeric"
              name="shipppPhone"
              id="shipppPhone"
              placeholder="Enter your phone..."
              value={deliveryAddress?.telephone ?? ""}
              onChange={(e) =>
                setDeliveryAddress({
                  ...deliveryAddress,
                  telephone: e.target.value,
                })
              }
            />
          </span>
        </label>
        <label htmlFor="shippAddress">
          <h2 className="text-sm">Address(Required)</h2>
          <input
            className="border border-pink-500 w-full h-[2.5rem] pl-4 rounded outline-0"
            type="text"
            name="shippAddress"
            id="shippAddress"
            placeholder="Enter your community..."
            value={deliveryAddress?.currently ?? ""}
            onChange={(e) =>
              setDeliveryAddress({
                ...deliveryAddress,
                currently: e.target.value,
              })
            }
          />
        </label>
        <div className="flex flex-col gap-1">
          <h2 className="text-[15px] font-medium">Available country</h2>
          <div className="flex itmes-center gap-8">
            <div className="flex flex-col gap-1 relative">
              <h2 className="text-sm">Country</h2>
              <input
                type="text"
                name="countryCheckout"
                className="text-sm font-medium border border-pink-500 pl-2 w-full h-[2.5rem]"
                value={deliveryAddress?.country ?? "Cambodia"}
                readOnly
              />
              <i className="fa-solid fa-chevron-down absolute top-9 right-2 text-sm"></i>
            </div>
            <div className="flex flex-col gap-1 relative cursor-pointer">
              <h2 className="text-sm ">City / Province</h2>
              <input
                type="text"
                className="text-sm font-medium border border-pink-500 pl-2 w-full h-[2.5rem] cursor-pointer outline-0"
                name="provinceCheckout"
                readOnly
                value={deliveryAddress?.provinces ?? ""}
                onClick={() => setShowProvinces(!showProvinces)}
              />
              <i
                className="fa-solid fa-chevron-down absolute top-9 right-2 text-sm"
                onClick={() => setShowProvinces(!showProvinces)}
              ></i>
              <div
                className={`list_provinces absolute bottom-full flex flex-col gap-2 border border-pink-500 w-full max-h-40 bg-white overflow-y-auto
              ${showProvinces ? "block" : "hidden"}`}
              >
                {provinces.map((render, index) => {
                  return (
                    <h2
                      className=" pl-2 hover:bg-gray-200"
                      key={index}
                      //onClick={() => handleSelectProvince(render)}
                      onClick={() => {
                        deliveryAddressProvince(render);
                        setShowProvinces(!showProvinces);
                      }}
                    >
                      {render}
                    </h2>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <button
          className="mt-12 bg-black w-full h-[2.5rem] rounded text-white cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            handleSaveDiliveryAddress();
            setFormAddress(!formAddress);
            setBgForm2(false);
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default AddreessDeliveryForm;
