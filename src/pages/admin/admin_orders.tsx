import { BadOrdersCard } from "@/components/cards/bad_orders_card";
import { OrdersCard } from "@/components/cards/order_card";
import { ShoppingCard } from "@/components/cards/shopping_card";
import { OrdersTable } from "@/components/tables/orders_table";
import { TestTable } from "@/components/tables/test_table";
import AdminLayout from "@/routes/admin_layout";
export function AdminOrders({ showSidebar = true }: { showSidebar?: boolean }) {
  if (showSidebar) {
    return (
      <AdminLayout>
        <InitAdminOrders />
      </AdminLayout>
    );
  }
  return <InitAdminOrders />;
}

function InitAdminOrders() {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
        <OrdersCard />
        <BadOrdersCard />
        <ShoppingCard />
      </div>
      {/* <OrdersTable /> */}
      <TestTable />
    </div>
  );
}
