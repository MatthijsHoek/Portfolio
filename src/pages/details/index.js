import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './single.scss';
import Close from '../../assets/icons/close.svg';
import Chain from '../../assets/icons/link.svg';
import Placeholder from '../../assets/images/placeholder.png';
import ArrowTop from '../../assets/icons/arrow-top.svg';

export default class Details extends Component {
    constructor (props) {
        super(props);
        console.log(props.location.numberProp);
    }

    ScrollTop = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
    }

    render() {
        switch (this.props.location.numberProp) {
            case 1:
                return (
                    <>
                        <p className="single__background">01</p>
                        <Link to='/projects'>
                            <span className="single__circle"><img className="single__close" src={Close} alt="" /></span>
                        </Link>
                        <section className="single">
                            <h1 className="single__title">Old Dance School Admin</h1>
                            <div className="single-content">
                                <div className="single-info">
                                    <p className="single-info__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida. Habitant morbi tristique senectus et netus. Massa enim nec dui nunc mattis enim ut.
                                    </p>
                                    <div className="single-link">
                                        <img className="single-link__icon" src={Chain} alt="" />
                                        <p className="single-link__text">View Website</p>
                                    </div>
                                </div>
                                <div className="single-skills">
                                    <h3 className="single-skills__title">Skills Used</h3>
                                    <p className="single-skills__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>

                            <img className="single__image" src={Placeholder} alt="" />

                            <div className="single-content">
                                <h2 className="single__title single__title--small">Old Dance School Admin</h2>
                                <p className="single-info__text single-info__text--none">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida. Habitant morbi tristique senectus et netus. Massa enim nec dui nunc mattis enim ut.
                                </p>
                            </div>

                            <img className="single__image" src={Placeholder} alt="" />

                            <div className="single-content">
                                <img className="single__image single__image--small" src={Placeholder} alt="" />
                                <p className="single-info__text single-info__text--center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>

                            <div className="single-content single-content--bottom">
                                <div className="single-content-column">
                                    <h2 className="single__title single__title--normal">Old Dance School Admin</h2>
                                    <p className="single-info__text single-info__text--topless">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <img className="single__image single__image--small" src={Placeholder} alt="" />
                            </div>

                            <img className="single__arrow" src={ArrowTop} alt="" onClick={this.ScrollTop} />
                        </section>
                    </>
                )
        
            case 2:
                return (
                    <>
                        <p className="single__background">02</p>
                        <Link to='/projects'>
                            <span className="single__circle"><img className="single__close" src={Close} alt="" /></span>
                        </Link>
                        <section className="single">
                            <h1 className="single__title">WorkPamoja</h1>
                            <div className="single-content">
                                <div className="single-info">
                                    <p className="single-info__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida. Habitant morbi tristique senectus et netus. Massa enim nec dui nunc mattis enim ut.
                                    </p>
                                    <div className="single-link">
                                        <img className="single-link__icon" src={Chain} alt="" />
                                        <p className="single-link__text">View Website</p>
                                    </div>
                                </div>
                                <div className="single-skills">
                                    <h3 className="single-skills__title">Skills Used</h3>
                                    <p className="single-skills__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>

                            <img className="single__image" src={Placeholder} alt="" />

                            <div className="single-content">
                                <h2 className="single__title single__title--small">WorkPamoja</h2>
                                <p className="single-info__text single-info__text--none">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida. Habitant morbi tristique senectus et netus. Massa enim nec dui nunc mattis enim ut.
                                </p>
                            </div>

                            <img className="single__image" src={Placeholder} alt="" />

                            <div className="single-content">
                                <img className="single__image single__image--small" src={Placeholder} alt="" />
                                <p className="single-info__text single-info__text--center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>

                            <div className="single-content single-content--bottom">
                                <div className="single-content-column">
                                    <h2 className="single__title single__title--normal">WorkPamoja</h2>
                                    <p className="single-info__text single-info__text--topless">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <img className="single__image single__image--small" src={Placeholder} alt="" />
                            </div>

                            <img className="single__arrow" src={ArrowTop} alt="" onClick={this.ScrollTop} />
                        </section>
                    </>
                )
            case 3:
                return (
                    <>
                        <p className="single__background">02</p>
                        <Link to='/projects'>
                            <span className="single__circle"><img className="single__close" src={Close} alt="" /></span>
                        </Link>
                        <section className="single">
                            <h1 className="single__title">Rubrics</h1>
                            <div className="single-content">
                                <div className="single-info">
                                    <p className="single-info__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida. Habitant morbi tristique senectus et netus. Massa enim nec dui nunc mattis enim ut.
                                    </p>
                                    <div className="single-link">
                                        <img className="single-link__icon" src={Chain} alt="" />
                                        <p className="single-link__text">View Website</p>
                                    </div>
                                </div>
                                <div className="single-skills">
                                    <h3 className="single-skills__title">Skills Used</h3>
                                    <p className="single-skills__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>

                            <img className="single__image" src={Placeholder} alt="" />

                            <div className="single-content">
                                <h2 className="single__title single__title--small">Rubrics</h2>
                                <p className="single-info__text single-info__text--none">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida. Habitant morbi tristique senectus et netus. Massa enim nec dui nunc mattis enim ut.
                                </p>
                            </div>

                            <img className="single__image" src={Placeholder} alt="" />

                            <div className="single-content">
                                <img className="single__image single__image--small" src={Placeholder} alt="" />
                                <p className="single-info__text single-info__text--center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>

                            <div className="single-content single-content--bottom">
                                <div className="single-content-column">
                                    <h2 className="single__title single__title--normal">Rubrics</h2>
                                    <p className="single-info__text single-info__text--topless">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <img className="single__image single__image--small" src={Placeholder} alt="" />
                            </div>

                            <img className="single__arrow" src={ArrowTop} alt="" onClick={this.ScrollTop} />
                        </section>
                    </>
                )
            default:
                break;
        }
    }
}
