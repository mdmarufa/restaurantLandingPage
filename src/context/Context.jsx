import React from "react";

export const DataContext = React.createContext(null);
const initialData = {
  isLinkActive: false,
  bcx: null,
  bcy: null,

  currentScroll: 0,
  scrollHeight: 0,
  offsetHeight : 0
};

const ContextProvider = ({ children }) => {
  const [data, setData] = React.useState(initialData);

  const updateData = (newData) => setData(newData);

  return <DataContext.Provider value={{data, updateData}}>{children}</DataContext.Provider>;
};

export default ContextProvider;