import React, { Component } from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import git from '../../assets/icons/github-alt.svg';
import linked from '../../assets/icons/linkedin.svg';
import menu from '../../assets/images/m-menu-icon.svg';
import menuIcon from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close-white.svg';

export default class index extends Component {
    constructor (props) {
        super(props);

        this.state = {
            sidebarStatus: "sidebar",
            sidebarMobileStatus: false,
            sidebarTextDisplay: false,
            sidebarButtonDisplay: false,
            sidebarMenuDisplay: true,
            sidebarLogoDisplay: false,
            sidebarItemsDisplay: false,
            sidebarOpenDisplay: false,
            screenWidth: false
        };
    }

    componentDidMount () {
        let size = window.innerWidth;

        if (size <= 640) {
            this.setState({
                screenWidth: true
            })
        } else {
            this.setState({
                screenWidth: false
            })
        }
    }

    Open = () => {
        this.setState({
            sidebarStatus: "sidebar sidebar--full",
            sidebarMobileStatus: true,
            sidebarTextDisplay: false,
            sidebarMenuDisplay: false,
        });

        var a = setTimeout(() => {
            this.setState({
                sidebarButtonDisplay: true,
                sidebarLogoDisplay: true,
                sidebarItemsDisplay: true,
                sidebarOpenDisplay: true
            }, () => {
                clearTimeout(a);
                if (this.state.sidebarTextDisplay === true) {
                    this.setState({
                        sidebarTextDisplay: false
                    })
                }
            });
        }, 1000);
    }

    HoverOpen = () => {
        this.setState({
            sidebarStatus: "sidebar sidebar--expand",
        });
    }

    HoverClose = () => {
        if (this.state.sidebarStatus === "sidebar sidebar--expand") {
            this.setState({
                sidebarStatus: "sidebar"
            });
        }
    }

    Close = () => {
        this.setState({
            sidebarStatus: "sidebar",
            sidebarMobileStatus: false,
            sidebarButtonDisplay: false,
            sidebarMenuDisplay: true,
            sidebarLogoDisplay: false,
            sidebarItemsDisplay: false,
            sidebarOpenDisplay: false,
        });
    }

    render() {
        switch (this.state.screenWidth) {
            case true:
                return (
                    <>
                        <img className={this.state.sidebarMobileStatus === false ? "sidebar-mobile-col" : "sidebar-mobile-col sidebar-mobile-col--hide"} src={menu} alt="" />
                        <img className={this.state.sidebarMenuDisplay === true ? "sidebar__menu" : "sidebar__menu sidebar__menu--hide"} src={menuIcon} onClick={this.Open} alt="" />
                        <div className={this.state.sidebarMobileStatus === true ? "sidebar-mobile" : "sidebar-mobile sidebar-mobile--hide"}>
                            <img className={this.state.sidebarMobileStatus === true ? "sidebar__button sidebar__button--display" : "sidebar__button"} src={close} onClick={this.Close} alt="" />
                            <img className={this.state.sidebarLogoDisplay === true ? "sidebar__logo" : "sidebar__logo sidebar__logo--hide"} src={logo} alt="" />

                            <div className={this.state.sidebarItemsDisplay === false ? "sidebar-items" : "sidebar-items sidebar-items--display"}>
                                <div className={"sidebar-items-container"}>
                                    <Link to="/">
                                        <div className="sidebar-items-home item"> 
                                            <span className="sidebar-items__stripe sidebar-items__stripe--blue" />
                                            <p className="sidebar-items__text">Home</p>
                                        </div>
                                    </Link>
                                    <Link to="/projects">
                                        <div className="sidebar-items-project item">
                                            <span className="sidebar-items__stripe sidebar-items__stripe--purple" />
                                            <p className="sidebar-items__text">Projects</p>
                                        </div>
                                    </Link>
                                    <Link to="/about">
                                        <div className="sidebar-items-about item">
                                            <span className="sidebar-items__stripe sidebar-items__stripe--dark" />
                                            <p className="sidebar-items__text">About</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className={this.state.sidebarOpenDisplay === true ? "sidebar-icons-display" : "sidebar-icons-display sidebar-icons-display--hide"}>
                                <div className="sidebar-icons">
                                    <a href="https://github.com/MatthijsHoek"><img className="sidebar-icons__github" src={git} alt="" /></a>
                                    <a href="https://www.linkedin.com/in/matthijs-hoek-38981417b/"><img className="sidebar-icons__linkedin" src={linked} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </>
                )
            case false:
                return (
                    <>
                        <div className={this.state.sidebarStatus}>
                            <div className="sidebar-top">
                                <div className={this.state.sidebarOpenDisplay === false ? "sidebar-icons" : "sidebar-icons sidebar-icons--left"}>
                                    <img className="sidebar__logo" src={logo} alt="" />
                                </div> 
                            </div>
                            <div className="sidebar-mid">
                                <div className={this.state.sidebarMenuDisplay === true ? "menu" : "menu--hide"} onMouseEnter={this.HoverOpen} onMouseLeave={this.HoverClose} onClick={this.Open} >
                                    <span className="sidebar__menu" />
                                    <p className="sidebar__text">Menu</p>
                                </div>
    
                                <div className={this.state.sidebarItemsDisplay === false ? "sidebar-items" : "sidebar-items sidebar-items--display"}>
                                    <div className="sidebar-items-container">
                                        <Link to="/">
                                            <div className="sidebar-items-home item"> 
                                                <span className="sidebar-items__stripe sidebar-items__stripe--blue" />
                                                <p className="sidebar-items__text">Home</p>
                                            </div>
                                        </Link>
                                        <Link to="/projects">
                                            <div className="sidebar-items-project item">
                                                <span className="sidebar-items__stripe sidebar-items__stripe--purple" />
                                                <p className="sidebar-items__text">Projects</p>
                                            </div>
                                        </Link>
                                        <Link to="/about">
                                            <div className="sidebar-items-about item">
                                                <span className="sidebar-items__stripe sidebar-items__stripe--dark" />
                                                <p className="sidebar-items__text">About</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
    
                                <div className={this.state.sidebarButtonDisplay === false ? "sidebar__button" : "sidebar__button sidebar__button--display"} onClick={this.Close} />
                            </div>
                            <div className="sidebar-bot">
                                <div className={this.state.sidebarOpenDisplay === false ? "sidebar-icons sidebar-icons--regular" : "sidebar-icons sidebar-icons--left"}>
                                    <a href="https://github.com/MatthijsHoek"><img className="sidebar-icons__github" src={git} alt="" /></a>
                                    <a href="https://www.linkedin.com/in/matthijs-hoek-38981417b/"><img className="sidebar-icons__linkedin" src={linked} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </>
                )
            default:
                break;
        }
    }
}
