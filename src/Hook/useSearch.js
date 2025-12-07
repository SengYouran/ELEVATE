import { useEffect, useRef, useState } from "react";

function useSearch({ setSearch, setShowDataSearch, new_array_item }) {
  const [valueSearch, setValueSearch] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    handleSearchValue();
  }, [valueSearch]);

  function handleSearchValue() {
    const dataValue = valueSearch.toLowerCase();
    const dataMatched = new_array_item.filter((check) => {
      const matchedName = check.product_name.toLowerCase().includes(dataValue);
      const matchedCode = check.code.toLowerCase().includes(dataValue);
      return matchedName || matchedCode;
    });
    setCurrentData(dataMatched);
  }

  function handleSubmit(e) {
    if (e?.preventDefault) e.preventDefault(); // safe for both click & keyboard
    if (!valueSearch.trim()) return;
    setShowDataSearch(currentData);
    setCurrentValue(valueSearch);
    setSearch(false);
    setValueSearch("");
  }
  return {
    handleSubmit,
    handleSearchValue,
    valueSearch,
    setValueSearch,
    currentValue,
  };
}
export { useSearch };
