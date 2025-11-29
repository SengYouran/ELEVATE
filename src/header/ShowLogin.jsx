import { useState } from "react";

function ShowLogin({
  setShowLogin,
  setShowRegister,
  setBgLoginRegister,
  setShowLogins,
}) {
  const [checked, setChecked] = useState("Women");
  return (
    <div
      className={`fixed z-50 top-[1rem] left-5 w-[25rem] h-auto flex flex-col gap-3 test p-4`}
      onMouseLeave={() => setShowLogins(false)}
    >
      <div className="flex items-center gap-8">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setShowLogin(true);
            setShowRegister(true);
            setBgLoginRegister(true);
            setShowLogins(false);
          }}
        >
          <i className="fa-solid fa-user text-white"></i>
          <h2 className="text-white text-[15px] font-bold border-b border-transparent hover:border-white">
            Login
          </h2>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setShowLogin(true);
            setShowRegister(true);
            setBgLoginRegister(true);
            setShowLogins(false);
          }}
        >
          <i className="fa-solid fa-user-plus text-white"></i>
          <h2 className="text-white text-[15px] font-bold border-b border-transparent hover:border-white">
            Register
          </h2>
        </div>
      </div>
      <div className="border border-white"></div>
      <form className="flex flex-col gap-2">
        <h2 className="text-white text-xl font-medium">Shop Preference</h2>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="women"
            name="gender"
            value="Women"
            checked={checked === "Women"}
            onChange={(e) => setChecked(e.target.value)}
            className="w-[20px] h-[20px] accent-black cursor-pointer"
          />
          <label htmlFor="women" className="text-white cursor-pointer">
            Women
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="men"
            name="gender"
            value="Men"
            checked={checked === "Men"}
            onChange={(e) => setChecked(e.target.value)}
            className="w-[20px] h-[20px] accent-black cursor-pointer"
          />
          <label htmlFor="men" className="text-white cursor-pointer">
            Men
          </label>
        </div>
      </form>
    </div>
  );
}

export default ShowLogin;
