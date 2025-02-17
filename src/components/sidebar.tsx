import { useSidebar } from "@/context/sidebar_context";
import { Menu } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuUsers } from "react-icons/lu";
import { MdOutlineInventory2 } from "react-icons/md";
import { CiBadgeDollar, CiLogout, CiSettings } from "react-icons/ci";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link, useLocation } from "@tanstack/react-router";

const adminMenu = [
  {
    img: "/public/images/Category.png",
    icon: BiSolidCategory,
    title: "Dashboard",
    href: "/admin",
  },
  {
    img: "/public/images/Bag.png",
    icon: HiOutlineShoppingBag,
    title: "Orders",
    href: "/admin/orders",
  },
  {
    img: "/public/images/User.png",
    icon: LuUsers,
    title: "Customers",
    href: "/admin/customers",
  },
  {
    img: "/public/images/Folder.png",
    icon: MdOutlineInventory2,
    title: "Inventory",
    href: "/admin/inventory",
  },
  {
    img: "/public/images/traders.png",
    icon: CiBadgeDollar,
    title: "Traders",
    href: "/admin/traders",
  },
  {
    img: "/public/images/Setting.png",
    icon: CiSettings,
    title: "Settings",
    href: "/admin/settings",
  },
];

const traderMenu = [
  {
    img: "/public/images/Category.png",
    icon: BiSolidCategory,
    title: "Dashboard",
    href: "/trader",
  },
  {
    img: "/public/images/Bag.png",
    icon: HiOutlineShoppingBag,
    title: "Orders",
    href: "/trader/orders",
  },
  {
    img: "/public/images/Folder.png",
    icon: MdOutlineInventory2,
    title: "Inventory",
    href: "/trader/inventory",
  },
  {
    img: "/public/images/Setting.png",
    icon: CiSettings,
    title: "Settings",
    href: "/trader/settings",
  },
];

export function Sidebar({ role }: { role: "admin" | "trader" }) {
  const { isOpen, toggle } = useSidebar();
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location?.pathname);
  }, [location?.pathname]);

  return (
    <Card
      className={`${
        isOpen ? "w-60" : "w-20"
      } h-screen transition-all me-5 duration-700 ps-2 shadow shadow-gray-500 bg-neutral-100 flex flex-col gap-1 overflow-x-visible`}
    >
      <div className="flex flex-row justify-between align-middle mt-5 mb-10 relative">
        <div className="flex flex-row align-middle gap-1 mx-auto">
          <img src="/public/images/main_logo.png" />
          {isOpen && <span className="my-auto font-bold text-xl">Metrix</span>}
        </div>

        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => toggle()}
          className={`${"absolute end-[-30px]  top-auto bottom-auto z-10 p-0"}`}
        >
          <Menu className="m-0" />
        </Button>
      </div>

      <TooltipProvider>
        <div className="flex flex-col gap-2 px-4">
          {(role == "admin" ? adminMenu : traderMenu)?.map((a, i) => (
            <Tooltip key={a.title + i}>
              <Link
                to={a.href}
                onChange={(e) => {
                  console.log(e);
                }}
                className={`flex flex-row gap-3 ${
                  currentPage == a.href ? "bg-blue-500 text-white" : ""
                } hover:bg-blue-500 hover:text-white transition duration-500 p-2 rounded cursor-pointer`}
              >
                <TooltipTrigger>
                  <a.icon className="h-5 w-5 my-auto" />
                </TooltipTrigger>
                {isOpen && <span>{a.title}</span>}
              </Link>

              <TooltipContent>{a.title}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

      <div className="flex-1"></div>

      <Link to={"/login"} className="w-full">
        <Button
          className="flex flex-row w-full gap-4 px-4 m-2 text-red-500 hover:bg-red-600 hover:text-white"
          variant={"secondary"}
        >
          <CiLogout />
          {isOpen && <span>Logout</span>}
        </Button>
      </Link>
    </Card>
  );
}
