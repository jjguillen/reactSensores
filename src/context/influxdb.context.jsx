import {createContext, useState} from "react";

const InfluxDBContext = createContext();

function InfluxDBProviderWrapper(props) {
    const API_URL = import.meta.env.VITE_API_URL;
    const [dataSensor, setDataSensor] = useState([]);
    const [measure, setMeasure] = useState("");
    const [hasLoaded, setLoaded] = useState(false);
    const [hasError, setError] = useState(false);


    //Obtener datos de un sensor determinado
    const getDataSensor = async (id) => {
        try {
            const response = await fetch(`${API_URL}/api/data/day/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }

            const data = await response.json();

            //Le pasamos la medida para que la pinte React Charts
            setMeasure(data[0].records[0].values._measurement);

            const formattedData = data[0].records.map(record => ({
                time: new Date(record.values._time),
                value: record.values._value,
            }));

            setDataSensor(formattedData); // Guardar los datos en el estado
            setLoaded(true);
            setError(false);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            setError(true);
        }
    };

    return (
        <InfluxDBContext.Provider
            value={{ dataSensor, getDataSensor, measure, hasLoaded, hasError }}
        >
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </InfluxDBContext.Provider>
    );

}

export { InfluxDBContext, InfluxDBProviderWrapper};