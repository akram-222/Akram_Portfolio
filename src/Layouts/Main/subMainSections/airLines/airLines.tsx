import './airLines.scss'
import { MapContainer } from '../mapContainer/mapContainer'
export const AirLines = () => {
    return (
        <section className='airlines-container'>
            <h3 className='airlines-header'>Air Lines</h3>
            <div className='airlines-data'>
                <div className='airlines-table-data'>table of data</div>
                <div className='airlines-table-data-visualization'>
                    <MapContainer />
                </div>
            </div>
        </section>
    )
}