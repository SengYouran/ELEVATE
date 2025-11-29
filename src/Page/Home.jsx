import React, { useEffect, useState } from "react";

import Banner from "../Home/Banner";
import Collection from "../Home/Collection";
import Vibes from "../Home/Vibes";
import Drop from "../Home/Drop";
import Exclusive from "../Home/Exclusive";
import Smart_Vibes from "../Home/Smart_Vibes";
import { useDataContext } from "../Context";

function Home() {
  const { userAccount, currentAccount, handleWishlist } = useDataContext();
  const [currentWishlistActive, setCurrentWishlistActive] = useState({});
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const wishlist = userIndex?.activeWishlist || {};
    setCurrentWishlistActive(wishlist);
  }, [userAccount, currentAccount]);
  return (
    <div className="flex flex-col gap-4">
      <Banner />
      <div className="flex flex-col gap-16 mx-4 xl:mx-32">
        <Collection />
        <Drop
          handleWishlist={handleWishlist}
          currentWishlistActive={currentWishlistActive}
        />
        <Vibes
          handleWishlist={handleWishlist}
          currentWishlistActive={currentWishlistActive}
        />
        <Exclusive
          handleWishlist={handleWishlist}
          currentWishlistActive={currentWishlistActive}
        />
        <Smart_Vibes
          handleWishlist={handleWishlist}
          currentWishlistActive={currentWishlistActive}
        />
      </div>
      <div className="my-4 bg-green-900 py-2">
        <h2 className="text-sx text-center text-white font-bold">
          Free delivery on order above 50$ spent
        </h2>
      </div>
    </div>
  );
}

export default Home;
