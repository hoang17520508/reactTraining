import React, { Component } from 'react'
import {connect} from 'react-redux'
 class Computer extends Component {
    render() {
        let keyframe=`@keyframes randomItem${Date.now()} {
            
            0% {top: 0px;}
            50% {top: 200px;}
            75% {top: 0px;}
            100% {top: 200px;}

          }`
        return (
            <div>
                <style>
                    {keyframe}
                </style>
                 <div className="theThink" style={{position:'relative'}}>
                
                <img style={{position:'absolute', animation:`randomItem${Date.now()} 2s`,transform:'rotate(120deg)',height:"100px",width:"100px"}}  src={this.props.computer.hinhAnh} />  
            
     </div>
     <div className="speech-bubble"></div>
    <img style={{height:"150px",width:"150px"}} src="./img/GameOanTuXi/playerComputer.png" />
                   
            </div>
        )
    }
}
const mapstatetoprops=state=>{
    return {
computer:state. stateBaiTapOanTuXi.computer,
    }
}
export default connect(mapstatetoprops)(Computer)