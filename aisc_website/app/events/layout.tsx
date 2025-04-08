import React from "react";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 px-4 md:px-16 py-12 space-y-12">
      {children}
    </div>
  );
}
