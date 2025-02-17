import { CardLayout } from "./card_layout";
import { MdOutlineInventory2 } from "react-icons/md";

const menu = [
  {
    title: "All Products",
    value: "0",
    profit: "",
  },
  {
    title: "Active",
    value: "0",
    profit: "+24%",
  },
];

export function InventoryCard() {
  return (
    <CardLayout
      icon={
        <MdOutlineInventory2 className="h-10 w-10 bg-pink-100 text-black p-2 rounded" />
      }
      menu={menu}
      className={"bg-blue-500 text-white"}
      textColor="text-white"
      showCompo={false}
    />
  );
}
