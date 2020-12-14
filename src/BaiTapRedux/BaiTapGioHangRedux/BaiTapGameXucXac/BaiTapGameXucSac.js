import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac';
import styleGame from './BaiTapGameXucXac.module.css';
import {connect} from 'react-redux'

 class BaiTapGameXucSac extends Component {
    render() {
        return (
            <div className={`${styleGame.bgGame} text-center`}>
                <h1 className="text-center  ">Bài Tập Game Xúc Xắc</h1>
                <XucXac/>
                <KetQua/>
                <button className="btn btn-warning" onClick={()=>{
                    this.props.dispatch({
                        type:'RAMDOM_XUC_SAC',
                     
                    })
                }}> Play Game</button>
            </div>
        )
    }
}

export default connect( )(BaiTapGameXucSac)
