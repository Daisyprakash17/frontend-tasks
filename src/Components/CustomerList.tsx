import React from 'react';
import { User } from '../types/userType'; 
import CustomerCard from './CustomerCard';
import '../index.css';

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
