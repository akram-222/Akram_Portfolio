import React from 'react';
import { CursorCross } from '../../Components/Cursor-cross/cursor-cross';
import './main.scss';
import { MapContainer } from './subMainSections/mapContainer/mapContainer';
import { TopKPIs } from './subMainSections/TopKPIs/topKPIs';

function Main() {
    return (
        <main id='main-container'>
            <CursorCross/>
            <TopKPIs />
            <MapContainer />
        </main>
    );
}

export default Main;