// eslint-disable-next-line react/prop-types
import {useContext, useEffect, useState} from "react";
import {PlantacionesContext} from "../context/plantaciones.context.jsx";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function HeaderComponent({ onLogout }) {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const { setPlantaciones, setSensores } = useContext(PlantacionesContext);

    //Para más adelante hacer el buscador
    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value);
    }

    const logout = () => {
        setUsername("");
        setPlantaciones([]);
        setSensores([]);
        onLogout();
        navigate("/");
    }

    //Cuando se repinta el componente
    useEffect(() => {
        const token = sessionStorage.getItem("token"); // Obtener el token almacenado
        if (token) {
            const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decodificar el payload del JWT
            setUsername(decodedToken.username); // Guardar el username en el estado
        } else {
            setUsername("");
        }
    });

    return (
        <header>
            <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

                <div className="flex flex-wrap items-center">
                    <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                        <a href="#" aria-label="Home">
                            <span className="text-xl pl-2">Admin</span>
                        </a>
                    </div>
                    <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                        <span className="relative w-full">
                            <input aria-label="search" type="search" id="search" placeholder="Search"
                                   className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
                                   onChange={handleChange}
                            />
                        </span>
                    </div>
                    <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                            <li className="flex-1 md:flex-none md:mr-3">
                                <div className="relative inline-block">
                                    <span className="text-xl text-white pl-2 pe-2">{username}</span>
                                    <button
                                        onClick={logout}
                                        className="bg-blue-500 text-white px-4 py-2 rounded">
                                        <span className="pr-2">Cerrar Sesión</span>

                                    </button>
                                    <div id="myDropdown"
                                         className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible">
                                        <input type="text" className="drop-search p-2 text-gray-600"
                                               placeholder="Search.." id="myInput"
                                               />
                                        <a href="#"
                                           className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i
                                            className="fa fa-user fa-fw"></i> Profile</a>
                                        <a href="#"
                                           className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i
                                            className="fa fa-cog fa-fw"></i> Settings</a>
                                        <div className="border border-gray-800"></div>
                                        <a href="#"
                                           className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i
                                            className="fas fa-sign-out-alt fa-fw"></i> Log Out</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    )

}

export default HeaderComponent;