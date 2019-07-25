import React, { Component } from 'react'
import './projects.scss';
import { Link } from 'react-router-dom';
import IMG from '../../assets/images/placeholder.png';

export default class Projects extends Component {
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
            <section className="project-container">
                {this.state.screenWidth === false ? (
                    <>
                        <div className="project project--first">
                            <p className="project__number">01</p>
                            <img src={IMG} className="project__image" alt="" />
                            <p className="project__title">Old Dance School Admin</p>
                            <p className="project__skills"><b>Skills Used:</b> HMTL5, SASS/SCSS, REACT.JS, REDUX, JEST, ENZYME, API, NPM, CSS MODULES, GIT, SCRUM</p>
                            <Link to={{
                                pathname: '/details',
                                numberProp: 1
                            }}>
                                <div className="project-cover__image project-cover__image--first">
                                    <div className="project-cover project-cover--first" />
                                </div>
                            </Link>
                        </div>

                        <div className="project">
                            <p className="project__number">02</p>
                            <img src={IMG} className="project__image" alt="" />
                            <p className="project__title">WorkPamoja</p>
                            <p className="project__skills"><b>Skills Used:</b> HMTL5, SASS/SCSS, REACT.JS, WEBPACK, TDD JEST, ENZYME, MOBX, NPM, CSS MODULES, GIT, SCRUM</p>

                            <Link to={{
                                pathname: '/details',
                                numberProp: 2
                            }}>
                                <div className="project-cover__image project-cover__image--second">
                                    <div className="project-cover project-cover--second" />
                                </div>
                            </Link>
                        </div>

                        <div className="project">
                            <p className="project__number">03</p>
                            <img src={IMG} className="project__image" alt="" />
                            <p className="project__title">Rubrics</p>
                            <p className="project__skills"><b>Skills Used:</b> HTML5, SASS/SCSS, JAVASCRIPT (ES6), NPM, LARAVEL BLADE, GIT, SCRUM</p>

                            <Link to={{
                                pathname: '/details',
                                numberProp: 3
                            }}>
                                <div className="project-cover__image project-cover__image--third">
                                    <div className="project-cover project-cover--third" />
                                </div>
                            </Link>
                        </div>

                        <div className="project">
                            <p className="project__number">04</p>
                            <img src={IMG} className="project__image" alt="" />
                            <p className="project__title">Coming in the future</p>
                            <p className="project__skills"><b>Skills Used:</b> -</p>

                            <div className="project-cover__image project-cover__image--fourth">
                                <div className="project-cover project-cover--fourth" />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="project project--first">
                            <img src={IMG} className="project__image" alt="" />
                            <div className="project--column">
                                <p className="project__number">01</p>
                                <p className="project__title">Old Dance School Admin</p>
                                <Link to={{
                                    pathname: '/details',
                                    numberProp: 1
                                }}>
                                    <div className="project-cover__image project-cover__image--first">
                                        <div className="project-cover project-cover--first" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="project">
                            <img src={IMG} className="project__image" alt="" />
                            <div className="project--column">
                                <p className="project__number">02</p>
                                <p className="project__title">WorkPamoja</p>

                                <Link to={{
                                    pathname: '/details',
                                    numberProp: 2
                                }}>
                                    <div className="project-cover__image project-cover__image--second">
                                        <div className="project-cover project-cover--second" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="project">
                            <img src={IMG} className="project__image" alt="" />
                            <div className="project--column">
                                <p className="project__number">03</p>
                                <p className="project__title">Rubrics</p>

                                <Link to={{
                                    pathname: '/details',
                                    numberProp: 3
                                }}>
                                    <div className="project-cover__image project-cover__image--third">
                                        <div className="project-cover project-cover--third" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="project">
                            <img src={IMG} className="project__image" alt="" />
                            <div className="project--column">
                                <p className="project__number">04</p>
                                <p className="project__title">Coming in the future</p>

                                <div className="project-cover__image project-cover__image--fourth">
                                    <div className="project-cover project-cover--fourth" />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section>
        )
    }
}
