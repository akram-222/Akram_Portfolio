import './sensorAvailability.scss';
function SensorAvailability() {
    
    return (
        <>
            <span>SensorAvailability</span>
            <div className='sensorGridContainer' >
                {new Array(Math.floor(120)).fill("").map((e, i) => <span></span>)}
            </div>
        </>
    );
}

export default SensorAvailability;