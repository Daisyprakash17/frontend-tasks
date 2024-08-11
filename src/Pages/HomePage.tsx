import React, { useState, useEffect } from 'react';
import users from '../Data/users.json';
import CustomerDetails from '../Components/CustomerDetails';
import CustomerList from '../Components/CustomerList';
import '../index.css';

type User = {
  id: number;
  name: string;
  title: string;
  details: string;
};

export default function HomePage() {
  const [selectedCustomer, setSelectedCustomer] = useState<User | null>(null);

  useEffect(() => {
    if (users.length > 0) {
      setSelectedCustomer(users[0]);
    }
  }, []);

  return (
    <div>
      <div className="centered-header">
        <h1>Customers</h1>
      </div>
      <div className="panels-container">
        <CustomerList
          users={users}
          selectedCustomer={selectedCustomer}
          setSelectedCustomer={setSelectedCustomer}
        />
        <CustomerDetails selectedCustomer={selectedCustomer} />
      </div>
    </div>
  );
}
