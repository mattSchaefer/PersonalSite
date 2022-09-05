import React from 'react';
import {Link} from 'react-router-dom';
import SkillsPills from '../components/SkillsPills';
export default function Projects(props){
    const ghostButtonV1 = {background: 'none',border: 'none',color: '#0d6efd', textDecoration: 'underline',}
    React.useEffect(()=>{
        document.getElementById('projects-section').style.animation = "fadeIn linear .5s";
        document.getElementById('projects-section').style.opacity = "1"
    },[])
    return(
        <div className="projects-section" id="projects-section">
            <div className="projects-section-inner">
                <span className="projects-header-container">
                    <h3 className="projects-header">Projects</h3>
                </span>
                <div className="projects-list">
                    <div className="project">
                        <div className="project-body">
                            <div className="project-image-container friendly-worm-farm-image">

                            </div>
                            <div className="project-desc-container">
                                <h4>FriendlyWormFarm</h4>
                                <p>A p5.js-utilizing canvas element allows users to create and export "worms" (which are really png images consisting of a series of ellipses) once an account is created and verified via email address.  Verified users can save, delete, and export their own worms, and they can favorite or unfavorite worms created by other users. This application was built on Ruby on Rails and utilizes ReactJS, JWT, and many more javascript libraries, along with React-Redux for state management.</p>
                            </div>
                        </div>
                        <a className="wormfarmlink" href="http://www.friendlywormfarm.com" target="_blank"><button style={ghostButtonV1}>visit friendlywormfarm.com</button></a>
                        <div className="project-footer">
                            <SkillsPills skills="Ruby on Rails,ReactJS,React-Redux,JWT,Rails Mailer,p5.js,ReCaptcha,Material-UI,Heroku,git" />
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-body">
                            <div className="project-image-container emoji-placeholder">
                                💧
                            </div>
                            <div className="project-desc-container">
                            <h4>PostureCheck</h4>
                            <p>Ruby on Rails/ReactJS/JWT application. Sometimes to form a habbit, we just need a little simple matter-of-fact encouragement.  Users sign up to have daily reminders to mind their posture, drink water, take vitamins, exercise, etc.</p>
                            </div>
                        </div>
                        <p className="coming-soon">coming soon!</p>
                        <div className="project-footer">
                        <SkillsPills skills="Ruby on Rails,ReactJS,JWT" />
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-body">
                            <div className="project-image-container emoji-placeholder">
                                🌭
                            </div>
                            <div className="project-desc-container">
                                <h4>Is a Hotdog a Sandwich?</h4>
                                <p>Ruby on Rails/ReactJS open survey.  I absolutely do not believe a hotdog to be a sandwich, but I am curious what the general public thinks about the matter.  I had originally built this application on the MEAN stack, but that was a while ago and the UI is a bit... dated :) so I'm re-doing it.  These days I'm more of a fan of Ruby, anyways.</p>
                            </div>
                        </div>
                        <a className="wormfarmlink" href="http://isahotdogasandwich.dog" target="_blank"><button style={ghostButtonV1}>visit isahotdogasandwich.dog</button></a>
                        <div className="project-footer">
                            <SkillsPills skills="Ruby on Rails,ReactJS,JWT" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
