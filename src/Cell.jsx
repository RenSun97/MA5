import React, { useEffect, useState } from "react";
import './Cell.css';
import { increase, decrease } from './actions/actions.js';
import { useDispatch } from "react-redux";

export default function Cell(props) {

    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
    //useEffect(() => { console.log("effect!!!!") }, [isClicked]);
    function determineColor() {
        return isClicked ? "black" : "white";
    }
    function handleClick() {
        if (!isClicked) {
            dispatch(increase());
            //console.log("is clicked");
        } else {
            dispatch(decrease());
            //console.log("is not clicked");
        }
        setIsClicked(!isClicked);
    }
    return (<div onClick={handleClick} className={props.className + ' ' + determineColor()}></div>);
    //return (<div onClick={handleClick} class={'cell '}>{'cell' + color()}</div>);
}