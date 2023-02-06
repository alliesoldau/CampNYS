import React, { useState } from "react"

const ReservationDetailsContext = React.createContext();

function ReservationDetailsProvider({ children }) {
    const [reservation, setReservation] = useState([]);
    return (
        <ReservationDetailsContext.Provider value={{ reservation, setReservation }}>
          {children}
        </ReservationDetailsContext.Provider>
      );
    }

export { ReservationDetailsContext, ReservationDetailsProvider };