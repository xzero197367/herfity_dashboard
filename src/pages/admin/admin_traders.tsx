import { CustomerCard } from "@/components/cards/customer_card";
import AdminLayout from "@/routes/admin_layout";

const AdminTrader = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-2">
        {/* header with add trader button and modal */}

        <CustomerCard />
      </div>
    </AdminLayout>
  );
};

export default AdminTrader;
