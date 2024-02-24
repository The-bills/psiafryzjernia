import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export function GoogleMap(){
  const location = {
    center: {
      lat: 51.23906137513752,
      lng: 22.509145560456776
    },
    zoom: 11
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
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