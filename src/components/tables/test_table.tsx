import { ColumnDef } from "@tanstack/react-table";
import { MainTable } from "./main_table/main_table";
import { createSortableMainTableColumn } from "./main_table/main_table_column";
import { createSelectColumn } from "./main_table/main_table_select_column";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
};

const data: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
  },
  // Add more data as needed
];

const columns: ColumnDef<User>[] = [
   createSelectColumn<User>(),
   createSortableMainTableColumn<User>("Name", "name"),
   createSortableMainTableColumn<User>("Email", "email"),
   createSortableMainTableColumn<User>("Role", "role"),
   createSortableMainTableColumn<User>("Status", "status"),
];

export function TestTable() {
  return <MainTable title="Orders" data={data} columns={columns} />;
}
