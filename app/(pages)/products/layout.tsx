import React from "react";
import ProductSidebar from "./components/ProductSidebar";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sticky Left Sidebar */}
      <aside className="hidden lg:block w-64 sticky top-0 left-0 h-screen overflow-y-auto scrollbar-hide border-r border-muted bg-muted/20">
        <ProductSidebar />
      </aside>

      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
    </div>
  );
}
