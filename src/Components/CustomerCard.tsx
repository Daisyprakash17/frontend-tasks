import React from 'react';
import { User } from '../types/userType'; 
import '../index.css';

type Props = {
  user: User;
  isSelected: boolean;
  onClick: () => void;
};

const CustomerCard: React.FC<Props> = ({ user, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`customer-card ${isSelected ? 'selected' : ''}`}
    >
      <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0' }}>
        {user.name}
      </h3>
      <p style={{ fontSize: '0.9rem', color: '#666', margin: '5px 0 0' }}>
        {user.details}
      </p>
    </div>
  );
};

export default CustomerCard;
