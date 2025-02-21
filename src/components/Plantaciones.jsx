import {useContext, useEffect} from "react";
import {Plantacion} from "./Plantacion.jsx";
import {PlantacionesContext} from "../context/plantaciones.context.jsx";

function Plantaciones(){
    const { getPlantaciones, plantaciones, hasLoaded, hasError } = useContext(PlantacionesContext);

   //Renderiza el componente al cargarlo
    useEffect(() => {
        getPlantaciones(); // Llamar a la API cuando el componente se monta
    }, []);

    return (

        <section className="container" >
            <div className="bg-gray-800">
                <div
                    className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h1 className="font-bold pl-2">Plantaciones</h1>
                </div>
            </div>

            <div className="flex flex-col mt-1">
                <div className="mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col"
                                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-x-3">
                                            <span>Nombre</span>
                                        </div>
                                    </th>

                                    <th scope="col"
                                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Ubicación
                                    </th>

                                    <th scope="col"
                                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        País
                                    </th>

                                    <th scope="col"
                                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Provincia
                                    </th>

                                    <th scope="col"
                                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Ciudad
                                    </th>

                                    <th scope="col"
                                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Tipo
                                    </th>
                                    <th scope="col"
                                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Acciones
                                    </th>
                                </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                                {plantaciones.map((plantacion, index) => (
                                        <tr key={index}>
                                            <Plantacion plantacion={plantacion}></Plantacion>
                                        </tr>
                                    )
                                )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Plantaciones;


