import React from 'react'
import Map from './Map'
import MapFilters from './MapFilters'
import SearchPageStyles from '../../../styles/SearchPageStyles'
  
function SearchPage() {

    return (
        <SearchPageStyles>
            {/* TO DO: add in map filters overtop of the map  */}
            {/* <MapFilters /> */}
            <div className="map">
                <Map />
            </div>

        </SearchPageStyles>
    )
}

export default SearchPage;