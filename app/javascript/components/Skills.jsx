import React from 'react';

export default function Skills(props){
    React.useEffect(() => {
        document.getElementById('skills-section').style.animation = "fadeIn linear .5s";
        document.getElementById('skills-section').style.opacity = "1"
    },[])
    return(
        <div className="skills-section" id="skills-section">
            <div className="skills-section-inner">
                <span className="skills-header-container">
                    <h3 className="skills-header">Skills and Familiarities</h3>
                    <p className="skills-quote">"You know like nunchuck skills, bow-hunting skills, computer-hacking skills..." <br /><i>-Napoleon Dynamite</i></p>
                    <p>Well... not quite.  But these are the libraries, frameworks, and packages I like to use.  This list isn't necessarily in a particular order, however these days I am more focused on the entries toward the top.</p>
                </span>
                <div className="skills-list">
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left ruby-on-rails-icon">

                            </div>
                            <div className="skill-desc right">
                                Ruby on Rails
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left reactjs-icon">

                            </div>
                            <div className="skill-desc right">
                                ReactJS
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left redux-icon">

                            </div>
                            <div className="skill-desc right">
                                Redux (React-Redux)
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left jwt-icon">

                            </div>
                            <div className="skill-desc right">
                                JWT
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left git-icon">

                            </div>
                            <div className="skill-desc right">
                                git
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left servicenow-icon">

                            </div>
                            <div className="skill-desc right">
                                ServiceNow
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left p5-icon">

                            </div>
                            <div className="skill-desc right">
                                p5.js
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left angular-icon">

                            </div>
                            <div className="skill-desc right">
                                AngularJS
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left node-icon">

                            </div>
                            <div className="skill-desc right">
                                NodeJS
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left vanillajs-icon">

                            </div>
                            <div className="skill-desc right">
                                Vanilla Javascript
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left jquery-icon">

                            </div>
                            <div className="skill-desc right">
                                jQuery
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left bootstrap-icon">

                            </div>
                            <div className="skill-desc right">
                                Bootstrap
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left materialui-icon">

                            </div>
                            <div className="skill-desc right">
                                Material-UI
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-body">
                            <div className="skill-icon left recaptcha-icon">

                            </div>
                            <div className="skill-desc right">
                                ReCaptcha
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}