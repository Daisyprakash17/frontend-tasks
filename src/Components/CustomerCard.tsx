// src/Components/CustomerCard.tsx

import React from 'react';

type User = {
  id: number;
  name: string;
  title: string;
  details: string;
};

type Props = {
  user: User;
  isSelected: boolean;
  onClick: () => void;
};

const CustomerCard: React.FC<Props> = ({ user, isSelected, onClick }) => {
  const cardStyle: React.CSSProperties = {
    padding: '15px',
    marginBottom: '10px',
    cursor: 'pointer',
    borderRadius: '8px',
    border: '1px solid #ddd',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: isSelected ? '#e0f7fa' : '#fff',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    scrollbarWidth: 'thin', // For Firefox
    scrollbarColor: '#888 #f1f1f1', // For Firefox
  };

  return (
    <div onClick={onClick} style={cardStyle}>
      <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0' }}>{user.name}</h3>
      <p style={{ fontSize: '0.9rem', color: '#666', margin: '5px 0 0' }}>{user.details}</p>
    </div>
  );
};

export default CustomerCard;
