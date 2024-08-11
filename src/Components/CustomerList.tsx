import React from 'react';
import CustomerCard from './CustomerCard';
import '../index.css'; // Import the global CSS file

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
  return (
    <div className="left-panel">
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
