import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const GoogleMapTracking = ({ deliveries, google }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl h-96 relative shadow-lg border border-gray-300 rounded-lg overflow-hidden">
        <Map
          google={google}
          zoom={14}
          initialCenter={{
            lat: 19.0760,
            lng: 72.8777
          }}
          className="w-full h-full"
        >
          {deliveries.map((delivery, index) => (
            <Marker 
              key={index}
              title={delivery.name}
              position={{ lat: 19.0760 + (index * 0.01), lng: 72.8777 + (index * 0.01) }} // Dummy coordinates
            />
          ))}
        </Map>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
})(GoogleMapTracking);
