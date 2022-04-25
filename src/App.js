import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ArmaPlan from "./pages/ArmaPlan/ArmaPlan";
import Gracias from "./pages/Gracias/Gracias";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/arma-plan/:placa" element={<ArmaPlan/>}/>
          <Route path="/gracias" element={<Gracias/>}/>
        </Routes>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;
