import React, { Component } from 'react'
import './projects.scss';
import IMG from '../../assets/images/placeholder.png';

export default class Projects extends Component {
    render() {
        return (
            <section className="project-container">
                <div className="project project--first">
                    <p className="project__number">01</p>
                    <img src={IMG} className="project__image" alt="" />
                    <p className="project__title">Defqon.1 2019 - One Tribe</p>
                    <p className="project__skills"><b>Skills Used:</b> React, NPM, HTML5, CSS3, SASS</p>

                    <div className="project-cover__image project-cover__image--first">
                        <div className="project-cover project-cover--first">
                            
                        </div>
                    </div>
                </div>

                <div className="project">
                    <p className="project__number">02</p>
                    <img src={IMG} className="project__image" alt="" />
                    <p className="project__title">Defqon.1 2019 - One Tribe</p>
                    <p className="project__skills"><b>Skills Used:</b> React, NPM, HTML5, CSS3, SASS</p>

                    <div className="project-cover__image project-cover__image--second">
                        <div className="project-cover project-cover--second">
                            
                        </div>
                    </div>
                </div>

                <div className="project">
                    <p className="project__number">03</p>
                    <img src={IMG} className="project__image" alt="" />
                    <p className="project__title">Defqon.1 2019 - One Tribe</p>
                    <p className="project__skills"><b>Skills Used:</b> React, NPM, HTML5, CSS3, SASS</p>

                    <div className="project-cover__image project-cover__image--third">
                        <div className="project-cover project-cover--third">
                            
                        </div>
                    </div>
                </div>

                <div className="project">
                    <p className="project__number">04</p>
                    <img src={IMG} className="project__image" alt="" />
                    <p className="project__title">Defqon.1 2019 - One Tribe</p>
                    <p className="project__skills"><b>Skills Used:</b> React, NPM, HTML5, CSS3, SASS</p>

                    <div className="project-cover__image project-cover__image--fourth">
                        <div className="project-cover project-cover--fourth">
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
