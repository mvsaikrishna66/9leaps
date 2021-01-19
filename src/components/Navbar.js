import { render } from '@testing-library/react';
import React,{useState} from 'react';
import '../App.css';
import {Navbardata} from './Navbardata';

function Navbar(){
    
    return( <div className="sidebarr">
       
        <img id="image" alt="profilepic" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"></img>
        <p id="empname">Your Name</p>
        <ul className="navbarlist" >
        {Navbardata.map((val,key)=>{
        return(
            <li className="row" key={key}
            id={window.location.pathname==val.link? "active":""}
            onClick={()=>{
            window.location.pathname=val.link 
            }} >
            {""}
            <div id='icon'>{val.icon}</div>{""}
            <div id='title'>{val.title}</div></li>
        );

        })}
    </ul>
    </div>
    );}
export default Navbar