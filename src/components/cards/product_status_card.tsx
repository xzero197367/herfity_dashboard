import { LuUser } from "react-icons/lu";
import { CardLayout } from "./card_layout";

const menu = [
  {
    title: "Low Stock Alert",
    value: "0",
    profit: "-20%",
  },
  {
    title: "Expired",
    value: "2",
    profit: "",
  },
  {
    title: "1 Start Rating",
    value: "2",
    profit: "",
  },
];

export function ProductStatusCard() {
  return (
    <CardLayout
      icon={<LuUser className="h-10 w-10 bg-pink-100 text-black p-2 rounded" />}
      menu={menu}
      status="bad"
    />
  );
}
