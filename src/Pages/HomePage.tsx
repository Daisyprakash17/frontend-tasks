// src/Components/HomePage.tsx

import React, { useState } from 'react';
import users from '../Data/users.json';
import CustomerDetails from '../Components/CustomerDetails';
import CustomerList from '../Components/CustomerList';

type User = {
  id: number;
  name: string;
  title: string;
  details: string;
};

export default function HomePage() {
  const [selectedCustomer, setSelectedCustomer] = useState<User | null>(null);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left side: Customer List */}
      <CustomerList users={users} selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer} />

      {/* Right side: Customer Details */}
      <CustomerDetails selectedCustomer={selectedCustomer} />
    </div>
  );
}
