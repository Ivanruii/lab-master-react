import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterComponent } from "./core/router/router.component";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterComponent />
    </QueryClientProvider>
  );
};
