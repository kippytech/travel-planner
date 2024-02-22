import Sidebar from "@/components/admin/sidebar/Sidebar";
import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-[#f5f5fe] flex">
      <Sidebar />
      <section className="flex-1 flex-col flex">
        <div className="h-48 bg-[#0E1428] text-white flex justify-center flex-col px-10 gap-3">
          <h1 className="text-5xl">Dashboard</h1>
          <p>The scraping is powered by Daggy.</p>
        </div>
        {children}
      </section>
    </section>
  );
}

export default AdminLayout;
