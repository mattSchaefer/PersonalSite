import React from 'react';
import {Link} from 'react-router-dom';
import HeaderAnimation from '../components/HeaderAnimation';
export default function Header(props){
    const ghostButtonV1 = {
        background: 'none',
        border: 'none',
    }
    const ghostbutton = {
        background: 'none',
        color: 'black',
        border: 'none',
        textDecoration: 'none !important',
        fontWeight: '500',
    }
    React.useEffect(()=>{

    },[])
    return(
        <div className={'main-container'}>
            <div className={"header-container"}>
                <Link to='/' className="main-header-link"><button style={ghostButtonV1}><h1 className={"main-header"}>MATTHEW SCHAEFER</h1></button></Link>
                <HeaderAnimation />
            </div>
            <span className={'menu-bar'}>
                <Link to="/about" className={'menu-item'} tabIndex={"0"} ><button style={ghostbutton} className="header-link-ghostbutton">About</button></Link>
                <Link to="/projects" className={'menu-item'} tabIndex={"0"}><button style={ghostbutton} className="header-link-ghostbutton">Projects</button></Link>
                <Link to="/skills" className={'menu-item'} tabIndex={"0"}><button style={ghostbutton} className="header-link-ghostbutton">Skills</button></Link>
            </span>
        </div>
    );
};