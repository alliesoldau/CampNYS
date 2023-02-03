import React, { useState } from 'react';
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'

// google maps tutorial source: https://www.youtube.com/watch?v=iP3DnhCUIsE&ab_channel=MafiaCodes 

function Map() {

    const apiKey = 'AIzaSyALnloTM5D_TfTDPGUd3DbvhyPEN_IsCbA'
    const {isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey
    })
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))

    if (!isLoaded) { 
        return <p>loading...</p> 
    }
    
    const center = { lat: 44.18286103187915, lng: -73.96613001563273 }


    return (
        <>
            <button onClick={() => {
                map.panTo(center)
                map.setZoom(15)}}>Center Map</button>
            <GoogleMap 
                center={center} 
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{fullscreenControl: false}}
                onLoad={map => setMap(map)}
                >
                {/* TO DO: loop through campgrounds to add marker comps  */}
                {/* TO DO: change long column to lng column in campgrounds table  */}
                <Marker position={center} />
                
            </GoogleMap>
        </>
    )
}

export default Map;