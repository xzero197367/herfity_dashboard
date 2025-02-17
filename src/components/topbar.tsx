import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Home } from "lucide-react";
import { IoNotifications } from "react-icons/io5";
import { Button } from "./ui/button";
export function Topbar() {
  return (
    <div className="flex flex-col gap-2 px-5 pt-1 w-full">
      <div className="flex flex-row justify-between w-full align-middle">
        <span className="text-xl font-bold my-auto">Dashboard</span>

        <div className="flex flex-row gap-1 align-middle py-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"ghost"}
                className="flex flex-row gap-1 bg-pink-100"
              >
                <ChevronDown />
                <span>Handmande</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>fdjsafkljdsakl</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <IoNotifications className="h-6 w-6 my-auto text-blue-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>fdjsafkljdsakl</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                src="/public/images/main_logo.png"
                className="h-10 w-10 rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>fdjsafkljdsakl</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-row gap-1 border-t-2 border-gray p-2">
        <Home className="text-blue-400 h-4 w-4" />
      </div>
    </div>
  );
}
