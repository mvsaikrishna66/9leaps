import React, {Component} from 'react';
import '../App.css';
import MenuButton from './menubutton';

class Mainblock extends Component{
    render(props){
    return(
        <div className="content">
            <div id="month">
            <h1>Wall  of Fame</h1>
            <h2>{this.props.month} {this.props.year}</h2>
            </div>
            <img id="cup" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqi7gVmky8IsWUVsy33XBgQnIkJzo1s1t6Nw&usqp=CAU"></img>
            <div id="descrip">
            <p>The Winner is {this.props.name}</p>
            <p>Project: {this.props.project}</p>
            <p>Project Mentor: {this.props.mentor}</p>
            </div>
        </div>
    );
    }
}
export default Mainblock;