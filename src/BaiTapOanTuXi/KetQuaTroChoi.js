import React, { Component } from 'react'
import {connect} from 'react-redux'
 class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">{this.props.ketQua}</div>
                <div className="display-4 text-success">Số Bàn Thắng:<span className="text-warning">{this.props.soBanThang}</span></div>
                <div className="display-4 text-success">Số Bàn Chơi:<span className="text-warning">{this.props.soBanChoi}</span></div>
               
            </div>
        )
    }
}
const mapstatetoprops=state=>{
    return {
        ketQua:state. stateBaiTapOanTuXi.ketqua,
        soBanThang:state. stateBaiTapOanTuXi.soBanThang,
soBanChoi:state. stateBaiTapOanTuXi.soBanChoi,
    }
}
export default connect(mapstatetoprops)(KetQuaTroChoi);