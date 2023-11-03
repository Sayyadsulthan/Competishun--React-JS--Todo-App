import { createContext, useContext } from "react";

const initialState = {
  user: null,
  todos: [],
};

const AuthContext = createContext(initialState);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;