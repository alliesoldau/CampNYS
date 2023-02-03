import React, { useState, useRef } from 'react';
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
        googleMapsApiKey: apiKey,
        libraries: ['places'],
    })
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    if (!isLoaded) { 
        return <p>loading...</p> 
    }
    
    const center = { lat: 44.18286103187915, lng: -73.96613001563273 }

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
            <GoogleMap 
                center={center} 
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{fullscreenControl: false}}
                onLoad={map => setMap(map)}
                >
                {/* TO DO: loop through campgrounds to add marker comps  */}
                {/* TO DO: change long column to lng column in campgrounds table  */}
                <Marker position={center} 
                // custom icons source: https://www.mindbowser.com/react-google-map-with-a-custom-pin-marker/
                // pushpin icon source: http://kml4earth.appspot.com/icons.html#pushpin  
                // i should be able to change the color of the pushpin programatically by region :D 
                    icon={{ 
                        url: 'http://maps.google.com/mapfiles/kml/paddle/ylw-circle.png',
                        // supported color codes source: https://groups.google.com/g/kml-support-getting-started/c/j6CHf7UmXQY
                            // ylw blue red grn pink wht purple ltblu
                        // scaledSize: new google.maps.Size(37, 37),
                        // anchor: new google.maps.Point(14, 28), 
                        // figured out pushpin anchor thru trial and error 
                    }}
                />
                {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                )}
            </GoogleMap>
        </>
    )
}

export default Map;