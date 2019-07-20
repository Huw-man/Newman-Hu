import React, {Component} from "react";
import avatar from "../resources/myAvatar.svg";

class Home extends Component {

    render() { return (
        <div id={"home"}>
            <img src={avatar}
                 className={"home-avatar"}
                 alt={"Logo"}
            />
        </div>
    );
    }
}

export default Home