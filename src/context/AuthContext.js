import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const initialAuth = [];

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  const [ dni, setDni ] = useState('')
  const [people, setPeople] = useState([]);

  const searchPeople = () => {
    setPeople(auth.find(el => el.id == dni ? el : null))
  };

  useEffect(() => {
    searchPeople();
  }, [dni])

  const data = { auth, setAuth, dni, setDni, people };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
