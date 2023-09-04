"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
function ReactQuery({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQuery;
