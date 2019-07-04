import React, { Component } from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import git from '../../assets/icons/github-alt.svg';
import linked from '../../assets/icons/linkedin.svg';

export default class index extends Component {
    constructor (props) {
        super(props);

        this.state = {
            sidebarStatus: "sidebar",
            sidebarTextDisplay: false,
            sidebarButtonDisplay: false,
            sidebarMenuDisplay: true,
            sidebarLogoDisplay: false,
            sidebarItemsDisplay: false,
            sidebarIconsDisplay: false,
            timeout: 1000
        };
    }

    Open = () => {
        this.setState({
            sidebarStatus: "sidebar sidebar--full",
            sidebarTextDisplay: false,
            sidebarMenuDisplay: false,
        });

        var a = setTimeout(() => {
            this.setState({
                sidebarButtonDisplay: true,
                sidebarLogoDisplay: true,
                sidebarItemsDisplay: true,
                sidebarIconsDisplay: true
            }, () => {
                clearTimeout(a);
                if (this.state.sidebarTextDisplay === true) {
                    this.setState({
                        sidebarTextDisplay: false
                    })
                }
            });
        }, this.state.timeout);
    }

    HoverOpen = () => {
        if (this.state.sidebarStatus === "sidebar") {
            this.setState({
            sidebarStatus: "sidebar sidebar--expand",
        });

            var b = setTimeout(() => {
                this.setState({
                    sidebarTextDisplay: true,
                }, () => {
                    clearTimeout(b);
                });
            }, this.state.timeout);
        }
    }

    HoverClose = () => {
        if (this.state.sidebarStatus === "sidebar sidebar--expand") {
            this.setState({
                sidebarStatus: "sidebar",
                sidebarTextDisplay: false,
            });
        }

        // clearTimeout(b);
    }

    Close = () => {
        // clearTimeout(a);

        this.setState({
            sidebarStatus: "sidebar",
            sidebarTextDisplay: false,
            sidebarButtonDisplay: false,
            sidebarMenuDisplay: true,
            sidebarLogoDisplay: false,
            sidebarItemsDisplay: false,
            sidebarIconsDisplay: false,
        });
    }

    ItemHoverOn = (e) => {
        const item = e.target;

        item.children[0].classList.add('item-hovered');
        
        setTimeout(() => {
            item.children[1].classList.add('sidebar-items__text--white');
        }, this.state.timeout);
    }

    ItemHoverOff = (e) => {
        const item = e.target;

        item.children[0].classList.remove('item-hovered');
        item.children[1].classList.remove('sidebar-items__text--white');
        // clearTimeout(c);
    }

    render() {
        console.log(this.state.sidebarTextDisplay)
        return (
            <div className={this.state.sidebarStatus}>
                <div className="sidebar-icons">
                    <div className="sidebar-top">
                        <div className={this.state.sidebarIconsDisplay === false ? "sidebar-icons" : "sidebar-icons sidebar-icons--left sidebar-icons--more"}>
                            <span className="sidebar-icons__logo" />
                        </div>
                    </div>
                    <div className="sidebar-mid">
                        <div className="menu">
                            <div className={this.state.sidebarMenuDisplay === true ? "sidebar__menu" : "sidebar__menu sidebar__menu--hide"} onMouseEnter={this.HoverOpen} onMouseLeave={this.HoverClose} onClick={this.Open} />
                            <p className={this.state.sidebarTextDisplay === false ? "sidebar__text" : "sidebar__text sidebar__text--display"}>Menu</p>
                        </div>

                        <div className={this.state.sidebarItemsDisplay === false ? "sidebar-items" : "sidebar-items sidebar-items--display"}>
                            <div className={"sidebar-items-container"}>
                                <Link to="/home">
                                    <div className="sidebar-items-home item" onMouseEnter={this.ItemHoverOn} onMouseLeave={this.ItemHoverOff}> 
                                        <span className="sidebar-items__stripe sidebar-items__stripe--blue" />
                                        <p className="sidebar-items__text">Home</p>
                                    </div>
                                </Link>
                                <Link to="/projects">
                                    <div className="sidebar-items-project item" onMouseEnter={this.ItemHoverOn} onMouseLeave={this.ItemHoverOff}>
                                        <span className="sidebar-items__stripe sidebar-items__stripe--purple" />
                                        <p className="sidebar-items__text">Projects</p>
                                    </div>
                                </Link>
                                <Link to="/about">
                                    <div className="sidebar-items-about item" onMouseEnter={this.ItemHoverOn} onMouseLeave={this.ItemHoverOff}>
                                        <span className="sidebar-items__stripe sidebar-items__stripe--dark" />
                                        <p className="sidebar-items__text">About</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className={this.state.sidebarButtonDisplay === false ? "sidebar__button" : "sidebar__button sidebar__button--display"} onClick={this.Close} />
                    </div>
                    <div className="sidebar-bot">
                        <div className={this.state.sidebarIconsDisplay === false ? "sidebar-icons" : "sidebar-icons sidebar-icons--left"}>
                            
                            <img className="sidebar-icons__github" src={git} alt="" />
                            <img className="sidebar-icons__linkedin" src={linked} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
