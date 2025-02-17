import { CardLayout } from "./card_layout";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const menu = [
  {
    title: "All Orders",
    value: "0",
    profit: "",
  },
  {
    title: "Pending",
    value: "0",
    profit: "",
  },
  {
    title: "Compoleted",
    value: "0",
    profit: "",
  },
];

export function OrdersCard() {
  return (
    <CardLayout
      icon={
        <HiOutlineShoppingBag className="h-10 w-10 bg-pink-100 text-black p-2 rounded" />
      }
      menu={menu}
    />
  );
}
