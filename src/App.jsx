import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Feature,
  Documentation,
  Accessories,
  ProductDetail,
} from "./Page";

// Women Pages
import {
  WomenAccessories,
  Jackets,
  New_women_in,
  Women_Belts,
  Women_bags,
  Women_bows,
  Women_caps_hats,
  Women_collection,
  Women_denim,
  Women_loafers,
  Women_modern_academy,
  Women_pilates_princess_collection,
  Women_sandals,
  Women_sneakers,
  Women_snock,
  Women_blazers,
  Women_blouses,
  Women_bras,
  Women_cardigans,
  Women_clothe,
  Women_dressed,
  Women_hoodies_sweatshirts,
  Women_jeans,
  Women_jumpsuits,
  Women_new_in_bottom,
  Women_new_in_casual,
  Women_new_in_dress,
  Women_new_in_lifestyle,
  Women_new_in_top,
  Women_polo_shirts,
  Women_shirts,
  Women_shoes,
  Women_shorts,
  Women_skirts,
  Women_tops,
  Women_trousers,
  Women_tshirts,
  Women_vets,
} from "./Page/Women";

// Men Pages
import {
  MenAccessories,
  Caps_Hats,
  Jean,
  Men_Jackets,
  Men_Shorts,
  Men_Tshirts,
  Men_bags,
  Men_balzers,
  Men_Men_boxer,
  Men_cardigans,
  Men_clothing,
  Men_collection,
  Men_denim,
  Men_hoodie_sweatshirts,
  Men_polo_shirts,
  Men_sandals,
  Men_sharkers,
  Men_shirts,
  Men_trousers,
  Men_vest,
  Modern_academy,
  New_Men_In,
  New_men_in_bottom,
  New_men_in_casual,
  Men_new_in_lifestyle,
  Men_new_in_top,
  Men_Socks,
} from "./Page/Men";
import Men_shoes from "./Page/Men/Men_shoes";
import Rootlayout from "./root/Rootlayout";
import Men from "./Home/Men";
import Women from "./Home/Women";
import Wishlist from "./Page/Wishlist";
import Checkout from "./Checkouts/Checkout";
import Profile from "./UserInfomation/Profile";
import AccountLayout from "./root/AccountLayout";
import Password from "./UserInfomation/Password";
import AddressBook from "./UserInfomation/AddressBook";
import Order_Return from "./UserInfomation/Order_Return";
import DetailPurchased from "./UserInfomation/DetailPurchased";
import Gift_Card from "./UserInfomation/Gift_Card";
import FAQsGuides from "./UserInfomation/FAQsGuides";
import Membership_Benifts from "./UserInfomation/Membership_Benifts";
import Point from "./UserInfomation/Point";
import ShowSearch from "./Page/ShowSearch";
import About_us from "./AboutCompany/About_us";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "features", element: <Feature /> },
      { path: "docs", element: <Documentation /> },
      { path: "accessories", element: <Accessories /> },
      { path: "women", element: <Women /> },
      { path: "men", element: <Men /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "checkouts", element: <Checkout /> },
      { path: "search", element: <ShowSearch /> },
      { path: "about-us", element: <About_us /> },
      // Women Routes (prefix all with "women-")
      { path: "women-accessories", element: <WomenAccessories /> },
      { path: "women-jackets", element: <Jackets /> },
      { path: "women-new-in", element: <New_women_in /> },
      { path: "women-belts", element: <Women_Belts /> },
      { path: "women-bags", element: <Women_bags /> },
      { path: "women-bows", element: <Women_bows /> },
      { path: "women-caps-and-hats", element: <Women_caps_hats /> },
      { path: "women-shop-by-collection", element: <Women_collection /> },
      { path: "women-denim", element: <Women_denim /> },
      { path: "women-loafers", element: <Women_loafers /> },
      { path: "women-post-modern-academy", element: <Women_modern_academy /> },
      {
        path: "pilates-princess-collection",
        element: <Women_pilates_princess_collection />,
      },
      { path: "women-sandals", element: <Women_sandals /> },
      { path: "women-sneakers", element: <Women_sneakers /> },
      { path: "women-socks", element: <Women_snock /> },
      { path: "women-blazers", element: <Women_blazers /> },
      { path: "women-blouses", element: <Women_blouses /> },
      { path: "women-cardigan", element: <Women_cardigans /> },
      { path: "women-clothing", element: <Women_clothe /> },
      { path: "women-dresses", element: <Women_dressed /> },
      {
        path: "women-hoodies-sweatshirts",
        element: <Women_hoodies_sweatshirts />,
      },
      { path: "women-jeans", element: <Women_jeans /> },
      { path: "women-new-in-bottom", element: <Women_new_in_bottom /> },
      { path: "women-new-in-casual", element: <Women_new_in_casual /> },
      { path: "women-new-in-dress", element: <Women_new_in_dress /> },
      { path: "women-new-in-lifestyle", element: <Women_new_in_lifestyle /> },
      { path: "women-new-in-top", element: <Women_new_in_top /> },
      { path: "women-polo-shirts", element: <Women_polo_shirts /> },
      { path: "women-shirts", element: <Women_shirts /> },
      { path: "women-shoes", element: <Women_shoes /> },
      { path: "women-shorts", element: <Women_shorts /> },
      { path: "women-skirts", element: <Women_skirts /> },
      { path: "women-tops", element: <Women_tops /> },
      { path: "women-trousers", element: <Women_trousers /> },
      { path: "women-t-shirts", element: <Women_tshirts /> },
      { path: "women-vests", element: <Women_vets /> },

      // Men Routes (prefix all with "men-")
      { path: "men-accessories", element: <MenAccessories /> },
      { path: "men-caps-hats", element: <Caps_Hats /> },
      { path: "men-jeans", element: <Jean /> },
      { path: "men-jackets", element: <Men_Jackets /> },
      { path: "men-shorts", element: <Men_Shorts /> },
      { path: "men-t-shirts", element: <Men_Tshirts /> },
      { path: "men-bags", element: <Men_bags /> },
      { path: "men-blazers", element: <Men_balzers /> },
      { path: "men-boxers", element: <Men_Men_boxer /> },
      { path: "men-cardigans", element: <Men_cardigans /> },
      { path: "men-clothing", element: <Men_clothing /> },
      { path: "men-shop-by-collection", element: <Men_collection /> },
      { path: "men-denim", element: <Men_denim /> },
      { path: "men-hoodies-sweatshirts", element: <Men_hoodie_sweatshirts /> },
      { path: "men-polo-shirts", element: <Men_polo_shirts /> },
      { path: "men-sandals", element: <Men_sandals /> },
      { path: "men-sneakers", element: <Men_sharkers /> },
      { path: "men-shirts", element: <Men_shirts /> },
      { path: "men-trousers", element: <Men_trousers /> },
      { path: "men-vests", element: <Men_vest /> },
      { path: "men-post-modern-academy", element: <Modern_academy /> },
      { path: "men-new-in", element: <New_Men_In /> },
      { path: "men-new-in-bottom", element: <New_men_in_bottom /> },
      { path: "men-new-in-casual", element: <New_men_in_casual /> },
      { path: "men-new-in-lifestyle", element: <Men_new_in_lifestyle /> },
      { path: "men-new-in-top", element: <Men_new_in_top /> },
      { path: "men-socks", element: <Men_Socks /> },
      { path: "men-shoes", element: <Men_shoes /> },
      {
        element: <AccountLayout />,
        children: [
          { path: "editprofile", element: <Profile /> },
          { path: "password", element: <Password /> },
          { path: "addressbook", element: <AddressBook /> },
          { path: "orders", element: <Order_Return /> },
          { path: "orderdetail", element: <DetailPurchased /> },
          { path: "giftcard", element: <Gift_Card /> },
          { path: "faqguides", element: <FAQsGuides /> },
          { path: "membership", element: <Membership_Benifts /> },
          { path: "points", element: <Point /> },
        ],
      },
      // ⭐⭐⭐ MUST BE LAST ⭐⭐⭐
      { path: ":type/:slug", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
