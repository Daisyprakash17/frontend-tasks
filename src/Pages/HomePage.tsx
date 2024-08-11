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
    <div>
      <div style={{display:"flex",justifyContent:"center"}}>
  <h1 style={{display: "inline"}}>Customers</h1>
  </div>

      <div style={{ display: 'flex', height: '100vh', minWidth: '800px' }}>
        {/* Left side: Customer List */}
        <CustomerList users={users} selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer} />

        {/* Right side: Customer Details */}
        <CustomerDetails selectedCustomer={selectedCustomer} />
      </div>
    </div>
  );
}
