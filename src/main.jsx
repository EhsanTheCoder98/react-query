import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      gcTime:100000,
      staleTime:100000,
      refetchOnMount:false,
      refetchOnWindowFocus:false,
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}> 
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
