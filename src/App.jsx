import './App.css'

import HeaderComponent from './components/HeaderComponent.jsx';
import Login from './components/Login.jsx';
import Inicio from "./components/Inicio.jsx";
import {useState} from "react";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Función que cambia el estado para indicar que el usuario ha iniciado sesión
    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem("token");
    };

    return (
              <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
                  <HeaderComponent onLogout={handleLogout} />
                  <main>
                      {isAuthenticated ? (
                          <Inicio onLogout={handleLogout} />
                      ) : (
                          <Login onLogin={handleLogin}/>
                      )}
                  </main>
              </div>
)
}

export default App
