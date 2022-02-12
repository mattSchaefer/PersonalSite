import React from 'react';
import {Link} from 'react-router-dom';
import MainSketch from '../components/MainSketch';
export default function Home(props){
    React.useEffect(()=>{
        setInterval(()=>{
            
        },2500)
    },[])
    return(
        <span className="main-sketch-container-outer">
            <MainSketch />
        </span>
    )
}