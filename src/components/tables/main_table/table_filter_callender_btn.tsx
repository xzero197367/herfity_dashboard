import { Button } from "@/components/ui/button";
import { CalendarCheck2Icon } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export function TableFilterCalenderButton() {
  const [show, setShow] = useState(false);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"}>
          <CalendarCheck2Icon className="text-gray-400" />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-4 space-y-3">
        <h1 className="text-l font-bold">By Date</h1>

        <div className="grid grid-cols-3 gap-2 py-3 border-b-2">
          <CheckboxDateFilter title="This Week" />
          <CheckboxDateFilter title="Last Week" />
          <CheckboxDateFilter title="This Month" />
          <CheckboxDateFilter title="Last Month" />
          <CheckboxDateFilter title="This Year" />
          <CheckboxDateFilter title="Last Year" />
        </div>

        <CheckboxDateFilter title="Date Range" onChange={(value) => {
          setShow(value)
        }} />

        {
          show && (
            <DateRangeInput onChange={(value) => {}} />
          )
        }

        <Button variant={"sky"} className="w-full">
          Filter
        </Button>
      </PopoverContent>
    </Popover>
  );
}

function CheckboxDateFilter({
  title,
  onChange = (value) => {},
}: {
  title: string;
  onChange?: (value: boolean) => void;
}) {
  return (
    <div className="space-x-2 align-top">
      <Checkbox
        id="home_delivery"
        onCheckedChange={(value) => {
          onChange(value as boolean);
        }}
        className="border-gray-600 data-[state=checked]:bg-sky-700 data-[state=checked]:border-sky-700"
      />
      <label htmlFor="home_delivery" className="text-gray-600">
        {title}
      </label>
    </div>
  );
}

function DateRangeInput({
  onChange = (value: string) => {},
}: {
  onChange?: (value: string) => void;
}) {
  return (
    <Tabs defaultValue="from">
      <TabsList className="w-full bg-transparent">
        <TabsTrigger className="w-full bg-neutral-200 data-[state=active]:bg-sky-700 text-sky-700 data-[state=active]:text-white" value="from">
          From
        </TabsTrigger>
        <TabsTrigger className="w-full bg-neutral-200 data-[state=active]:bg-sky-700 text-sky-700 data-[state=active]:text-white" value="to">
          To
        </TabsTrigger>
      </TabsList>
      <TabsContent value="from" >
        <Calendar mode="single" className="bg-neutral-200 mx-auto w-80"/>
      </TabsContent>
      <TabsContent value="to">
        <Calendar mode="single" className="bg-neutral-200 mx-auto w-80" />
      </TabsContent>
    </Tabs>
  );
}
