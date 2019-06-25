import React, { Component } from 'react';
import './home.scss';
import Dot from '../../assets/images/dot.svg';

export default class Home extends Component {
    render() {
        return (
            <section className="home">
                <div className="home__lines">
                    <div className="home-title">
                        <h1 className="home-title__text">Hello</h1>
                        <img className="home-title__dot" src={Dot} alt="" />
                    </div>
                    <div className="home-name">
                        <h2 className="home-name__text">I am Matthijs</h2>
                    </div>
                    <div className="home-role">
                        <h2 className="home-role__text">Front-End Developer</h2>
                    </div>
                </div>
            </section>
        )
    }
}
