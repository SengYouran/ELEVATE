import { useState } from "react";

function useCheckouts({ currentAccount, setUserAccount, userAccount }) {
  const [deliveryAddress, setDeliveryAddress] = useState({
    fullName: "",
    telephone: "",
    currently: "",
    provinces: "",
    country: "Cambodia",
  });
  function handleSaveDiliveryAddress() {
    const userIndex = userAccount?.findIndex(
      (check) => check?.id === currentAccount?.id
    );
    if (
      !deliveryAddress?.fullName ||
      !deliveryAddress?.telephone ||
      !deliveryAddress?.currently ||
      !deliveryAddress?.provinces
    ) {
      alert("Please fill in all require fields");
      return;
    }
    if (userIndex !== -1) {
      const updatedAccount = [...userAccount];
      updatedAccount[userIndex] = {
        ...updatedAccount[userIndex],
        shippingAddress: deliveryAddress,
      };
      setUserAccount(updatedAccount);
    }
  }
  const deliveryAddressProvince = (province) => {
    setDeliveryAddress({ ...deliveryAddress, provinces: province }); // ✅ correct key
  };
  function handleDelivery(selectedDelivery) {
    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );
    if (userIndex !== -1) {
      const updatedAccount = [...userAccount];
      updatedAccount[userIndex] = {
        ...updatedAccount[userIndex],
        shippingDelivery: selectedDelivery,
      };
      setUserAccount(updatedAccount);
    }
  }
  function handleBanks(selectedBanks) {
    const userIndex = userAccount?.findIndex(
      (check) => check?.id === currentAccount?.id
    );
    if (userIndex !== -1) {
      const updatedAccount = [...userAccount];
      updatedAccount[userIndex] = {
        ...userAccount[userIndex],
        storeBanks: selectedBanks,
      };
      setUserAccount(updatedAccount);
    }
  }
  function handleContact(selectedContact) {
    const userIndex = userAccount?.findIndex(
      (check) => check?.id === currentAccount?.id
    );
    if (userIndex !== -1) {
      const updatedAccount = [...userAccount];
      updatedAccount[userIndex] = {
        ...userAccount[userIndex],
        storeContact: selectedContact,
      };
      setUserAccount(updatedAccount);
    }
  }
  return {
    deliveryAddress,
    setDeliveryAddress,
    handleSaveDiliveryAddress,
    deliveryAddressProvince,
    handleDelivery,
    handleContact,
    handleBanks,
  };
}
export { useCheckouts };
