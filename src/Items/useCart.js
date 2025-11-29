import { useEffect, useState } from "react";
import { useDataContext } from "../Context";
function useCart() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(null);
  const [amountPayment, setAmountPayment] = useState(null);
  const [saveMoney, setSaveMoney] = useState(null);
  const [KHRTotal, setKHRTotal] = useState(null);
  const [bgCounter, setBgCounter] = useState(null);
  const {
    showCart,
    setShowCart,
    setBgCart,
    userAccount,
    currentAccount,
    setUserAccount,
    setCounters,
    handleDeleteCart,
    handleWishlist,
    setSize,setBgCarts
  } = useDataContext();
  const delivery = 1.25;
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const storeBag = userIndex?.storeBags || [];
    setData(storeBag);

    let totalPrice = 0;
    let totalDiscountAmount = 0;

    storeBag.forEach((item) => {
      if (!item || !item.product_price) return;

      const pricePerItem = parseFloat(item.product_price.replace("$", ""));
      const quantity = item.counter || 1;
      const discountRat =
        parseFloat(item.discount?.replace("%", "")) / 100 || 0;

      const itemTotal = pricePerItem * quantity;
      totalPrice += itemTotal;

      const discountAmount = itemTotal * discountRat;
      totalDiscountAmount += discountAmount;
    });
    const positiveValue = Math.abs(totalDiscountAmount);
    const priceAfterDiscount = totalPrice - positiveValue;
    const deliveryFee = totalPrice >= 50 ? 0 : delivery;

    const amountPayment = priceAfterDiscount + deliveryFee;

    const khmerMoneyRaw = Math.round(amountPayment * 4000);
    const KHR = new Intl.NumberFormat("km-KH").format(khmerMoneyRaw) + "៛";

    setTotal(priceAfterDiscount.toFixed(2));
    setSaveMoney(positiveValue.toFixed(2));
    setAmountPayment(amountPayment.toFixed(2));
    setKHRTotal(KHR);
  }, [userAccount]);
  const moreCounter = Array.from({ length: 100 }, (_, i) => i + 1);
  const originalSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  function handleRenewCounter(newCounter, id) {
    setCounters((prev) => ({
      ...prev,
      [id]: newCounter,
    }));
    const updateAccount = [...userAccount];
    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );
    if (userIndex !== -1) {
      const updateUser = { ...updateAccount[userIndex] };
      updateUser.storeBags = updateUser.storeBags.map((render) =>
        render.id === id
          ? {
              ...render,
              counter: newCounter,
              totalPrice:
                newCounter *
                parseFloat(String(render.product_price).replace("$", "")),
            }
          : render
      );
      updateAccount[userIndex] = updateUser;
      setUserAccount(updateAccount);
    }
  }
  function handleResize(newSize, id) {
    const updateAccount = [...userAccount];
    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );
    if (userIndex !== -1) {
      const updateUser = { ...updateAccount[userIndex] };
      updateUser.storeBags = updateUser.storeBags.map((render) =>
        render.id === id
          ? {
              ...render,
              sizes: newSize,
            }
          : render
      );
      updateAccount[userIndex] = updateUser;
      setUserAccount(updateAccount);
    }
  }
  return {
    data,
    total,
    amountPayment,
    saveMoney,
    KHRTotal,
    bgCounter,
    setBgCart,
    setBgCounter,
    showCart,
    setShowCart,
    handleDeleteCart,
    handleWishlist,
    moreCounter,
    handleRenewCounter,
    delivery,
    originalSizes,
    setSize,handleResize,setBgCarts
  };
}
export { useCart };
