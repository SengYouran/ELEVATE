function GoToBags({ newArr, gotoBag, setGoToBag, setShowCart }) {
  console.log(gotoBag);
  return (
    <div
      className={` bg-white fixed bottom-0 left-0 w-screen transition-all duration-500 ease-in-out  flex justify-center items-center gap-4 ${
        gotoBag ? "z-85 opacity-100 h-[20rem]" : "opacity-0 -z-50 h-10"
      }`}
    >
      <div className=" shadow shadow-pink-200 rounded-xl">
        <img
          src={newArr?.cloth_colors?.[0]?.product_image?.[1]}
          alt="Product Picture"
          className="w-30"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold">Exited Add To Bag</h2>
        <p className="">Price: {newArr?.product_price}</p>
        <button
          className="bg-black hover:bg-gray-900 text-sm font-bold py-1.5 px-4 text-white rounded cursor-pointer"
          onClick={() => {
            setGoToBag(false);
            setShowCart(true);
          }}
        >
          Check a Bags
        </button>
      </div>
    </div>
  );
}

export default GoToBags;
