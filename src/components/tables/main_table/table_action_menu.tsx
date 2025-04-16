import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {  ArrowDownIcon } from "lucide-react";

export function TableActionTable() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="w-40 flex flex-row justify-evenly"
      >
        <Button variant={"outline"}>
          Bulk <ArrowDownIcon className="h-4 w-4"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>Archive</DropdownMenuItem>
        <DropdownMenuItem>Share</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
