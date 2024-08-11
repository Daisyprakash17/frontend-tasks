// src/Components/CustomerList.tsx

import React from 'react';
import CustomerCard from './CustomerCard'; // Adjusted path if needed

type User = {
  id: number;
  name: string;
  title: string;
  details: string;
};

type Props = {
  users: User[];
  selectedCustomer: User | null;
  setSelectedCustomer: (user: User) => void;
};

const CustomerList: React.FC<Props> = ({ users, selectedCustomer, setSelectedCustomer }) => {
  const leftPanelStyle: React.CSSProperties = {
    width: '30%',
    borderRight: '1px solid #ddd',
    padding: '20px',
    overflowY: 'auto',
    backgroundColor: '#f9f9f9',
    height: '100vh', // Ensure full height for scrolling
    scrollbarWidth: "thin", // For Firefox
    scrollbarColor: '#888 #f1f1f1', // For Firefox
  };

  return (
    <div style={leftPanelStyle}>
      {users.map((user: User) => (
        <CustomerCard
          key={user.id}
          user={user}
          isSelected={selectedCustomer?.id === user.id}
          onClick={() => setSelectedCustomer(user)}
        />
      ))}
    </div>
  );
};

export default CustomerList;
