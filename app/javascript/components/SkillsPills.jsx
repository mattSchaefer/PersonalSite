import React from 'react';

export default function SkillsPills(props){
    const skills = props.skills.split(',')
    
    const skills_eles =  skills.map((skill) => 
        <span className="skill-pill">
            <span  className={
                skill.indexOf('Rails') >= 0 ? "rubyIconStyle skill-pill-image" : 
                skill.indexOf('ReactJS') >= 0 ? "reactIconStyle skill-pill-image" :
                skill.indexOf('Redux') >= 0 ? "reduxIconStyle skill-pill-image" : 
                skill.indexOf('JWT') >= 0 ? "JWTIconStyle skill-pill-image" : 
                skill.indexOf('p5') >= 0 ? "p5jsIconStyle skill-pill-image" :
                skill.indexOf('Captcha') >= 0 ? "recaptchaIconStyle skill-pill-image" : 
                skill.indexOf('Material') >= 0 ? "materialUiIconStyle skill-pill-image" : 
                skill.indexOf('Herok') >= 0 ? 'herokuIconStyle skill-pill-image' :
                skill.indexOf('git') >= 0 ? "gitIconStyle skill-pill-image" : "skill-pill-image"
            }>
            </span>
            <span>{skill}</span>
        </span>
    )
    return(
        <span className="skill-pills-container">
            {skills_eles}
       </span>
    )
}