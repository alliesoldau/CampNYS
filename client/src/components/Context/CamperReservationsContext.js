import React, { useState } from "react"

const CamperReservationsContext = React.createContext();

function CamperReservationsProvider({ children }) {
    const [campRes, setCampRes] = useState([]);
    return (
        <CamperReservationsContext.Provider value={{ campRes, setCampRes }}>
          {children}
        </CamperReservationsContext.Provider>
      );
    }

export { CamperReservationsContext, CamperReservationsProvider };
