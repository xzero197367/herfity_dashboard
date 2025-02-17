import TraderLayout from "@/routes/trader_layout";
import { AdminOrders } from "../admin/admin_orders";

const TraderOrders = () => {
  return (
    <TraderLayout>
      <AdminOrders showSidebar={false} />
    </TraderLayout>
  );
};

export default TraderOrders;
