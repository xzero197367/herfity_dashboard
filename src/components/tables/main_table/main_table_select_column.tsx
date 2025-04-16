import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"; 

export function createSelectColumn<T>(): ColumnDef<T> {
  return {
    id: "select", // لازم ID عشان مفيش accessorKey
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 10,
  };
}
