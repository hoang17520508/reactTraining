import React, { Component } from 'react';

//import thư viện kết nối với redux store
import {connect} from 'react-redux';

 class GioHang extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center display-4">Giỏ hàng</h1>
                <table className="table">
                    <thead>
                       <tr>
                       <th>Mã sp</th>
                        <th>Tên sp</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th> Thành tiền</th>
                        <th></th>
                       </tr>
                    </thead>
                    <tbody>
                        {this.props.gioHang.map((spGH,index)=>{
                            return <tr key={index}>
                                <td>{spGH.maSP}</td>
                        <td>{spGH.tenSP}</td>
                        <td><img width="100px" height="100px" src={spGH.hinhAnh}/></td>
                        <td>{spGH.soLuong}</td>
                        <td>{spGH.donGia}</td>
                        <td>{spGH.donGia}</td>

                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

//định nghĩa hàm lấy state từ reduxx về biến thành props của react component
const mapStatetoProps=(state)=>{
    //state đại diện cho rootruducer

    return {
        gioHang:state.stateGioHang.gioHang
    }
}

//kết nối với react component với redux store tạo ra 1 conponent mới export ra ngoài
export default connect(mapStatetoProps)(GioHang);
