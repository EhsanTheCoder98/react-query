import React from 'react';
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Homepage from './components/Homepage';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;