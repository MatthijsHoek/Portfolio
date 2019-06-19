import React, { Component } from 'react';
import './sidebar.scss';

export default class index extends Component {
    constructor (props) {
        super(props);

        this.state = {
            sidebarStatus: "sidebar",
            sidebarTextDisplay: "sidebar__text",
            sidebarButtonDisplay: "sidebar__button"
        };
    }

    Open = () => {
        this.setState({
            sidebarStatus: "sidebar sidebar--full",
            sidebarTextDisplay: "sidebar__text"
        });

        setTimeout(() => {
            this.setState({
                sidebarButtonDisplay: "sidebar__button sidebar__button--display"
            });
        }, 1000);
    }

    HoverOpen = () => {
        if (this.state.sidebarStatus === "sidebar") {
            this.setState({
                sidebarStatus: "sidebar sidebar--expand"
            });
    
            setTimeout(() => {
                this.setState({
                    sidebarTextDisplay: "sidebar__text sidebar__text--display"
                });
            }, 1000);
        }
    }

    HoverClose = () => {
        if (this.state.sidebarStatus === "sidebar sidebar--expand") {
            this.setState({
                sidebarStatus: "sidebar",
                sidebarTextDisplay: "sidebar__text"
            });
        } 
    }

    Close = () => {
        this.setState({
            sidebarStatus: "sidebar",
            sidebarTextDisplay: "sidebar__text",
            sidebarButtonDisplay: "sidebar__button"
        });
    }

    render() {

        return (
            <div className="container container--home">
                <div className={this.state.sidebarStatus}>
                    <div className="sidebar-top">
                        <div className="sidebar__logo" />
                    </div>
                    <div className="sidebar-mid">
                        <div className="menu" onMouseEnter={this.HoverOpen} onMouseLeave={this.HoverClose} onClick={this.Open}>
                            <div className="sidebar__menu" />
                            <p className={this.state.sidebarTextDisplay}>Menu</p>
                        </div>
                        <div className={this.state.sidebarButtonDisplay} onClick={this.Close} />
                    </div>
                    <div className="sidebar-bot">
                        <div className="sidebar-wrapper">
                            <div className="sidebar__linkedin" />
                            <div className="sidebar__github" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
