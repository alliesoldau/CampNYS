import React, { useState } from "react"

const CampgroundDetailsContext = React.createContext();

function CampgroundDetailsProvider({ children }) {
    const [campgroundDetails, setCampgroundDetails] = useState([]);
    return (
        <CampgroundDetailsContext.Provider value={{ campgroundDetails, setCampgroundDetails }}>
          {children}
        </CampgroundDetailsContext.Provider>
      );
    }

export { CampgroundDetailsContext, CampgroundDetailsProvider };