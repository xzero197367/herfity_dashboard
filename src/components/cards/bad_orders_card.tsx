import { CardLayout } from "./card_layout";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const menu = [
  {
    title: "Canceled",
    value: "0",
    profit: "-20%",
  },
  {
    title: "Returned",
    value: "0",
    profit: "",
  },
  {
    title: "Damaged",
    value: "0",
    profit: "",
  },
];

export function BadOrdersCard() {
  return (
    <CardLayout
      icon={
        <HiOutlineShoppingBag className="h-10 w-10 bg-pink-100 text-black p-2 rounded" />
      }
      menu={menu}
      status="bad"
    />
  );
}
