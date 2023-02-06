import React, { useState } from "react"

const SiteContext = React.createContext();

function SiteProvider({ children }) {
    const [siteDetails, setSiteDetails] = useState(null);
    return (
        <SiteContext.Provider value={{ siteDetails, setSiteDetails }}>
          {children}
        </SiteContext.Provider>
      );
    }

export { SiteContext, SiteProvider };
