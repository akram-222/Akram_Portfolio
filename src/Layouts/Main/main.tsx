import React from 'react';
import { CursorCross } from '../../Components/Cursor-cross/cursor-cross';
import { useMouseCoords } from '../../Contexts/MousePostion';
import './main.scss';
import { TopKPIs } from './subMainSections/TopKPIs/topKPIs';

function Main() {
    const {coords} = useMouseCoords()
    return (
        <main id='main-container'>
            <CursorCross coords={coords} />
            <TopKPIs />
        </main>
    );
}

export default Main;