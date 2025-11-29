function EditFormDeliveryAddress({
  bgForm1,
  setBgForm1,
  currentUser,
  setBgForm2,
  setDeliveryAddress,
  setTextAddress,
}) {
  return (
    <div>
      <div
        className={`fixed top-0 right-0 bg-white  h-full flex flex-col gap-6 py-8 px-4 transition-all duration-500 ease-in-out
        ${
          bgForm1
            ? "z-80 opacity-100 w-full md:w-[35rem] "
            : "-z-80 opacity-0 w-10"
        }`}
      >
        <div className="flex justify-center items-center relative">
          <i
            className="fa-solid fa-angle-left absolute left-2 top-1/2 -translate-1/2 cursor-pointer"
            onClick={() => setBgForm1(false)}
          ></i>
          <h2 className="">Address book</h2>
        </div>
        <div className="border border-gray-200"></div>
        <div className="flex justify-between items-center border py-2 px-2.5 rounded">
          <div className="flex items-center gap-1.5">
            <label htmlFor="shippAddress">
              <input
                type="checkbox"
                className=" accent-black w-[17px] h-[15px]"
                name="shippAddress"
                id="shipAddress"
                checked
                readOnly
              />
            </label>
            <div className="flex flex-col gap-1">
              <h2 className="text-[16px] font-bold">{currentUser?.fullName}</h2>
              <p className="text-[15px]">{currentUser?.provinces}</p>
              <p className="text-[15px]">{currentUser?.currently}</p>
              <p className="text-[15px]">{currentUser?.telephone}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="bg-gray-200 text-sm p-1">Default</h2>
            <span
              className="flex justify-center items-center cursor-pointer"
              onClick={() => {
                setBgForm2(true);
                setDeliveryAddress(currentUser);
                setTextAddress("EDIT ADDRESS");
              }}
            >
              <h2 className="text-sm font-bold">Edit</h2>
              <i className="fa-solid fa-pencil -mt-2 text-sm"></i>
            </span>
          </div>
        </div>
        <div className="absolute bottom-8 left-4 bg-black w-[94%] py-2 rounded text-white cursor-pointer">
          <h2
            className="text-center"
            onClick={() => {
              setDeliveryAddress({
                fullNname: "",
                telephone: "",
                country: currentUser?.country,
                currently: "",
                provinces: "",
              });
              setBgForm2(true);
              setTextAddress("ADD NEW ADDRESS");
            }}
          >
            Add new ddress
          </h2>
        </div>
      </div>{" "}
      <div
        className={`absolute inset-0 bg-gray-100 z-75 opacity-70 ${
          bgForm1 ? "block" : "hidden"
        }`}
        onClick={() => setBgForm1(false)}
      ></div>
    </div>
  );
}

export default EditFormDeliveryAddress;
