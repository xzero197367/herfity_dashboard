"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

// Helper function to create sortable column header
export function createSortableColumn<TData, TValue>(
  header: string,
  accessorKey: string
): ColumnDef<TData, TValue> {
  return {
    accessorKey,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {header}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  };
}

// Helper function to create a basic column
export function createColumn<TData, TValue>(
  header: string,
  accessorKey: string
): ColumnDef<TData, TValue> {
  return {
    accessorKey,
    header,
  };
}
