import React from "react";
import { useSelector } from 'react-redux';
import Cell from "./Cell";
import './Parent.css';
export default function Parent(props) {
    const count = useSelector(state => state);
    //const count = 1;
    return (
        <div id='Parent'>
            <h1>{'Count: ' + count}</h1>
            <div id='grid'>
                <Cell className="cell"></Cell>
                <Cell className="cell"></Cell>
                <Cell className="cell"></Cell>
                <Cell className="cell"></Cell>
            </div>
        </div>
    );
}