import React, { Component } from 'react';
import './home.scss';
import Dot from '../../assets/images/dot.svg';

export default class Home extends Component {
    render() {
        return (
            <section class="home">
                <div class="home__lines">
                    <div class="home-title">
                        <h1 class="home-title__text">Hello</h1>
                        <img class="home-title__dot" src={Dot} alt="" />
                    </div>
                    <div class="home-name">
                        <h2 class="home-name__text">I am Matthijs</h2>
                    </div>
                    <div class="home-role">
                        <h2 class="home-role__text">Front-End Developer</h2>
                    </div>
                </div>
            </section>
        )
    }
}
