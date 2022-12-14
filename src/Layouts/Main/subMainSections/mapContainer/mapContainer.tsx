import { useEffect, useState } from "react";
import { CursorCross } from "../../../../Components/Cursor-cross/cursor-cross"
import Map from "../../../../Map/map";
// import Map from "../../../../Map"
import { loadMapApi } from "../../../../Utils/googleMapsUtils";
import "./mapContainer.scss"
export const MapContainer = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [distanceInKm, setDistanceInKm] = useState<number>(-1);

    useEffect(() => {
        const googleMapScript = loadMapApi();
        googleMapScript.addEventListener('load', function () {
            setScriptLoaded(true);
        });
    }, []);

    const renderDistanceSentence = () => {
        return (
            <div className='distance-info'>
                {`Distance between selected marker and home address is ${distanceInKm}km.`}
            </div>
        );
    };
    return (
        <>
            {/* <CursorCross /> */}
            {/* <div id='map-container' className='map-container'>map container</div> */}
            {/* <div className='map-container'>map container</div> */}
            {scriptLoaded && (
                <Map
                    mapType={google.maps.MapTypeId.ROADMAP}
                    mapTypeControl={true}
                    setDistanceInKm={setDistanceInKm}
                />
            )}
            {distanceInKm > -1 && renderDistanceSentence()}
        </>
    )
}