import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import "./mapContainer.scss"

export const MapContainer = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY! })
    if (!isLoaded) return <div>Loading...</div>
    return (
        <>
            <div className='map-container'>
                <Map />
            </div>

        </>
    )
}

function Map() {
    return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerClassName="map-container"></GoogleMap>
}