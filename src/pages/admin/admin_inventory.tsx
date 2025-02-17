import { InventoryCard } from "@/components/cards/inventory_card";
import { ProductStatusCard } from "@/components/cards/product_status_card";
import AdminLayout from "@/routes/admin_layout";

const AdminInventory = ({ showSidebar = true }: { showSidebar?: boolean }) => {
  if (showSidebar) {
    return (
      <AdminLayout>
        <InitAdminInventory />
      </AdminLayout>
    );
  }
  return <InitAdminInventory />;
};

function InitAdminInventory() {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <InventoryCard />
        <ProductStatusCard />
      </div>
    </div>
  );
}

export default AdminInventory;
