import React from 'react';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.74,
  lng: -74.18,
};
const libraries = ['places'];

function Map({ selected = center }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      mapContainerStyle={containerStyle}
      center={selected}
      zoom={15}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      <MarkerF position={selected} clickable={true} />
    </GoogleMap>
  );
}
export default Map;
