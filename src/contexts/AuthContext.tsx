import React from "react";

interface AuthContextType {
  token: string | null;
  saveToken: (newToken: string) => void;
  removeToken: () => void;
}

const AuthContext = React.createContext<AuthContextType>({ 
  token: null, 
  saveToken: () => {}, 
  removeToken: () => {} 
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = React.useState<string | null>(localStorage.getItem("authToken"));

  const saveToken = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("authToken", newToken);
  };

  const removeToken = () => {
    setToken(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
