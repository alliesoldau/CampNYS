import React, { useState } from "react"

const CampgroundContext = React.createContext();

function CampgroundProvider({ children }) {
    const [campgrounds, setCampgrounds] = useState([]);
    return (
        <CampgroundContext.Provider value={{ campgrounds, setCampgrounds }}>
          {children}
        </CampgroundContext.Provider>
      );
    }

export { CampgroundContext, CampgroundProvider };