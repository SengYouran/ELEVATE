import { useEffect, useState } from "react";

function useWishlist({
  currentAccount,
  setUserAccount,
  userAccount,
  setShowLogin,
  setShowRegister,
  setBgLoginRegister,
  new_array_item,
}) {
  const userIndex = userAccount.findIndex(
    (check) => check.id === currentAccount?.id
  );

  const initialWishlist =
    userIndex !== -1 ? userAccount[userIndex].saveWishlist || [] : [];

  const initialActiveWishlist =
    userIndex !== -1 ? userAccount[userIndex].activeWishlist || {} : {};

  const [wishlistSD, setWishlistSD] = useState(initialWishlist);
  const [wishlistActive, setWishlistActive] = useState(initialActiveWishlist);
  useEffect(() => {
    if (currentAccount?.id == 0) {
      setShowLogin(true);
      setShowRegister(true);
      setBgLoginRegister(true);
      return;
    }
    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );
    if (userIndex !== -1) {
      const updateAccount = [...userAccount];
      const user = { ...updateAccount[userIndex] };
      user.saveWishlist = wishlistSD;
      user.activeWishlist = wishlistActive;
      updateAccount[userIndex] = user;
      setUserAccount(updateAccount);
    }
  }, [wishlistSD, wishlistActive]);
  function handleWishlist(code) {
    console.log(code);
    if (!code) return;

    if (currentAccount?.id === 0) {
      setShowLogin(true);
      setShowRegister(true);
      setBgLoginRegister(true);
      return;
    }

    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount?.id
    );
    if (userIndex === -1) return;

    const data = new_array_item.find((check) => check.code === code);

    setWishlistActive((prev) => ({
      ...prev,
      [String(code)]: !prev[String(code)], // ✅ normalize key
    }));

    const wishlist = userAccount[userIndex]?.saveWishlist || [];
    const isExist = wishlist.some((e) => e?.code === code);

    const updateWishlist = isExist
      ? wishlist.filter((check) => check?.code !== code)
      : [data, ...wishlist];

    setWishlistSD(updateWishlist);
  }

  return { handleWishlist, wishlistActive, wishlistSD };
}
export { useWishlist };
