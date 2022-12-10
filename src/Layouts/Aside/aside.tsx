import React from 'react';
import './aside.scss';
import { BsFillGrid1X2Fill } from "react-icons/bs"
import { TbAccessPoint } from "react-icons/tb"
import { MdOutlineVerifiedUser } from "react-icons/md"
function Aside() {
    return (
        <aside>
            <ul>
                <li><BsFillGrid1X2Fill /></li>
                <li><TbAccessPoint /></li>
                <li><MdOutlineVerifiedUser /></li>
                <li><TbAccessPoint /></li>
                <li><TbAccessPoint /></li>
                
            </ul>
        </aside>
    );
}

export default Aside;