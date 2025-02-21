import {useParams} from "react-router-dom";
import { AgCharts } from 'ag-charts-react';
import {InfluxDBContext} from "../context/influxdb.context.jsx";
import {useContext, useEffect} from "react";

function DataSensor() {
    const { idSensor } = useParams();
    const { getDataSensor, dataSensor, measure } = useContext(InfluxDBContext);
    let color="";

    useEffect(() => {
        getDataSensor(idSensor);    //Llamada a la API para traer los datos del sensor
    }, []);

    switch (measure) {
        case "TEMPERATURA":
            color = "#E7000B";
            break;
        case "VIENTO":
            color = "#00C951";
            break;
        case "HUMEDAD":
            color = "#AD46FF";
            break;
        case "LLUVIA":
            color = "#5090DC";
            break;
        case "LUMINOSIDAD":
            color = "yellow";
            break;
    }

    const options = {
        title: {
            text: `Datos del sensor de ${measure} número: ${idSensor}`,
        },
        data: dataSensor,
        series: [
            {
                type: 'line',
                xKey: 'time',
                yKey: 'value',
                yName: `${measure}`,
                stroke: `${color}`,
                marker: {
                    fill: `${color}`,
                    size: 7,
                }
            },
        ],
        axes: [
            {
                type: 'time',
                position: 'bottom',
            },
            {
                type: 'number',
                position: 'left',
            },
        ],
    };

    //console.log(dataSensor);

    return (
        <>
            <div className="container p-1">
                <div className="flex flex-col mt-1">
                    <div className="mx-2 -my-2  sm:-mx-2 lg:-mx-4">
                        <div className="inline-block w-[95%] py-2 align-middle ">
                            <AgCharts options={options}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    }

    export default DataSensor;