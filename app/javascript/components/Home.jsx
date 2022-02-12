import React from 'react';
import {Link} from 'react-router-dom';
import MainSketch from '../components/MainSketch';
export default function Home(props){
    React.useEffect(()=>{
        document.getElementById('home-section').style.animation = "fadeIn linear .5s";
        document.getElementById('home-section').style.opacity = "1"
    },[])
    return(
        <span className="main-sketch-container-outer" id="home-section">
            <MainSketch />
        </span>
    )
}