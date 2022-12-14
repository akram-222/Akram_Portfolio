import React from 'react';
import './main.scss';
import { AirLines } from './subMainSections/airLines/airLines';
import { TopKPIs } from './subMainSections/TopKPIs/topKPIs';

function Main() {
    return (
        <main id='main-container'>
            
            <TopKPIs />
            <AirLines />
        </main>
    );
}

export default Main;