
import { TableFilterButton } from "./table_filter_btn";
import { TableSearchInput } from "./table_search_input";
import { TableShareBtn } from "./table_share_btn";
import { TableActionTable } from "./table_action_menu";
import { Table } from "@tanstack/react-table";

interface MainTableHeaderProps<T> {
    title?: string,
    table: Table<T>,
}

export function MainTableHeader<T>({title, table}: MainTableHeaderProps<T>){

    return (
    <div className="flex flex-row justify-between px-2 py-4">
        <h1 className="text-xl my-auto font-bold ms-2">{title}</h1>
        <div className="flex flex-row gap-1 align-middle">
            <TableSearchInput table={table} searchColName="name" placeholder="Search by name"/>
            <TableFilterButton/>
            <TableShareBtn/>
            <TableActionTable/>
        </div>
    </div>
    )
}