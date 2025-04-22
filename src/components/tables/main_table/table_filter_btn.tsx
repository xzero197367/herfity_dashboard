import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export function TableFilterButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"}>
          <Filter className="text-gray-400" />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-4 space-y-3">
        <h1 className="text-l font-bold">Filter</h1>

        <div className="text-gray-600">
          <h1 className="text-xs">Order Type</h1>
          <div className="flex flex-row justify-between">
            <div className="space-x-2 align-top">
              <Checkbox
                id="home_delivery"
                className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
              />
              <label htmlFor="home_delivery" className="text-gray-600">
                Home Delivery
              </label>
            </div>

            <div className="space-x-2 align-top">
              <Checkbox
                id="pick_up"
                className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
              />
              <label htmlFor="pick_up" className="text-gray-600">
                Pick Up
              </label>
            </div>

            <div className="h-4 border-t border-b"></div>
          </div>
        </div>

        <div>
          <label className="text-gray-600">Status</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a store" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="store1">All</SelectItem>
                <SelectItem value="store1">Store 1</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-gray-600">Customer</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a store" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Customer</SelectLabel>
                <SelectItem value="store1">All</SelectItem>
                <SelectItem value="store1">Store 1</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-gray-600">Amount</label>

          <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-row gap-2 justify-between ">
              <div className="space-y-2 align-top w-full">
                <label htmlFor="pick_up" className="text-gray-600 text-sm">
                  From
                </label>
                <Input
                  id="pick_up"
                  className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                />
              </div>
            </div>

            <div className="space-y-2 align-top w-full">
              <label htmlFor="pick_up" className="text-gray-600">
                To
              </label>
              <Input
                id="pick_up"
                className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
              />
            </div>
          </div>
        </div>

        <Button variant={"blue"} className="w-full">Filter</Button>
      </PopoverContent>
    </Popover>
  );
}
