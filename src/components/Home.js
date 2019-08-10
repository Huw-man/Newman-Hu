import React from "react";
import avatar from "../resources/images/myAvatar.svg";

export default function Home({dark}) {
    return (
        <div id={"home"} className={"section" + (dark ? " section-dark" : "")}>
            <img src={avatar}
                 className={"home-avatar"}
                 alt={"Logo"}
            />
        </div>
    );
}
