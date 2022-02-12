import React from 'react';
import {Link} from 'react-router-dom';
import HeaderAnimation from '../components/HeaderAnimation';
export default function Header(props){
    React.useEffect(()=>{

    },[])
    return(
        <div className={'main-container'}>
            <div className={"header-container"}>
                <Link to='/' className="main-header-link"><h1 className={"main-header"}>MATTHEW SCHAEFER</h1></Link>
                <HeaderAnimation />
            </div>
            <span className={'menu-bar'}>
                <Link to="/about" className={'menu-item'} tabindex="0" >About</Link>
                <Link to="/projects" className={'menu-item'} tabindex="0">Projects</Link>
                <Link to="/skills" className={'menu-item'} tabindex="0">Skills</Link>
            </span>
        </div>
    );
};