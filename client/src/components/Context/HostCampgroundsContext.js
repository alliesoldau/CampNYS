import React, { useState } from "react"

const HostCampgroundsContext = React.createContext();

function HostCampgroundsProvider({ children }) {
    const [ hostCampgrounds, setHostCampgrounds] = useState([]);
    return (
        <HostCampgroundsContext.Provider value={{ hostCampgrounds, setHostCampgrounds }}>
          {children}
        </HostCampgroundsContext.Provider>
      );
    }

export { HostCampgroundsContext, HostCampgroundsProvider };