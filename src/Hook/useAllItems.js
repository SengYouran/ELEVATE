import {
  product_Home,
  product_Drop,
  product_Exclusive,
  product_Smart,
} from "../Data/home.js";
import { product_Women } from "../Data/women";
import product_Men from "../Data/men";
function useAllItems() {
  const array_Allitem = [
    ...product_Home,
    ...product_Drop,
    ...product_Women,
    ...product_Men,
    ...product_Exclusive,
    ...product_Smart,
  ];
  const new_array_item = Array.from(
    new Map(array_Allitem.map((item) => [item.code, item])).values()
  );
  return { new_array_item };
}
export { useAllItems };
