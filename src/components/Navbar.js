import React, {Component} from "react";
import avatar from "../resources/images/myAvatar.svg"
import {animateScroll as scroll, Link} from "react-scroll";

class Navbar extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav className={"nav"} id={"navbar"}>
                <div className="nav-content">
                    <header>Newman Hu</header>
                    <img src={avatar}
                    className={"nav-logo"}
                    alt={"Logo"}
                    onClick={this.scrollToTop}
                    />
                    <ul className={"nav-items"}>
                        <li className={'nav-item'}>
                            <Link
                                activeClass={'active'}
                                to={'home'}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link
                                activeClass="active"
                                to="aboutMe"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About Me
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link
                                activeClass="active"
                                to="resume"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Resume
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                        {/*<li className={"nav-item"}>*/}
                        {/*    <Link*/}
                        {/*        activeClass="active"*/}
                        {/*        to="section5"*/}
                        {/*        spy={true}*/}
                        {/*        smooth={true}*/}
                        {/*        offset={-70}*/}
                        {/*        duration={500}*/}
                        {/*    >*/}
                        {/*        Section 5*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar