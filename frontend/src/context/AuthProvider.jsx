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

import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  console.log(auth);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
