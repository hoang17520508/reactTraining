import React, { Component } from 'react';
import {connect} from 'react-redux';

 class SanPham extends Component {
    render() {

        
        let {sanPham}=this.props;
        return (
            <div>
                  <div className="card">
  <img className="card-img-top"  src={sanPham.hinhAnh} alt />
  <div className="card-body text-center">
        <h4 className="card-title">{sanPham.tenSP}</h4>
        <p className="card-text">{sanPham.donGia}</p>
    <button className="btn btn-success " onClick={()=>{this.props.themGioHang(sanPham)}}>Thêm giỏ hàng</button>
  </div>
</div>

            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    // dispatch là tham số từ redux trả ra(nó là hàm dể gửi giá trị lên store)
    return{
        themGioHang:(spClick)=>{
            const action ={
                type:'Them_Gio_Hang',
                sanPhamClick:{...spClick,soLuong:1}
                //thuộc tính thứ 2 llaf giá trị guwit len redux
            }
            dispatch(action);
            console.log('spClick',spClick);
        }
    }

}
//kết nối component với store
//tham số 1 của connect là mapStatetoProps nếu lấy dữ liệu vào từ store về thì để null
//tham số 2 của connect là mapdispatchtoprops hàm này sẽ tạo ra props là function đưa dữ liệu lên store
 export default connect(null, mapDispatchToProps)(SanPham)