// KundliContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const KundliContext = createContext(null);

// Custom hook to use context
export const useKundli = () => useContext(KundliContext);

export const KundliProvider = ({ children }) => {
  const [kundli, setKundli] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/kundli')
      .then(res => res.json())
      .then(json => setKundli(json))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <KundliContext.Provider value={kundli}>
      {children}
    </KundliContext.Provider>
  );
};
