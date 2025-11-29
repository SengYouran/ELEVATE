import { createContext, useContext, useEffect, useState } from "react";
import { useLoginRegisterPanel } from "./Hook/useFormLogin.js";

import { useAllItems } from "./Hook/useAllItems.js";
import { useWishlist } from "./Hook/useWishlist.js";
import { useStoreBags } from "./Hook/useStoreBags.js";
import { usePurchased } from "./Hook/usePurchased.js";
import { useCheckouts } from "./Hook/useCheckouts.js";
const ControlDataContext = createContext();
const useDataContext = () => useContext(ControlDataContext);
function ContextProvider({ children }) {
  const [search, setSearch] = useState(false);
  const [bgLoginRegister, setBgLoginRegister] = useState(false);
  const [gotoBag, setGoToBag] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [faqguides, setFaqGuides] = useState(false);
  const [bgCarts, setBgCarts] = useState(false);
  const [userAccount, setUserAccount] = useState(() => {
    try {
      const stored = localStorage.getItem("UserAccount");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [currentAccount, setCurrentAccount] = useState(() => {
    try {
      const stored = localStorage.getItem("storeCurrentAccount");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [counters, setCounters] = useState(() => {
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
    handleLogout,showLogins, setShowLogins
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
  const {
    purchasing,
    setPurchasing,
    handleClearBagsStorePurchased,
    detail,
    setDetail,
    showHidden,
    setShowHidden,activeLinkAcc, setActiveLinkAcc
  } = usePurchased({
    userAccount,
    setUserAccount,
    currentAccount,
    setCounters,
  });
  const {
    deliveryAddress,
    setDeliveryAddress,
    handleSaveDiliveryAddress,
    deliveryAddressProvince,
    handleDelivery,
    handleBanks,
    handleContact,
  } = useCheckouts({ currentAccount, setUserAccount, userAccount });

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
        setFaqGuides,activeLinkAcc, setActiveLinkAcc,showLogins, setShowLogins
      }}
    >
      {children}
    </ControlDataContext.Provider>
  );
}
export { useDataContext };
export default ContextProvider;
