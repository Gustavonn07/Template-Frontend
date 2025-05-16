import React from "react";

interface User {
  id: string
  name: string
}

interface AuthContextType {
  user: User | null
  token: string | null;
  saveToken: (newToken: string) => void;
  removeToken: () => void;
}

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  token: null,
  saveToken: () => { },
  removeToken: () => { }
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null)
  const [token, setToken] = React.useState<string | null>(localStorage.getItem("authToken"));
  setUser(null)

  const saveToken = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("authToken", newToken);
  };

  const removeToken = () => {
    setToken(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, removeToken, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
