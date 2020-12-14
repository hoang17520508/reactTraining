import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="theThink">
                
                           <img style={{height:"100px",width:"100px"}} src="./img/GameOanTuXi/bao.png" />  
                       
                </div>
                <div className="speech-bubble"></div>
               <img style={{height:"150px",width:"150px"}} src="./img/GameOanTuXi/player.png" />
               <div className="row">
                   <div className="col-4">
                       <button className="btnItem">
                           <img src="./img/GameOanTuXi/bao.png" />
                       </button>
                   </div>
                   <div className="col-4">
                   <button className="btnItem">
                           <img src="./img/GameOanTuXi/keo.png" />
                       </button>
                   </div>
                   <div className="col-4">
                   <button className="btnItem">
                           <img src="./img/GameOanTuXi/bua.png" />
                       </button>
                   </div>
               </div>
            </div>
        )
    }
}
