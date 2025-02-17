import { createContext, useState } from "react";

const PlantacionesContext = createContext();

function PlantacionesProviderWrapper(props) {
    const API_URL = import.meta.env.VITE_API_URL;
    const [plantaciones, setPlantaciones] = useState([]);
    const [sensores, setSensores] = useState([]);
    const [hasLoaded, setLoaded] = useState(false);
    const [hasError, setError] = useState(false);

    //Obtener plantaciones
    const getPlantaciones = async () => {
        const token = sessionStorage.getItem("token"); // Obtener el token almacenado
        if (token) {
            try {
                const response = await fetch(`${API_URL}/api/plantaciones/usuario`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`, // Pasar el token en la cabecera
                    },
                });

                if (!response.ok) {
                    throw new Error("Error en la solicitud");
                }

                const data = await response.json();
                setPlantaciones(data); // Guardar los datos en el estado
                setLoaded(true);
                setError(false);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
                setError(true);
            }
        }
    };

    //Obtener plantaciones
    const getSensores = async (id) => {
        const token = sessionStorage.getItem("token"); // Obtener el token almacenado
        if (token) {
            try {
                const response = await fetch(`${API_URL}/api/plantaciones/${id}/sensores`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`, // Pasar el token en la cabecera
                    },
                });

                if (!response.ok) {
                    throw new Error("Error en la solicitud");
                }

                const data = await response.json();
                setSensores(data); // Guardar los datos en el estado
                setLoaded(true);
                setError(false);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
                setError(true);
            }
        }
    };

    return (
        <PlantacionesContext.Provider
            value={{ plantaciones, setPlantaciones, sensores, setSensores, getPlantaciones, getSensores, hasLoaded, hasError }}
        >
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </PlantacionesContext.Provider>
    );
}





export { PlantacionesContext, PlantacionesProviderWrapper};