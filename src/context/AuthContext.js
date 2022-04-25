import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const initialAuth = [];

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  const [dni, setDni] = useState('');
  const [pago, setPago] = useState(20);
  const [people, setPeople] = useState([]);

  const searchPeople = () => {
    let idPeople = dni.slice(7,8) != 0 ?  dni.slice(7,8) : 10
    setPeople(auth.find(el => el.id == idPeople ? el : null))
  };

  useEffect(() => {
    searchPeople();
  }, [dni])

  const data = { auth, setAuth, dni, setDni, people, pago, setPago };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
