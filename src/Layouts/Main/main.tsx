import React from 'react';
import { CursorCross } from '../../Components/Cursor-cross/cursor-cross';
import './main.scss';
import { TopKPIs } from './subMainSections/TopKPIs/topKPIs';

function Main() {
    return (
        <main id='main-container'>
            <CursorCross/>
            <TopKPIs />
            <div id='map-container'></div>
        </main>
    );
}

export default Main;