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
  function handleWishlist(id) {
    if (currentAccount?.id === 0) {
      setShowLogin(true);
      setShowRegister(true);
      setBgLoginRegister(true);
      return;
    }
    const data = new_array_item.find((check) => check.id === id);
    const toggleActive = {
      ...wishlistActive,
      [id]: !wishlistActive[id],
    };
    setWishlistActive(toggleActive);
    const user = userAccount[userIndex];
    const wishlist = user?.saveWishlist || [];
    const isExit = wishlist.some((e) => e.id === id);
    const updateWishlist = isExit
      ? wishlist?.filter((check) => check?.id !== id)
      : [data, ...wishlist];
    setWishlistSD(updateWishlist);
  }
  return { handleWishlist, wishlistActive, wishlistSD };
}
export { useWishlist };
