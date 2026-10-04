import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // const url = "http://localhost:8000";
  const url = "https://www.ebi.ac.uk/chembl/api/data/"

  const [token, setToken] = useState("");

  const handleAuthError = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  const contextValues = {
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValues}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
