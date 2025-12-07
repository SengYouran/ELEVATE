import React, { useEffect, useState } from "react";

function ToTop() {
  const Scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      {show && (
        <div
          className="fixed bottom-20 right-6 z-80 flex flex-col justify-center items-center cursor-pointer"
          onClick={Scroll}
        >
          <div className="flex flex-col">
            <i className="fa-solid fa-angle-up text-[13px] custom-anime"></i>
            <i className="fa-solid fa-angle-up text-[13px] custom-hiddenPopUp"></i>
          </div>
          <div className="border border-black py-1 px-2 h-10 rounded-2xl">
            <i className="fa-solid fa-ellipsis-vertical custom-dots"></i>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ToTop;
