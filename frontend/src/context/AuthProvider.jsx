// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext({});

// const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({});
//   console.log(auth);
//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined)
//     throw new Error("Auth context was used outside the AuthProvider");
//   return context;
// };

// // export default AuthContext;
// export { AuthProvider, useAuth };

import {createContext, useEffect, useState} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = sessionStorage.getItem("token");
    return { accessToken: token || null };
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setAuth((prevAuth) => {
      if (token !== prevAuth.accessToken) {
        return { accessToken: token || null };
      }
      return prevAuth;
    });
  }, [auth]);

  console.log(auth)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
