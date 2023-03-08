import React from "react";
import icons from "../icons"

function Iconcard() {
    return(
        <div className="icons">
          {icons.map((item) => {
            return(
                <div className="places">
                    <a href="javascript:void(0);">
                        {item.icon}
                        <p>{item.pText}</p>
                    </a>
                </div>
            )
          })}
        </div>
    )
}

export default Iconcard;