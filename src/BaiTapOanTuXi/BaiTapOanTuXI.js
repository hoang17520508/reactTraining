import React, { Component } from 'react';
import './buble.css'
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import Player from './Player';
import {connect} from 'react-redux'

 class BaiTapOanTuXI extends Component {
    render() {
      
        return (
            <div className="gameOanTuXi text-center" >
               
                <div className="row text-center">
                    <div className="col-4"><Player/></div>
                    <div className="col-4"><KetQuaTroChoi/>
                    <button className="btn btn-success " onClick={()=>{
                        this.props.playGame()
                    }}>Play Game</button></div>
                    <div className="col-4"><Computer/></div>
                    
                </div>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        
        playGame:()=>{
            let count=50;
            let randomComputerItem=setInterval(()=>{
                dispatch({
                    type:'RAN_DOM'
                }
                )
                count++;
                if(count>100){
                    clearInterval(randomComputerItem);
                    dispatch({
                        type:'END_GAME',
                    })
                }
            },100)
            

        }

    }
}
export default connect(null,mapDispatchToProps)(BaiTapOanTuXI)