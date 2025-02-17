import { CustomerCard } from "@/components/cards/customer_card";
import AdminLayout from "@/routes/admin_layout";

// type Props = {};

const AdminCustomers = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-2">
        <CustomerCard />

        {/* customer table */}
      </div>
    </AdminLayout>
  );
};

export default AdminCustomers;
