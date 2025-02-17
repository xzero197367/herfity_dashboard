import { LuUsers } from "react-icons/lu";
import { CardLayout } from "./card_layout";

const menu = [
  {
    title: "Customer",
    value: "0",
    profit: "+0.00%",
  },
  {
    title: "Traders",
    value: "0",
    profit: "+0.00%",
  },
  {
    title: "Active",
    value: "0",
    profit: "+0.00%",
  },
];

export function CustomerCard() {
  return (
    <CardLayout
      icon={
        <LuUsers className="h-10 w-10 bg-pink-100 text-black p-2 rounded" />
      }
      menu={menu}
    />
  );
}
