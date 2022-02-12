import React from 'react'
import {Link} from 'react-router-dom'

export default function About(props){
    React.useEffect(()=>{
        document.getElementById('about-component-container').style.animation = "fadeIn linear .5s";
        document.getElementById('about-component-container').style.opacity = "1"
    },[])
    return(
        <div className="about-section flex" id="about-component-container">
            <p className="about-para greet">
                Hey there,
            </p>
            <p className="about-para part-2">
                I'm a (ServiceNow) Systems Developer currently residing in Cincinnati, OH, with an interest in web development.  I like to explore the creation of unique and streamlined experiences on the web.  Off the web, I like to go on runs, and feel nervous about the Arsenal Football Club, as well as the Minnesota Vikings and Cincinnati Reds.  Now-and-then I try to polish up my German skills, which are more rusty than I'd like to admit.  I'm always willing to chat about my Oldschool Runescape account, my pet cat named Henry, or my alma mater, <i>The</i> Ohio State University.  
            </p>
            <p className="about-para">Feel free to reach out below!</p>
        </div>
    )
}