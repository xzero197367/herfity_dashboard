"use client";

import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react" // icons

export function createSortableMainTableColumn<TData>(
  header: string,
  accessorKey: string
): ColumnDef<TData> {
  return {
    accessorKey,
    header: ({ column }) => {
      const isSorted = column.getIsSorted(); // ممكن يكون "asc" | "desc" | false

      return (
        <Button
          variant="ghost"
          className="m-0 p-0 w-full flex justify-start"
          onClick={() => column.toggleSorting(isSorted === "asc")}
        >
          {header}
          {isSorted === "asc" && <ArrowUp className="ml-2 h-4 w-4" />}
          {isSorted === "desc" && <ArrowDown className="ml-2 h-4 w-4" />}
          {!isSorted && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      );
    },
  };
}

// Helper function to create a basic column
export function createMainTableColumn<TData, TValue>(
  header: string,
  accessorKey: string
): ColumnDef<TData, TValue> {
  return {
    accessorKey,
    header,
  };
}
