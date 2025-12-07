import { useEffect, useState } from "react";

function useStoreBags({
  counters,
  setCounters,
  userAccount,
  currentAccount,
  setUserAccount,
  setShowLogin,
  setShowRegister,
  setBgLoginRegister,
  new_array_item,
}) {
  const [showCart, setShowCart] = useState(false);
  const [bgCart, setBgCart] = useState(false);
  const [sizes, setSize] = useState("");
  useEffect(() => {
    setSize("");
  }, [userAccount, currentAccount]);
  function handleCart(id) {
    if (currentAccount == 0) {
      setShowLogin(true);
      setShowRegister(true);
      setBgLoginRegister(true);
      return;
    }
    const cartItem = new_array_item?.find((check) => check?.id == id);
    if (!cartItem) return;
    const { product_name, product_price, code, cloth_colors, size, discount } =
      cartItem;
    const counterValue = counters?.[id] ?? 1;
    const priceNumber = parseFloat(String(product_price).replace("$", ""));
    if (counterValue <= 0) {
      alert("Please add counter.");
      return;
    }
    if (size === "") {
      return;
    }
    const userIndex = userAccount?.findIndex(
      (check) => check.id === currentAccount.id
    );
    if (userIndex !== -1) {
      const updateCart = {
        id,
        product_name,
        product_price,
        code,
        cloth_colors,
        discount,
        counter: counterValue,
        size,
        sizes: sizes,
        totalPrice: counterValue * priceNumber,
      };
      const updatedAccount = [...userAccount];
      const user = { ...updatedAccount[userIndex] };
      const oldCart = user?.storeBags || [];
      const existingItemIndex = oldCart.findIndex((check) => check.id === id);
      let newCart;
      if (existingItemIndex !== -1) {
        newCart = [...oldCart];
        newCart[existingItemIndex] = updateCart;
      } else {
        newCart = [...oldCart, updateCart]; // ✅ ជួសជុលទីនេះ
      }

      user.storeBags = newCart;
      updatedAccount[userIndex] = user;

      setUserAccount(updatedAccount);
    }
  }
  function handleCounterPlus(id) {
    setCounters((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  }

  function handleCounterDash(id) {
    setCounters((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 0),
    }));
  }

  function handleDeleteCart(id) {
    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );
    if (userIndex === -1) return;
    const oldCart = userAccount[userIndex]?.storeBags || [];
    const newCart = oldCart?.filter((check) => check.id !== id);
    const updatedAccount = [...userAccount];
    const user = { ...updatedAccount[userIndex] };
    user.storeBags = newCart;
    updatedAccount[userIndex] = user;
    setUserAccount(updatedAccount);
    setCounters((pre) => {
      const newCounters = { ...pre };
      delete newCounters[id];
      return newCounters;
    });
  }
  return {
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
  };
}
export { useStoreBags };
