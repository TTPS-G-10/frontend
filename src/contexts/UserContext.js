import React, { createContext, useState } from "react";

export const UserContext = createContext();

//provider
const UserProvider = (props) => {
  const [jwt, setJwt] = useState(null);
  const [DBUser, setDBUser] = useState(null);
  const apiEndPoint = "https://localhost:9000";

  return (
    <UserContext.Provider value={{ jwt, setJwt, apiEndPoint, setDBUser, DBUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
