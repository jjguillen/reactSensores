import HeaderComponent from "./HeaderComponent.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import Plantaciones from "./Plantaciones.jsx";
import Informes from './Informes';
import Sensores from "./Sensores.jsx";
import DataSensor from "./DataSensor.jsx";

// eslint-disable-next-line react/prop-types
function Inicio({ onLogout }) {
    return (
            <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
                <HeaderComponent onLogout={onLogout} />
                <main>
                    <div className="flex flex-col md:flex-row">
                        <nav>
                            <div
                                className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">

                                <div
                                    className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                                    <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                                        <li className="mr-3 flex-1">
                                            <NavLink to="/" replace className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                                <i className="fas fa-tasks pr-0 md:pr-3"></i><span
                                                className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Plantaciones</span>
                                            </NavLink>
                                        </li>
                                        <li className="mr-3 flex-1">
                                            <NavLink to="/informes" replace className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                                <i className="fa fa-envelope pr-0 md:pr-3"></i><span
                                                className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Informes</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </nav>
                        <section>
                            <div id="main" className="main-content bg-gray-800 mx-auto bg-gray-500 p-4 fixed w-full">

                                {/* Contenido dinámico según la ruta */}
                                <Routes>
                                    <Route path="/" element={<Plantaciones/>}/>
                                    <Route path="/informes" element={<Informes/>}/>
                                    <Route path="/plantaciones" element={<Plantaciones/>}/>
                                    <Route path="/plantaciones/:id/sensores" element={<Sensores />} />
                                    <Route path="/plantaciones/sensor/:idSensor" element={<DataSensor />} />
                                </Routes>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
    )
}

export default Inicio;