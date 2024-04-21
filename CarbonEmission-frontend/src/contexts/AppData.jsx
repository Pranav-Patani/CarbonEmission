import { useState, useEffect, createContext } from "react";

const AppDataContext = createContext([]);

export const AppDataProvider = ({ children }) => {
  const [appData, setAppData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => {
        setAppData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <AppDataContext.Provider value={appData}>
      {children}
    </AppDataContext.Provider>
  );
};

export default AppDataContext;
