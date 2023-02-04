import React, { useState } from "react"

const CampgroundDetailsContext = React.createContext();

function CampgroundDetailsProvider({ children }) {
    const [campgroundDetails, setCampgroundDetails] = useState([]);
    function test(arg) {
      console.log('test', arg)
      setCampgroundDetails(arg)
    }
    return (
        <CampgroundDetailsContext.Provider value={{ campgroundDetails, setCampgroundDetails: test }}>
          {children}
        </CampgroundDetailsContext.Provider>
      );
    }

export { CampgroundDetailsContext, CampgroundDetailsProvider };