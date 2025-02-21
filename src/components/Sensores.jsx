import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {PlantacionesContext} from "../context/plantaciones.context.jsx";
import {Plantacion} from "./Plantacion.jsx";
import Sensor from "./Sensor.jsx";

function Sensores() {
    const { id } = useParams();

    const { getSensores, sensores } = useContext(PlantacionesContext);

    //Renderiza el componente al cargarlo
    useEffect(() => {
        getSensores(id); // Llamar a la API cuando el componente se monta
    }, []);

    return (
        <>
            <section className="container">
                <div className="bg-gray-800">
                    <div
                        className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                        <h1 className="font-bold pl-2">Sensores de la plantación {id}</h1>
                    </div>
                </div>
                <div className="flex flex-col mt-1">
                    <div className="mx-2 -my-2  sm:-mx-2 lg:-mx-4">
                        <div className="inline-block w-[95%] py-2 align-middle ">
                                <div className="flex flex-wrap">

                                    {sensores.map((sensor, index) => (
                                            <div className="w-[95%] md:w-1/2 xl:w-1/3 p-4" key={index}>
                                                <Sensor sensor={sensor} />
                                            </div>
                                        )
                                    )}

                                </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    )
}

export default Sensores;