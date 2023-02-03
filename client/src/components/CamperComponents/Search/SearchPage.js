import React from 'react';
import Map from './Map'
import SearchPageStyles from '../../../styles/SearchPageStyles'
  
function SearchPage() {

    return (
        <SearchPageStyles>
            <div className="header">
                <p>Search Page</p>
                {/* <button>Center Map</button> */}
            </div>
            <div className="map">
                <Map />
            </div>

        </SearchPageStyles>
    )
}

export default SearchPage;