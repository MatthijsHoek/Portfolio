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
                            <Link to="/ODSA">
                                <div className="project-cover">
                                    <img src={IMG} className="project-cover__image" alt="" />
                                    <div className="project-cover-color project-cover-color--first" />
                                </div>
                            </Link>
                        </div>

                        <div className="project">
                            <p className="project__number">02</p>
                            <img src={IMG} className="project__image" alt="" />
                            <p className="project__title">WorkPamoja</p>
                            <p className="project__skills"><b>Skills Used:</b> HMTL5, SASS/SCSS, REACT.JS, WEBPACK, TDD JEST, ENZYME, MOBX, NPM, CSS MODULES, GIT, SCRUM</p>

                            <Link to="/workpamoja">
                                <div className="project-cover">
                                    <img src={IMG} className="project-cover__image" alt="" />
                                    <div className="project-cover-color project-cover-color--second" />
                                </div>
                            </Link>
                        </div>

                        <div className="project">
                            <p className="project__number">03</p>
                            <img src={IMG} className="project__image" alt="" />
                            <p className="project__title">Rubrics</p>
                            <p className="project__skills"><b>Skills Used:</b> HTML5, SASS/SCSS, JAVASCRIPT (ES6), NPM, LARAVEL BLADE, GIT, SCRUM</p>

                            <Link to="rubrics">
                                <div className="project-cover">
                                    <img src={IMG} className="project-cover__image" alt="" />
                                    <div className="project-cover-color project-cover-color--third" />
                                </div>
                            </Link>
                        </div>

                        <div className="project">
                            <p className="project__number">04</p>
                            <img src={IMG} className="project__image" alt="" />
                            <p className="project__title">Coming in the future</p>
                            <p className="project__skills"><b>Skills Used:</b> -</p>

                            <div className="project-cover">
                                <img src={IMG} className="project-cover__image" alt="" />
                                <div className="project-cover-color project-cover-color--fourth" />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Link className="project__link" to="/ODSA">
                            <div className="project project--first">
                                <img src={IMG} className="project__image" alt="" />
                                <div className="project--column">
                                    <p className="project__number">01</p>
                                    <p className="project__title">Old Dance School Admin</p>
                                </div>
                            </div>
                        </Link>

                        <Link className="project__link" to="/workpamoja">
                            <div className="project">
                                <img src={IMG} className="project__image" alt="" />
                                <div className="project--column">
                                    <p className="project__number">02</p>
                                    <p className="project__title">WorkPamoja</p>
                                </div>
                            </div>
                        </Link>

                        <Link className="project__link" to="/rubrics">
                            <div className="project">
                                <img src={IMG} className="project__image" alt="" />
                                <div className="project--column">
                                    <p className="project__number">03</p>
                                    <p className="project__title">Rubrics</p>
                                </div>
                            </div>
                        </Link>

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
