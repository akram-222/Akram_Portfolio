import React from 'react';
import { CursorCross } from '../../Components/Cursor-cross/cursor-cross';
import './main.scss';
import { AirLines } from './subMainSections/airLines/airLines';
import { TopKPIs } from './subMainSections/TopKPIs/topKPIs';

function Main() {
    return (
        <main id='main-container'>
            <CursorCross />
            <TopKPIs />
            <AirLines />
        </main>
    );
}

export default Main;