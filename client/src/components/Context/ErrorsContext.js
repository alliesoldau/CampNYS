import React, { useState } from "react"

const ErrorsContext = React.createContext();

function ErrorsProvider({ children }) {
    const [errors, setErrors] = useState([]);
    return (
        <ErrorsContext.Provider value={{ errors, setErrors }}>
          {children}
        </ErrorsContext.Provider>
      );
    }

export { ErrorsContext, ErrorsProvider };
