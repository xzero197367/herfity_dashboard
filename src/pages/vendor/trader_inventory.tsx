import TraderLayout from "@/routes/trader_layout";
import AdminInventory from "../admin/admin_inventory";

const TraderInventory = () => {
  return (
    <TraderLayout>
      <AdminInventory showSidebar={false} />
    </TraderLayout>
  );
};

export default TraderInventory;
