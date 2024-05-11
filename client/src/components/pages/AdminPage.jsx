import React from "react";
import '../components.css'
import {Outlet,NavLink} from 'react-router-dom'
const AdminPage=()=>{
    return(
        <div className="adminpage-main">
          <div className="adminpage-navs">
                <NavLink to={"/adminpage/addproject"}>
                    AddProject
                </NavLink>
                <NavLink to={"/adminpage/deleteproject"}>
                    Deleteproject
                </NavLink>
          </div>
          <div className="adminpage-outlet">
            <Outlet></Outlet>
          </div>
        </div>
    )
}
export default AdminPage