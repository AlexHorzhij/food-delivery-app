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
    >
      <MarkerF position={selected} clickable={true} />
    </GoogleMap>
  );
}
export default Map;

// const PlacesAutocomplete = ({ setSelected }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const handleSelect = async address => {
//     setValue(address, false);
//     clearSuggestions();

//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     setSelected({ lat, lng });
//   };

//   return (
//     <Combobox onSelect={handleSelect}>
//       <InputApp
//         value={value}
//         onChange={e => setValue(e.target.value)}
//         disabled={!ready}
//         className="combobox-input"
//         placeholder="Search an address"
//         addToInput={() => console.log('dddd')}
//       />
//       <ComboboxPopover>
//         <ComboboxList>
//           {status === 'OK' &&
//             data.map(({ place_id, description }) => (
//               <ComboboxOption key={place_id} value={description} />
//             ))}
//         </ComboboxList>
//       </ComboboxPopover>
//     </Combobox>
//   );
// };
