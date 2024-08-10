import React, { useEffect, useState } from 'react';

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
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  useEffect(() => {
    const fetchPhotos = () => {
      // Generate 9 random square photo URLs
      const newPhotos = Array.from({ length: 9 }, () => `https://picsum.photos/200?random=${Math.random()}`);
      setPhotos(newPhotos);
    };

    fetchPhotos(); // Initial fetch
    const intervalId = setInterval(fetchPhotos, 10000); // Update photos every 10 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [selectedCustomer]);

  const rightPanelStyle: React.CSSProperties = {
    width: '70%',
    padding: '20px',
    backgroundColor: '#fff',
    borderLeft: '1px solid #ddd',
    overflowY: 'auto',
    height: '100vh',
    boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.1)',
    scrollbarWidth: 'thin', // For Firefox
    scrollbarColor: '#aaa #eaeaea', // For Firefox
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 10px',
    textAlign: 'center',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.6rem',
    fontWeight: '600',
    color: '#555',
    margin: '0 0 15px',
    textAlign: 'center',
  };

  const detailsStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px',
    textAlign: 'center',
    overflowWrap: 'break-word', // Ensure text wraps within container
  };

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    marginTop: '20px',
  };

  // Base style for the photos
  const basePhotoStyle: React.CSSProperties = {
    width: '100%',
    height: '180px', // Set a fixed height for consistency
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  };

  // Function to apply hover effect based on index
  const getPhotoStyle = (index: number): React.CSSProperties => ({
    ...basePhotoStyle,
    transform: hoveredPhoto === index ? 'scale(1.05)' : 'scale(1)',
  });

  const emptyStateStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#888',
    textAlign: 'center',
    marginTop: '20px',
  };

  return (
    <div style={rightPanelStyle}>
      {selectedCustomer ? (
        <div>
          <h2 style={titleStyle}>{selectedCustomer.name}</h2>
          <h4 style={subtitleStyle}>{selectedCustomer.title}</h4>
          <p style={detailsStyle}>{selectedCustomer.details}</p>
          <div style={gridContainerStyle}>
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={""} // Updated alt text
                style={getPhotoStyle(index)}
                onMouseEnter={() => setHoveredPhoto(index)}
                onMouseLeave={() => setHoveredPhoto(null)}
              />
            ))}
          </div>
        </div>
      ) : (
        <p style={emptyStateStyle}>Select a customer to view details</p>
      )}
    </div>
  );
};

export default CustomerDetails;
