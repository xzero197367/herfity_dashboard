import BarChart from "../charts/bar_chart";
import { CardLayout } from "./card_layout";

export function SummaryCard() {
  return (
    <CardLayout
      icon={<h1 className="font-semibold text-xl">Marketting</h1>}
      menu={[]}
      view={
        <div className="h-[350px]">
          <BarChart />
        </div>
      }
    />
  );
}
