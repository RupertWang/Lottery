import React, { Component} from "react";
import "./Ball.css";
class Ball extends Component{
    render(){
        return(
            <div class = "Ball">
                <p>{this.props.num}</p>
            </div>
        )
    }
}

export default Ball;