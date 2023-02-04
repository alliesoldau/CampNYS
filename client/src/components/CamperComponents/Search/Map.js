import React, { useState, useContext, useRef, useEffect } from 'react';
import { CampgroundContext } from '../../Context/CampgroundContext'
import { GrabAllCampgrounds } from '../../Stores/Fetches'
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
    InfoWindow
  } from '@react-google-maps/api'

// google maps tutorial source: https://www.youtube.com/watch?v=iP3DnhCUIsE&ab_channel=MafiaCodes 
// InfoWinow tutorial source: https://codesandbox.io/s/react-google-mapsapi-multiple-markers-infowindow-h6vlq?file=/src/Map.js:991-1035 

function Map() {

    const {campgrounds, setCampgrounds} = useContext(CampgroundContext);

    const apiKey = 'AIzaSyALnloTM5D_TfTDPGUd3DbvhyPEN_IsCbA'
    const {isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey,
        libraries: ['places'],
    })
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
        return;
        }
        setActiveMarker(marker);
        console.log(marker)
    };

    
    useEffect(() => {
        GrabAllCampgrounds().then(camps => {
            setCampgrounds(camps)
        })
    },[])

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    if (!isLoaded) { 
        return <p>loading...</p> 
    }
    
    const center = {lat: 42.6343187299392, lng: -73.85424802328473}

    async function calculateRoute() {
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
          return
        }
        const directionsService = new window.google.maps.DirectionsService()
        const results = await directionsService.route({
          origin: originRef.current.value,
          destination: destiantionRef.current.value,
          travelMode: window.google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        // the [0] gives you the first route option available 
        // need to do distance.text to return in the correct measurement unit 
        // distance.value will only return distance in meterse 
        // duration.value returns seconds, and duration.text returns usable time measurements for travel 
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiantionRef.current.value = ''
    }

    return (
        <>
            <button onClick={() => {
                map.panTo(center)
                map.setZoom(6.5)}}>
                    Center Map
            </button>
            <button onClick={calculateRoute}>Calculate Route</button>
            <button onClick={clearRoute}>Clear Route</button>
            <p>Duration: {duration}</p>
            <p>Distance: {distance}</p>
            <Autocomplete>
              <input type='text' placeholder='Campgrounds' ref={originRef}/>
            </Autocomplete>
            <Autocomplete>
              <input type='text' placeholder='Attractions eg: trailhead' ref={destiantionRef}/>
            </Autocomplete>
            { campgrounds.length > 0 ? 
                <GoogleMap 
                    center={center} 
                    zoom={6.5}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    options={{fullscreenControl: false}}
                    onLoad={map => setMap(map)}
                    onClick={() => setActiveMarker(null)}
                    >
                    {/* comment this back in if you want a pin at the center location  */}
                    {/* <Marker position={center} 
                        icon={{ 
                            url: 'http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png',
                                // ylw blue red grn pink wht purple ltblu
                            scaledSize: new window.google.maps.Size(37, 37),
                            anchor: new window.google.maps.Point(14, 28), 
                        }}
                    /> */}
                    {/* TO DO: add info windows and click events  */}
                    {campgrounds.map(loc => {
                        let color = 'wht'
                        if (loc.region_id === 1) {
                            color = 'ylw'
                        } else if (loc.region_id === 2) {
                            color = 'blue'
                        } else if (loc.region_id === 3) {
                            color='purple'
                        } else if (loc.region_id === 4) {
                            color='ltblu'
                        }
                        return (
                            <Marker 
                                position={{ lat: loc.lat, lng: loc.lng }}
                                icon={{ 
                                    url: `http://maps.google.com/mapfiles/kml/pushpin/${color}-pushpin.png`,
                                        // ylw blue red grn pink wht purple ltblu
                                    scaledSize: new window.google.maps.Size(37, 37),
                                    anchor: new window.google.maps.Point(14, 28), 
                                }}
                                onClick={() => handleActiveMarker(loc.id)}
                            >
                            {activeMarker === loc.id ? (
                                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                  <div>{loc.name}</div>
                                </InfoWindow>
                              ) : null}
                              </Marker>
                        )


                    })}
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )}
                </GoogleMap>
            : null }
        </>
    )
}

export default Map;