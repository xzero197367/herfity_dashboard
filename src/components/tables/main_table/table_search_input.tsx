import { Table } from "@tanstack/react-table";
import { Search } from "lucide-react";

interface TableSearchInputProps<T> {
  table: Table<T>;
  searchColName: string;
  placeholder?: string;
}

export function TableSearchInput<T>({
  table,
  searchColName,
  placeholder= "Search...",
}: TableSearchInputProps<T>) {
  const search = table.getColumn(searchColName);

  return (
    <div className="flex flex-row gap-1 border border-gray-300 rounded-lg p-1">
      <Search className="text-gray-200" />
      <input type="text" className="outline-none" placeholder={placeholder} 
      value={search?.getFilterValue() as string ?? ""}
        onChange={(e)=>{
            search?.setFilterValue(e.target.value);
        }}
      />
    </div>
  );
}
