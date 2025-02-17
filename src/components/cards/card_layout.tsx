import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
export type MenuType = {
  title: string;
  value: string;
  profit: string;
};

export function CardLayout({
  icon,
  menu,
  view,
  className,
  textColor,
  showCompo = true,
  status = "good",
}: {
  icon: React.ReactNode;
  menu: MenuType[];
  view?: React.ReactNode;
  className?: string;
  textColor?: string;
  showCompo?: boolean;
  status?: "good" | "bad";
}) {
  return (
    <Card
      className={`flex flex-col gap-2 min-w-[350px] py-2 px-5 h-full justify-between ${className}`}
    >
      <div className="flex flex-row justify-between">
        {icon}
        {showCompo && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="flex flex-row gap-1 ">
                <ChevronDown />
                <span>This week</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>fdjsafkljdsakl</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      <div
        className={
          "flex flex-wrap gap-2 justify-between"
          //     clsx(
          //   `grid  gap-2${
          //     menu?.length > 0 ? `grid-cols-${menu?.length}` : "grid-cols-3"
          //   }`
          // )
        }
      >
        {menu?.map((m, i) => (
          <Item
            key={m.title + i}
            title={m.title}
            value={m.value}
            profit={m.profit}
            textColor={textColor}
            status={status}
          />
        ))}
      </div>
      {view}
    </Card>
  );
}

function Item({
  title,
  value,
  profit,
  textColor,
  status = "good",
}: {
  title: string;
  value: string;
  profit: string;
  textColor?: string;
  status?: "good" | "bad";
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className={`text-lg ${textColor ? textColor : "text-gray-500"}`}>
        {title}
      </span>
      <div className="flex flex-row gap-2">
        <span className="font-bold text-lg">{value}</span>
        <span
          className={`${
            textColor
              ? textColor
              : status == "good"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {profit}
        </span>
      </div>
    </div>
  );
}
