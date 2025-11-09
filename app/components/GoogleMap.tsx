import React from "react";
import {APIProvider, Map, Marker, } from '@vis.gl/react-google-maps';

const markerStyles = {
  position: 'absolute',
  transform: 'translate(-50%, 0)',
} as const
const AnyReactComponent = ({ text }: any) => <div style={markerStyles}>{text}</div>;

  const location = {
    center: {
      lat: 51.23906137513752,
      lng: 22.509145560456776
    },
    zoom: 11
  };

export function GoogleMap(){

  return (
    <div style={{ height: '410px', width: '100%' }}>
       <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API!}>
    <Map
      style={{width: '100%', height: '100%'}}
      defaultCenter={location.center}
      defaultZoom={location.zoom}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    >
    <Marker position={location.center} />
    </Map>
  </APIProvider>
    </div>
  );
}