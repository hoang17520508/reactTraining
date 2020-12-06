import React, { Component } from 'react'
import {connect} from 'react-redux'

 class XucXac extends Component {

    renderXuatXac=()=>{
        return this.props.mangXucXac.map((xucXac,index)=>{
            return <img key={index} src={xucXac.hinhAnh} width="50px" height="50px" />
        })
    }
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <button className="btn btn-danger p-5 "><span className="display-4">Tài</span></button>
                    </div>
                    <div className="col-4">
                  {this.renderXuatXac()}
                    </div>
                    <div className="col-4">
                    <button className="btn btn-danger p-5"><span className="display-4">Xỉu</span></button>
                    </div>

                </div>
                
            </div>
        )
    }
}
//tap ham mapstatetoprops lấy gia tri tu store ve
const mapstatetoprops=(state)=>{
    return {
        mangXucXac:state.stateGameXucXac.mangXucXac
    }
}
export default connect(mapstatetoprops)(XucXac);
