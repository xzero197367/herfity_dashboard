import { ShoppingCart } from "lucide-react";
import { CardLayout } from "./card_layout";
const menu = [
  {
    title: "Abandoned Cart",
    value: "20",
    profit: "+0.00%",
  },
  {
    title: "Customers",
    value: "30",
    profit: "",
  },
];

export function ShoppingCard() {
  return (
    <CardLayout
      icon={
        <ShoppingCart className="h-10 w-10 bg-pink-100 text-black p-2 rounded" />
      }
      menu={menu}
    />
  );
}
