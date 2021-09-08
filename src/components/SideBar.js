import React from 'react'
import { SideBarData } from './SideBarData';
import '../App.css';

function sideBar() {
    return (
        <div className="SideBar">
            <ul className="SideBarList">
                {SideBarData.map((val,key)=>{ return(

                    <li key={key} 
                        className = "row" 
                        id ={window.location.pathname == val.link ? "active" : ""} 
                        onClick ={()=> {
                            window.location.pathname = val.link
                        }}> 
                        <div id="icon"> {val.icon} </div>
                        <div id="title"> {val.title} </div>
                    </li>
                ) })
                }
            </ul>
        </div>
    )
}

export default sideBar;
