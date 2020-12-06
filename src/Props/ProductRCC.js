import React, { Component } from 'react'

export default class ProductRCC extends Component {
    render() {

        // let tenSP=this.props.tenSP;

        //this. props là thuộc tính có sẵn của reaet class component dùng để nhận giấ  trị từ component cha truyền vào
        ////this.props thuộc tính không được gắn lại giá trị mới
        let {sanPham}=this.props;
        return (
            <div>
               <div className="card text-dark">
    <img className="card-img-top" src={sanPham.hinhAnh} alt />
    <div className="card-body">
        <h4 className="card-title">{sanPham.tenSP}</h4>
    <p className="card-text"></p>
    </div>
  </div>
            </div>
        )
    }
}
