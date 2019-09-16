import React, { Component } from 'react'
import './about.scss';
import Parallel from '../../components/parallel';
import Placeholder from '../../assets/images/placeholder.png'

export default class About extends Component {
    constructor (props) {
        super(props);

        this.state = {
            screenWidth: false
        };
    }

    componentDidMount () {
        let size = window.innerWidth;

        if (size <= 1095) {
            this.setState({
                screenWidth: true
            })
        } else {
            this.setState({
                screenWidth: false
            })
        }
    }

    render() {
        return (
            <>
            {this.state.screenWidth === false ? (
                <>
                    <div className="about">
                        <div className="about__lines">
                            <div className="about-container">
                                <div className="about-info">
                                    <div className="about-name">
                                        <h2 className="about-name__text">Matthijs</h2>
                                        <h2 className="about-name__text about-name__text--last">Hoek</h2>
                                    </div>
                                    <Parallel 
                                        parallelClass="parallel-about"
                                        parallelTitle="Skills Used"
                                        parallelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                                    />
                                </div>
                                <div className="about-info about-info--small">
                                    <p className="about-info__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <img src={Placeholder} className="about-info__image" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="about">
                    <div className="about__lines">
                        <div className="about-container">
                            <div className="about-info">
                                <div className="about-name">
                                    <h2 className="about-name__text">Matthijs</h2>
                                    <h2 className="about-name__text about-name__text--last">Hoek</h2>
                                </div>
                                <img src={Placeholder} className="about-info__image" alt="" />
                                <p className="about-info__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p className="about-info__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <Parallel 
                                    parallelClass="parallel-about"
                                    parallelTitle="Skills Used"
                                    parallelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
                
            </>
        )
    }
}
