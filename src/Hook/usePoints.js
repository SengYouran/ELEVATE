import { useState, useEffect } from "react";

function usePoints({
  currentAccount,
  setUserAccount,
  userAccount,
  amountPayment,
}) {
  const [pointHistory, setPointHistory] = useState([]); // history of points earned
  const [userPoints, setUserPoints] = useState([]); // points of current user
  const currentUser = userAccount.find((acc) => acc.id === currentAccount.id);
  // 1️⃣ Load current user points
  useEffect(() => {
    const points = Array.isArray(currentUser?.point) ? currentUser.point : [];

    setUserPoints(points);
  }, [userAccount, currentAccount]);

  // ⭐ 2️⃣ Update total point when userPoints change
  useEffect(() => {
    const index = userAccount.findIndex((acc) => acc.id === currentAccount.id);
    if (index === -1) return;

    const updatedAccounts = [...userAccount];
    const user = { ...updatedAccounts[index] };

    const total = (user.point || []).reduce((sum, p) => sum + p.point, 0);

    // update only when changed
    if (user.totalpoint !== total) {
      user.totalpoint = total;
      updatedAccounts[index] = user;
      setUserAccount(updatedAccounts);
    }
  }, [userPoints, currentAccount.id]);
  useEffect(() => {
    // Update to this user account
    const index = userAccount.findIndex((acc) => acc.id === currentAccount.id);
    if (index !== -1) {
      const updatedAccounts = [...userAccount];
      const user = { ...updatedAccounts[index] };
      const oldPoint = currentUser?.point || [];
      user.point = [...pointHistory, ...oldPoint];

      updatedAccounts[index] = user;
      setUserAccount(updatedAccounts);
    }
  }, [pointHistory]);
  // ⭐ 3️⃣ Save new point from payment
  function handleSavePoint() {
    if (!amountPayment || amountPayment <= 0) return;

    // Rules: $10 = 1 point
    const newPoints = Math.floor(amountPayment / 10);
    if (newPoints <= 0) return;

    const now = new Date();
    const date = now.toLocaleDateString("en-GB"); // DD/MM/YYYY

    const newHistory = { date, point: newPoints };

    // Add new history
    setPointHistory((prev) => [newHistory, ...prev]);
  }

  // MUST RETURN SOMETHING — custom hooks must return values
  return {
    userPoints, // list of points history
    pointHistory, // newly added history inside this session
    handleSavePoint, // function to call
  };
}

export { usePoints };
