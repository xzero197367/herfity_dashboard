import { CustomerCard } from "@/components/cards/customer_card";
import { OrdersCard } from "@/components/cards/order_card";
import { SalesCard } from "@/components/cards/sales_card";
import { MarketingCard } from "@/components/cards/marking_card";
import { InventoryCard } from "@/components/cards/inventory_card";
import { ShoppingCard } from "@/components/cards/shopping_card";
import { SummaryCard } from "@/components/cards/summary_card";
import RecentOrdersCard from "@/components/cards/recent_order_card";
import AdminLayout from "@/routes/admin_layout";

export const AdminDashboard = ({
  showSidebar = true,
}: {
  showSidebar?: boolean;
}) => {
  if (showSidebar) {
    return (
      <AdminLayout>
        <AdminDashboardInit />
      </AdminLayout>
    );
  }
  return <AdminDashboardInit />;
};

function AdminDashboardInit() {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
        <SalesCard />
        <CustomerCard />
        <OrdersCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:col-span-2 col-span-1">
          <MarketingCard />
          <div className="flex flex-col gap-2">
            <InventoryCard />
            <ShoppingCard />
          </div>

          <div className="col-span-1 md:col-span-2">
            <SummaryCard />
          </div>
        </div>

        <RecentOrdersCard />
      </div>
    </div>
  );
}
