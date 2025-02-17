import { CardLayout } from "./card_layout";
import DoughnutChart from "../charts/doughnut_chart";

export function MarketingCard() {
  return (
    <CardLayout
      icon={<h1 className="font-semibold text-xl">Marketting</h1>}
      menu={[]}
      view={
        <div className="h-[350px]">
          <DoughnutChart />
        </div>
      }
    />
  );
}
