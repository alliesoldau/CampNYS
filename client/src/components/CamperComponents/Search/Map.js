import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom'
import { CampgroundContext } from '../../Context/CampgroundContext'
import MapStyles from '../../../styles/MapStyles'
import info from '../../../images/info.png'

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

    const { campgrounds } = useContext(CampgroundContext);

    const apiKey = 'AIzaSyALnloTM5D_TfTDPGUd3DbvhyPEN_IsCbA'
    const {isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey,
        libraries: ['places'],
    })
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [origin, setOrigin] = useState('')

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
        return;
        }
        setActiveMarker(marker);
    };

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    if (!isLoaded) { 
        return <p>loading...</p> 
    }
    
    // center is Pine Hallow Arb where Ben and I got engaged :)
    const center = {lat: 42.6343187299392, lng: -73.85424802328473}

    async function calculateRoute() {
        if (origin === '' || destiantionRef.current.value === '') {
          return
        }
        const directionsService = new window.google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: `${origin.lat}, ${origin.lng}`,
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
        setOrigin('')
        destiantionRef.current.value = ''
    }
    
    return (
        <MapStyles>
            <div className="route_calcs">
                <div className="buttons">
                    <button className="center" onClick={() => {
                        map.panTo(center)
                        map.setZoom(6.5)}}>
                            Center Map
                    </button>
                    <button className="calc" onClick={calculateRoute}>Calculate Route</button>
                    <button className="clear" onClick={clearRoute}>Clear Route</button>
                </div>
                <div className="entries">
                    <div classname="info">
                            <div id="DivForHoverItem">
                                <p>Origin:</p>
                                <img className="info_image"src={info}/>
                                <div id="HiddenText"><p>Select a pin from the map to set origin</p></div>
                                <p>{origin.name}</p>
                             </div>
                    </div>
                    <div className="attraction">
                        <p>Attraction:</p>
                            <Autocomplete>
                                <input type='text' placeholder='Attractions eg: trailhead' ref={destiantionRef}/>
                            </Autocomplete>
                    </div>
                </div>
                <div className="results">
                    <p>Duration: {duration}</p>
                    <p>Distance: {distance}</p>
                </div>
            </div>
            { campgrounds.length > 0 ? 
                <GoogleMap 
                    center={center} 
                    zoom={6.5}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    options={{fullscreenControl: false}}
                    onLoad={map => setMap(map)}
                    onClick={() => setActiveMarker(null)}
                    >
            
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
                                key={loc}
                            >
                            {activeMarker === loc.id ? (
                                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                  <>
                                    <h4>{loc.name}</h4>
                                    <div>Accessible by {loc.accessibility}</div>
                                    <div>Seasonal Opening: {loc.openning_date}</div>
                                    <div>Seasonal Closing: {loc.closing_date}</div>
                                    <button onClick={() => { 
                                        setOrigin(loc)
                                    }
                                    }>Select</button>
                                    <Link to={`/add_reservation/${loc.id}`}>
                                        <button>Make a Reservation</button>
                                    </Link>
                                  </>
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
        </MapStyles>
    )
}

export default Map;