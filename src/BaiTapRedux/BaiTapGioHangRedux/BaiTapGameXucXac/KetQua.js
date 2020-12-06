import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        return (
            <div className="container text-center">
                <h1 className="display-4">Ban chon:<span className="display-4 text-success">Tài</span></h1>
                <h1 className="display-4">Số bàn thắng:<span className="display-4 text-warning">Tài</span></h1>
                <h1 className="display-4">Số bàn chơi:<span className="display-4 text-danger">Tài</span></h1>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        datCuoc: state.stateGameXucXac.datCuoc,
        soBanThang: state.stateGameXucXac.soBanThang,
        soBanThang: state.stateGameXucXac.soBanChoi, 
    }
}
export default connect(mapStateToProps)(KetQua)