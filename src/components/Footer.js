import React from "react";
import bckgnd from "../resources/xp_background.jpg"

export default function Footer({dark}) {
    return (
        <div id={'footer'}
             className={"section" + (dark ? " section-dark" : "")}>
            <img
                src={bckgnd}
                alt={'footer background'}
            />
        </div>
    );

}