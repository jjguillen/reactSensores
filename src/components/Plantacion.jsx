import {Link} from "react-router-dom";

export function Plantacion(props) {

    // eslint-disable-next-line react/prop-types
    const plantacion = { ...props.plantacion };
    return(
        <>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <div className="flex items-center gap-x-2">
                        <div>
                            <h2 className="font-normal text-gray-800 dark:text-white ">{plantacion.nombre}</h2>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                {plantacion.ubicacion}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {plantacion.pais}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {plantacion.provincia}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {plantacion.ciudad}
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                {plantacion.tipoProducto}
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <Link to={`/plantaciones/${plantacion.id}/sensores`}>Sensores</Link>
            </td>
        </>
    );
}