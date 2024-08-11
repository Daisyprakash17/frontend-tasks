import React, { useEffect, useState } from 'react';
import '../index.css'
type User = {
  id: number;
  name: string;
  title: string;
  details: string;
};

type Props = {
  selectedCustomer: User | null;
};

const CustomerDetails: React.FC<Props> = ({ selectedCustomer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = () => {
      const newPhotos = Array.from({ length: 9 }, () => `https://picsum.photos/200?random=${Math.random()}`);
      setPhotos(newPhotos);
    };

    fetchPhotos();
    const intervalId = setInterval(fetchPhotos, 10000);

    return () => clearInterval(intervalId);
  }, [selectedCustomer]);

  return (
    <div className="right-panel">
      {selectedCustomer ? (
        <div>
          <h2 className="customer-title">{selectedCustomer.name}</h2>
          <p className="customer-details">{selectedCustomer.details}</p>
          <div className="photo-grid">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt=""
              />
            ))}
          </div>
        </div>
      ) : (
        <p style={{ fontSize: '1.2rem', color: '#888', textAlign: 'center', marginTop: '20px' }}>
          Select a customer to view details
        </p>
      )}
    </div>
  );
};

export default CustomerDetails;
