import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Parallel from '../../../components/parallel';
import '../single.scss';
import Close from '../../../assets/icons/close.svg';
import Chain from '../../../assets/icons/link.svg';
import Placeholder from '../../../assets/images/placeholder.png';
import ArrowTop from '../../../assets/icons/arrow-top.svg';

export default class Rubrics extends Component {
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

    ScrollTop = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <>
            {this.state.screenWidth === false ? (
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
                            <Parallel 
                                parallelClass="parallel-single"
                                parallelTitle="Skills Used"
                                parallelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
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
            ) : (
                <>
                    <section className="single">
                        <p className="single__background">03</p>
                        <Link to='/projects'>
                            <span className="single__circle"><img className="single__close" src={Close} alt="" /></span>
                        </Link>
                        <h1 className="single__title  single__title--hardtop">Rubrics</h1>
                        <p className="single-info__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida. Habitant morbi tristique senectus et netus. Massa enim nec dui nunc mattis enim ut.
                        </p>
                        <div className="single-link">
                            <img className="single-link__icon" src={Chain} alt="" />
                            <p className="single-link__text">View Website</p>
                        </div>
                        <img className="single__image" src={Placeholder} alt="" />
                        <Parallel 
                                parallelClass="parallel-single"
                                parallelTitle="Skills Used"
                                parallelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                        <h2 className="single__title single__title--small">Rubrics</h2>
                        <p className="single-info__text single-info__text--none">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida. Habitant morbi tristique senectus et netus. Massa enim nec dui nunc mattis enim ut.
                        </p>
                        <img className="single__image" src={Placeholder} alt="" />
                        <img className="single__image single__image--margin" src={Placeholder} alt="" />
                        <p className="single-info__text single-info__text--none">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <h2 className="single__title">Rubrics</h2>
                        <p className="single-info__text single-info__text--margin">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <img className="single__image" src={Placeholder} alt="" />
                        <img className="single__arrow" src={ArrowTop} alt="" onClick={this.ScrollTop} />
                    </section>
                </>
            )}
                
            </>
        )
    }
}
