import './airLines.scss'
import { MapContainer } from '../mapContainer/mapContainer'
export const AirLines = () => {
    return (
        <section className='airlines-container main-sub-section'>
            <h3 className='airlines-header'>Air Lines</h3>
            <div className='airlines-data main-sub-section-flex'>
                <div className='airlines-table-data'>table of data</div>
                <div className='airlines-table-data-visualization'>
                    <MapContainer />
                </div>
            </div>
        </section>
    )
}