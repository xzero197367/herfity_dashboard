// src/layouts/AdminLayout.tsx
import React from "react";
import { Sidebar } from "../components/sidebar";
import { Topbar } from "../components/topbar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-neutral-100">
      <Sidebar role="admin" />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
