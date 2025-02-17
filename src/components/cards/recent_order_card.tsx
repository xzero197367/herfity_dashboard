import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Define order type
type Order = {
  id: number;
  name: string;
  price: string;
  quantity: number;
  date: string;
  status: "Pending" | "Completed";
  image: string;
};

// Order list data
const orders: Order[] = [
  {
    id: 1,
    name: "Peace lily",
    price: "$730,000.00",
    quantity: 1,
    date: "12 Sept 2022",
    status: "Pending",
    image: "/images/peace-lily.png", // Replace with actual image path
  },
  {
    id: 2,
    name: "Peace lily",
    price: "$730,000.00",
    quantity: 1,
    date: "12 Sept 2022",
    status: "Completed",
    image: "/images/coins.png",
  },
  {
    id: 3,
    name: "Peace lily",
    price: "$730,000.00",
    quantity: 1,
    date: "12 Sept 2022",
    status: "Pending",
    image: "/images/peace-lily.png",
  },
  {
    id: 4,
    name: "Peace lily",
    price: "$730,000.00",
    quantity: 1,
    date: "12 Sept 2022",
    status: "Completed",
    image: "/images/peace-lily.png",
  },
  {
    id: 5,
    name: "Peace lily",
    price: "$730,000.00",
    quantity: 1,
    date: "12 Sept 2022",
    status: "Completed",
    image: "/images/peace-lily.png",
  },
];

const RecentOrdersCard: React.FC = () => {
  return (
    <Card className="p-4 w-full max-w-md bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <CardContent>
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{order.name}</p>
                  <p className="text-sm font-semibold">
                    {order.price} × {order.quantity}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">{order.date}</p>
                <Badge
                  className={cn(
                    "px-2 py-1 text-xs rounded-lg",
                    order.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  )}
                >
                  {order.status}
                </Badge>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentOrdersCard;
