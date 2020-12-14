import React, { Component } from 'react';
import './buble.css'
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import Player from './Player';

export default class BaiTapOanTuXI extends Component {
    render() {
        return (
            <div className="gameOanTuXi text-center">
                <div className="row">
                    <div className="col-4"><Player/></div>
                    <div className="col-4"><KetQuaTroChoi/></div>
                    <div className="col-4"><Computer/></div>
                </div>
            </div>
        )
    }
}
