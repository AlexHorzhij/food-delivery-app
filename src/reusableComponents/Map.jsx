import { useState, useCallback, memo } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(MyComponent);

// ==============================================/
//
//
//
// import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// const MyMapComponent = withGoogleMap((props = true) => (
//   <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//     {props.isMarkerShown && (
//       <Marker position={{ lat: -34.397, lng: 150.644 }} />
//     )}
//   </GoogleMap>
// ));
// export default MyMapComponent;
//   < MyMapComponent isMarkerShown />
// // Map with a Marker
//   < MyMapComponent isMarkerShown = { false} />
// // Just only Map

// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import Marker from './Marker';
// import { Loader } from '@googlemaps/js-api-loader';

// const defaultProps = {
//   center: {
//     lat: 59.955413,
//     lng: 30.337844,
//   },
//   zoom: 15,
// };
// // const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap() {
//   const loader = new Loader({
//     apiKey: '',
//     version: 'weekly',
//     ...additionalOptions,
//   });

//   loader.load().then(async () => {
//     const { Map } = await google.maps.importLibrary('maps');

//     const map = new Map(document.getElementById('map'), {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   });

// return (
//   // Important! Always set the container height explicitly
//   <div style={{ height: '100vh', width: '100%' }}>
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: '' }}
//       defaultCenter={defaultProps.center}
//       defaultZoom={defaultProps.zoom}
//     >
//       {/* <AnyReactComponent
//         lat={59.955413}
//         lng={30.337844}
//         text="My Marker"
//         onClick={() => console.log('OK')}
//       /> */}
//       <Marker
//         text={'My Marker'}
//         lat={defaultProps.center.lat}
//         lng={defaultProps.center.lng}
//       />
//     </GoogleMapReact>
//   </div>
// );
// }
