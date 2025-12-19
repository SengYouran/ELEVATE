import { createContext, useContext, useEffect, useState } from "react";
import { useLoginRegisterPanel } from "./Hook/useFormLogin.js";

import { useAllItems } from "./Hook/useAllItems.js";
import { useWishlist } from "./Hook/useWishlist.js";
import { useStoreBags } from "./Hook/useStoreBags.js";
import { usePurchased } from "./Hook/usePurchased.js";
import { useCheckouts } from "./Hook/useCheckouts.js";
import { useSearch } from "./Hook/useSearch.js";
import { usePoints } from "./Hook/usePoints.js";
const ControlDataContext = createContext();
const useDataContext = () => useContext(ControlDataContext);
function ContextProvider({ children }) {
  const [search, setSearch] = useState(false);//show search mobile phone
  const [bgLoginRegister, setBgLoginRegister] = useState(false); //show background login or register
  const [gotoBag, setGoToBag] = useState(false);//show to bags
  const [policy, setPolicy] = useState(false);//show policy
  const [faqguides, setFaqGuides] = useState(false);//show faqguides
  const [bgCarts, setBgCarts] = useState(false);
  const [showDataSearch, setShowDataSearch] = useState([]); //store currentData search of macthed
  const [amountPayment, setAmountPayment] = useState(null); // store current payments
  const [userAccount, setUserAccount] = useState(() => { //store userAccount object in local storage
    try {
      const stored = localStorage.getItem("UserAccount");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [currentAccount, setCurrentAccount] = useState(() => {//store currentAccount object in local storage
    try {
      const stored = localStorage.getItem("storeCurrentAccount");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [counters, setCounters] = useState(() => {//store counter to update in cart
    try {
      const counter = localStorage.getItem("storeCounter");
      return counter ? JSON.parse(counter) : {};
    } catch {
      return {};
    }
  });
  // Save userAccount changes to localStorage
  useEffect(() => {
    localStorage.setItem("UserAccount", JSON.stringify(userAccount));
    localStorage.setItem("storeCurrentAccount", JSON.stringify(currentAccount));
  }, [userAccount, currentAccount]);
  const { new_array_item } = useAllItems();
  // Custom hook for login/register state and form
  const {
    showLogin,
    setShowLogin,
    form,
    setform,
    handleCreateAccount,
    showRegister,
    setShowRegister,
    handleSelectProvince,
    handleChange,
    selectProvince,
    setSelectProvince,
    handleLogout,
    showLogins,
    setShowLogins,
  } = useLoginRegisterPanel({ setCurrentAccount });
  const { handleWishlist, wishlistActive, wishlistSD } = useWishlist({
    currentAccount,
    setUserAccount,
    userAccount,
    setShowLogin,
    setShowRegister,
    setBgLoginRegister,
    new_array_item,
  });
  // Custom hook for bags processing
  const {
    showCart,
    setShowCart,
    bgCart,
    setBgCart,
    handleCart,
    handleCounterDash,
    handleCounterPlus,
    handleDeleteCart,
    sizes,
    setSize,
  } = useStoreBags({
    counters,
    setCounters,
    userAccount,
    currentAccount,
    setUserAccount,
    setShowLogin,
    setShowRegister,
    setBgLoginRegister,
    new_array_item,
  });
  //store infomation of user accounts of processing
  const {
    purchasing,
    setPurchasing,
    handleClearBagsStorePurchased,
    detail,
    setDetail,
    showHidden,
    setShowHidden,
    activeLinkAcc,
    setActiveLinkAcc,
  } = usePurchased({
    userAccount,
    setUserAccount,
    currentAccount,
    setCounters,
  });
  //store checkouts processing
  const {
    deliveryAddress,
    setDeliveryAddress,
    handleSaveDiliveryAddress,
    deliveryAddressProvince,
    handleDelivery,
    handleBanks,
    handleContact,
  } = useCheckouts({ currentAccount, setUserAccount, userAccount });
  // handle search processing
  const {
    handleSubmit,
    handleSearchValue,
    valueSearch,
    setValueSearch,
    currentValue,
  } = useSearch({ setSearch, setShowDataSearch, new_array_item });
  // handle point processing®
  const {
    userPoints, // list of points history
    pointHistory, // newly added history inside this session
    handleSavePoint,
  } = usePoints({ currentAccount, setUserAccount, userAccount, amountPayment });
  return (
    <ControlDataContext.Provider
      value={{
        counters,
        setCounters,
        new_array_item,
        userAccount,
        setUserAccount,
        currentAccount,
        setCurrentAccount,
        search,
        setSearch,
        showLogin,
        setShowLogin,
        form,
        setform,
        handleCreateAccount,
        showRegister,
        setShowRegister,
        handleSelectProvince,
        handleChange,
        selectProvince,
        setSelectProvince,
        handleLogout,
        bgLoginRegister,
        setBgLoginRegister,
        handleWishlist,
        wishlistActive,
        wishlistSD,
        showCart,
        setShowCart,
        bgCart,
        setBgCart,
        handleCart,
        handleCounterDash,
        handleCounterPlus,
        handleDeleteCart,
        sizes,
        setSize,
        purchasing,
        setPurchasing,
        handleClearBagsStorePurchased,
        detail,
        setDetail,
        showHidden,
        setShowHidden,
        deliveryAddress,
        setDeliveryAddress,
        handleSaveDiliveryAddress,
        deliveryAddressProvince,
        handleDelivery,
        handleBanks,
        handleContact,
        bgCarts,
        setBgCarts,
        gotoBag,
        setGoToBag,
        policy,
        setPolicy,
        faqguides,
        setFaqGuides,
        activeLinkAcc,
        setActiveLinkAcc,
        showLogins,
        setShowLogins,
        showDataSearch,
        setShowDataSearch,
        handleSubmit,
        handleSearchValue,
        valueSearch,
        setValueSearch,
        navigator,
        currentValue,
        userPoints,
        pointHistory,
        handleSavePoint,
        amountPayment,
        setAmountPayment,
      }}
    >
      {children}
    </ControlDataContext.Provider>
  );
}
export { useDataContext };
export default ContextProvider;
