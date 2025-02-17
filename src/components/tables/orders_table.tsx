import { createSortableColumn, createColumn } from "./data-table/columns";
import { DataTable } from "./data-table/data_table";

// Example usage
type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
};

const columns = [
  createSortableColumn<User, string>("Name", "name"),
  createColumn<User, string>("Email", "email"),
  createSortableColumn<User, string>("Role", "role"),
  createColumn<User, string>("Status", "status"),
];

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

export function OrdersTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
      searchKey="name"
      pageSizeOptions={[5, 10, 20, 30]}
    />
  );
}
