import { CardLayout } from "./card_layout";

const menu = [
  {
    title: "Sales",
    value: "$0.00",
    profit: "+0.00%",
  },
  {
    title: "Volume",
    value: "0",
    profit: "",
  },
];

export function SalesCard() {
  return (
    <CardLayout
      icon={
        <img
          src="/public/images/main_logo.png"
          className="h-10 w-10 rounded-full"
        />
      }
      menu={menu}
    />
  );
}
