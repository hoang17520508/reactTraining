import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac';
import styleGame from './BaiTapGameXucXac.module.css';

export default class BaiTapGameXucSac extends Component {
    render() {
        return (
            <div className={`${styleGame.bgGame}`}>
                <h1 className="text-center  ">Bài Tập Game Xúc Xắc</h1>
                <XucXac/>
                <KetQua/>
            </div>
        )
    }
}
