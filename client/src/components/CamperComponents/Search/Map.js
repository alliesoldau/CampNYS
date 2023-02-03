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
    
    useEffect(() => {
        // TO DO: switch back to the onliner once i'm done playing with the console.log 
        // GrabAllCampgrounds().then(setCampgrounds) 
        GrabAllCampgrounds().then(camps => {
            setCampgrounds(camps)
            console.log(camps)
        })
    },[])


    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    if (!isLoaded) { 
        return <p>loading...</p> 
    }
    
    const center = {lat: 44.18286103187915, lng: -73.96613001563273}

    async function calculateRoute() {
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
          return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
          origin: originRef.current.value,
          destination: destiantionRef.current.value,
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING,
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
                map.setZoom(15)}}>
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
                    zoom={15}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    options={{fullscreenControl: false}}
                    onLoad={map => setMap(map)}
                    >
                    <Marker position={center} 
                        icon={{ 
                            url: 'http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png',
                                // ylw blue red grn pink wht purple ltblu
                            scaledSize: new window.google.maps.Size(37, 37),
                            anchor: new window.google.maps.Point(14, 28), 
                        }}
                    />
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
                            />
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