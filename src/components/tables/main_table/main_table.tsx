import { Card } from "@/components/ui/card";
import { MainTableHeader } from "./table_header";
import { MainTableBody } from "./main_table_body";
import { ColumnDef, getCoreRowModel, getFilteredRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import React from "react";

interface MainTableProps<T> {
    title?: string,
    data: T[],
    columns: ColumnDef<T>[]
}
export function MainTable<T>({title, data, columns}: MainTableProps<T>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        onRowSelectionChange: setRowSelection,
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            rowSelection
        },
    })

    return(
        <Card>
            <MainTableHeader title={title} table={table}/>
            <MainTableBody table={table} columns={columns}/>
        </Card>
    )
}