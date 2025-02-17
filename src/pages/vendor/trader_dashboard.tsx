import { AdminDashboard } from "../admin/admin_dashboard";
import TraderLayout from "@/routes/trader_layout";

const TraderDashboard = () => {
  return (
    <TraderLayout>
      <AdminDashboard showSidebar={false} />
    </TraderLayout>
  );
};

export default TraderDashboard;
