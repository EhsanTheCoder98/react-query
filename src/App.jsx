import React from 'react';
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Homepage from './components/Homepage';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
    </QueryClientProvider>
  );
};

export default App;