import { useState } from "react";

function usePurchased({ userAccount, setUserAccount, currentAccount, setCounters }) {
  const [purchasing, setPurchasing] = useState([]);
  const [detail, setDetail] = useState(false);
  const [activeLinkAcc, setActiveLinkAcc] = useState(0);
  const [showHidden, setShowHidden] = useState(false);
  function handleClearBagsStorePurchased() {
    const now = new Date();
    const dateTime = now.toLocaleString("en-US", {
      timeZone: "Asia/Phnom_Penh",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );

    if (userIndex === -1) return;

    const user = userAccount[userIndex];
    const bags = user.storeBags || [];

    const storePurchased = bags.map((item) => ({
      ...item,
      date: dateTime,
    }));

    const updateAccount = [...userAccount];
    updateAccount[userIndex] = {
      ...user,
      storeBags: [],
      storepurchased: [...(user.storepurchased || []), ...storePurchased],
    };

    setUserAccount(updateAccount);
    setCounters({});
  }
 
  return {
    purchasing,
    setPurchasing,
    handleClearBagsStorePurchased,
    detail,
    setDetail,
    showHidden,
    setShowHidden,activeLinkAcc, setActiveLinkAcc
  };
}

export { usePurchased };
