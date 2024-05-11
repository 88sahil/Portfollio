import React from "react";
import './components.css'
const PageLabel=({name,icon})=>{
    return(
        <div className="page-label">{icon}
            {name}
        </div>
    )
}
export default PageLabel