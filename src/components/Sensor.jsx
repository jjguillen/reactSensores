function Sensor(props) {
    // eslint-disable-next-line react/prop-types
    const sensor = props.sensor;
    let colorFrom, colorTo, color, textColor;

    console.log(sensor.tipo);
    switch (sensor.tipo) {
        case "TEMPERATURA":
            colorFrom = "from-red-200";
            colorTo = "to-red-100";
            color = "bg-red-600";
            textColor = "text-red-500";
            break;
        case "VIENTO":
            colorFrom = "from-green-200";
            colorTo = "to-green-100";
            color = "bg-green-600";
            textColor = "text-green-500";
            break;
        case "HUMEDAD":
            colorFrom = "from-purple-200";
            colorTo = "to-purple-100";
            color = "bg-purple-600";
            textColor = "text-purple-500";
            break;
        case "LLUVIA":
            colorFrom = "from-blue-200";
            colorTo = "to-blue-100";
            color = "bg-blue-600";
            textColor = "text-blue-500";
            break;
        case "LUMINOSIDAD":
            colorFrom = "from-yellow-200";
            colorTo = "to-yellow-100";
            color = "bg-yellow-600";
            textColor = "text-yellow-500";
            break;
    }

    return (
        <>
            <div
                className={`bg-gradient-to-b ${colorFrom} ${colorTo} border-b-4 rounded-lg shadow-xl p-5`}>
                <div className="flex flex-row items-center">
                    <div className="flex-shrink pr-4">
                        <div className={`rounded-full p-5 ${color}`}><i
                            className="fa fa-wallet fa-2x fa-inverse"></i></div>
                    </div>
                    <div className="flex-1 text-right md:text-center">
                        <h2 className="font-bold uppercase text-gray-600">Sensor {sensor.id} </h2>
                        <p className="font-bold text-3xl"><span
                            className={`${textColor}`}>{sensor.tipo}</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sensor;