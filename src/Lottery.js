import React, { Component } from 'react'
import Ball from "./Ball"

class Lottery extends Component{
    static defaultProps = {
        title : "Lotto",
        numBalls : 6,
        maxNum : 40
    }
    constructor(props){
        super(props);
        this.state = {
             nums: Array.from({ length: this.props.numBalls }) 
        };
        //this.generateNums = this.generateNums.bind(this);
        //this.generateRandomNums = this.generateRandomNums.bind(this);
        //this.modifyNums = this.modifyNums.bind(this);
        this.generate = this.generate.bind(this);
        //this.handleClick = this.handleClick.bind(this);
    }
    generate(){
        this.setState(prevState => ({
            nums : prevState.nums.map(num => Math.floor(Math.random() * this.props.maxNum) + 1)
        }));
    }
    // handleClick(){
    //     this.generate();
    // }
    // generateNums(){
    //     let newNums = [];
    //     for(let i = 0; i < this.props.numBalls; i++){
    //         newNums[i] = this.generateRandomNums();
    //     }
    //     return ({
    //         nums : newNums
    //     })
    // }
    // generateRandomNums(){
    //     return(
    //         Math.floor(Math.random() * this.props.maxNum +1)
    //     )
    // }
    // modifyNums(){
    //     this.setState(this.generateNums())
    //}
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <ul>
                    {this.state.nums.map((num) => <Ball num = {num} />)}
                </ul>
                <button onClick = {this.generate}>Generate</button>
            </div>  
        )
    }
}

export default Lottery;