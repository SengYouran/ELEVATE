import React, { useState } from "react";
import facebook from "../assets/logo/facebook logo.svg";
import google from "../assets/logo/google logo.png";
import { useDataContext } from "../Context";
import { provinces } from "../Data/provinces";
function Register({ setIsLogin }) {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showPassd1, setShowPassd1] = useState(false);
  const [showPassd2, setShowPassd2] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const {
    form,
    setform,
    handleCreateAccount,
    handleSelectProvince,
    selectProvince,
    setSelectProvince,
    userAccount,
    setUserAccount,
  } = useDataContext();
  function handleMatchPassword() {
    if (password1 === password2 && password1.length >= 6) {
      setIsLogin(false);
      setPassword1("");
      setPassword2("");
      setShowPasswordForm(false);
      return true;
    } else {
      setIsLogin(true);
      return false;
    }
  }
  const onlyNumbers = (value) => {
    return value.replace(/[^0-9]/g, "");
  };

  return (
    <React.Fragment>
      <form className={`mt-4 flex flex-col gap-4`}>
        <div className="flex items-center gap-2">
          <h2 className="text-[15px] font-medium">Gender*</h2>
          <label className="font-[15px] flex items-center gap-2">
            <input
              type="radio"
              className="w-[20px] h-[20px] accent-black cursor-pointer"
              name="genderMale"
              id="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={(e) => setform({ ...form, gender: e.target.value })}
            />
            Male
          </label>
          <label className="font-[15px] flex items-center gap-2">
            <input
              type="radio"
              className="w-[20px] h-[20px] accent-black cursor-pointer"
              name="genderFemale"
              id="gender1"
              value="Female"
              checked={form.gender === "Female"}
              onChange={(e) => setform({ ...form, gender: e.target.value })}
            />
            Female
          </label>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[15px] font-medium">Full Name</h2>
          <input
            type="text"
            name="usernameRegister"
            id="usernameRegister"
            className="w-full h-[35px] border border-black pl-2 outline-0 rounded"
            placeholder="Enter Your Full Name"
            value={form.fullName}
            onChange={(e) => setform({ ...form, fullName: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[15px] font-medium">Telephone*</h2>
          <input
            type="tel"
            inputMode="numeric"
            name="telRegister"
            id="telRegister"
            className="w-full h-[35px] border border-black pl-2 outline-0 rounded"
            placeholder="Enter Telephone"
            value={form?.telephone}
            onChange={(e) =>
              setform({ ...form, telephone: onlyNumbers(e.target.value) })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[15px] font-medium">Email(optional)</h2>
          <input
            type="email"
            className="w-full h-[35px] border border-black pl-2 outline-0 rounded"
            name="phoneRegister"
            id="phoneRegister"
            placeholder="Enter Email"
            value={form?.email}
            onChange={(e) => setform({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[15px] font-medium">Available country</h2>
          <div className="flex itmes-center gap-8">
            <div className="flex flex-col gap-1 relative">
              <h2 className="text-sm">Country</h2>
              <input
                type="text"
                name="countryCheckout"
                className="text-sm font-medium border border-black pl-2 w-full h-[30px]"
                value={form?.country}
                readOnly
              />
              <i className="fa-solid fa-chevron-down absolute top-8 right-2 text-sm"></i>
            </div>
            <div className="flex flex-col gap-1 relative cursor-pointer">
              <h2 className="text-sm ">City / Province</h2>
              <input
                type="text"
                className="text-sm font-medium border border-black pl-2 w-full h-[30px] cursor-pointer outline-0"
                name="provinceCheckout"
                readOnly
                value={form?.provinces}
                onClick={() => setSelectProvince(!selectProvince)}
              />
              <i
                className="fa-solid fa-chevron-down absolute top-8 right-2 text-sm"
                onClick={() => setSelectProvince(!selectProvince)}
              ></i>
              <div
                className={`list_provinces absolute bottom-full border border-black w-[153px] max-h-40 bg-gray-100 overflow-y-auto  ${
                  selectProvince ? "block" : "hidden"
                }`}
              >
                {provinces.map((render, index) => {
                  return (
                    <h2
                      className="pl-1 text-[14px] hover:bg-gray-200"
                      key={index}
                      onClick={() => handleSelectProvince(render)}
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
          className=" w-full h-[35px] bg-black text-white hover:bg-black cursor-pointer rounded mt-1"
          onClick={(e) => {
            e.preventDefault(); // បញ្ឈប់ default behavior
            if (
              form?.gender === "" ||
              form?.fullName.trim() === "" ||
              form?.telephone.trim() === "" ||
              form?.email.trim() === ""
            )
              return;
            setShowPasswordForm(true);
          }}
        >
          CREATE ACCOUNT
        </button>
        <h2 className="text-center text-sm font-medium">
          Forget Your Password?
        </h2>
        <div className="flex justify-center items-center gap-2">
          <div className="border border-gray-300 w-full"></div>
          <h2 className="">OR</h2>
          <div className="border border-gray-300 w-full"></div>
        </div>
        <div className="border w-full h-[35px] flex justify-center items-center relative rounded cursor-pointer">
          <img
            src={facebook}
            alt="Facebook logo"
            className="w-[20px] absolute left-4 top-1/2 transform -translate-1/2"
          />
          <h2 className="">Continue With Facebook</h2>
        </div>
        <div className="border w-full h-[35px] flex justify-center items-center relative rounded cursor-pointer">
          <img
            src={google}
            alt="Google logo"
            className="w-[20px] absolute left-4 top-1/2 transform -translate-1/2"
          />
          <h2 className="">Continue With Google</h2>
        </div>
        <h2
          className="text-center text-sm font-medium cursor-pointer mb-4"
          onClick={() => {
            setIsLogin(false);
          }}
        >
          Already have an account? Login
        </h2>
        <div
          className={`flex-col gap-4 absolute z-10 top-1/2 left-1/2 transform -translate-1/2 bg-gray-200 w-full py-6 px-4  ${
            showPasswordForm ? "flex" : "hidden"
          }`}
        >
          <span className="relative">
            <input
              type={`${showPassd1 ? "text" : "password"}`}
              className="border border-black w-full h-[35px] pl-2 bg-white outline-0 rounded"
              name="passwordRegister"
              id="passd1"
              placeholder="Password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <i
              className={`fa-solid ${
                showPassd1 ? "fa-eye" : "fa-eye-slash"
              } absolute top-[30%] right-4  cursor-pointer
            ${showPassd1 ? "block text-black" : "hidden text-gray-200"}`}
              onClick={() => setShowPassd1(!showPassd1)}
            ></i>
          </span>
          <span className="relative">
            <input
              type={`${showPassd2 ? "text" : "password"}`}
              className="border border-black w-full h-[35px] pl-2 bg-white outline-0 rounded"
              name="comfirmPasswordRegister"
              id="passd2"
              placeholder="Comfirm Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <i
              className={`fa-solid ${
                showPassd2 ? "fa-eye" : "fa-eye-slash"
              } absolute top-[30%] right-4  cursor-pointer
            ${showPassd2 ? "block text-black" : "hidden text-gray-200"}`}
              onClick={() => setShowPassd2(!showPassd2)}
            ></i>
          </span>
          <h2
            className="bg-black text-white text-center w-full h-[35px] text-[18px] pt-1 cursor-pointer hover:black rounded"
            onClick={() => {
              if (handleMatchPassword()) {
                handleCreateAccount(userAccount, setUserAccount, password2);
              }
            }}
          >
            Confirm
          </h2>
        </div>
      </form>
      <div
        className={`bg-black fixed inset-0 h-[100vh] opacity-30 ${
          showPasswordForm ? "block" : "hidden"
        }`}
      ></div>
    </React.Fragment>
  );
}

export default Register;
