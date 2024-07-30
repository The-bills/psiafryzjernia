import React from "react";
import GoogleMapReact from 'google-map-react';

const markerStyles = {
  position: 'absolute',
  transform: 'translate(-50%, 0)',
  // background: 'red', 
  // color: 'white',    
  // padding: '5px',    
  // borderRadius: '50%'
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
    <div style={{ height: '300px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location.center}
        defaultZoom={location.zoom}
      >
         <AnyReactComponent
          lat={location.center.lat}
          lng={location.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}