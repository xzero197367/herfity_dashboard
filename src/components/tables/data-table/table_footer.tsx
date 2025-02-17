import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";

interface TableFooterProps<TData> {
  table: Table<TData>;
  pageSizeOptions?: number[];
}
export function TableFooter<TData>({
  table,
  pageSizeOptions,
}: TableFooterProps<TData>) {
  return (
    <div className="flex items-center justify-between space-x-2 py-4">
      <div className="flex items-center gap-2">
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className="h-8 w-16 rounded-md border border-input bg-background px-2"
        >
          {pageSizeOptions?.map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <p className="text-sm text-muted-foreground">Items per page</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
