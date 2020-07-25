import React, { useState, createContext } from "react";

export const GalleriesContext = createContext();

export const GalleriesProvider = (props) => {
  const [galleries, setGalleries] = useState([]);

  return (
    <GalleriesContext.Provider value={[galleries, setGalleries]}>
      {props.children}
    </GalleriesContext.Provider>
  );
};
