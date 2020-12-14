import React, { Component } from 'react'
import { connect } from 'react-redux'

 class TableSInhVien extends Component {
  renderSinhVien=()=>{
    return this.props.mangSinhVien.map((sinhVien,index)=>{
      return <tr key={index}>
<td>{sinhVien.maSinhVien}</td>
  <td>{sinhVien.tenSinhVien}</td>
  <td>{sinhVien.soDienThoai}</td>
  <td>{sinhVien.email}</td>
  <td>
    <button className="btn btn-danger " >Xóa</button>
    <button className="btn btn-primary ml-1" onClick={()=>{
      this.props.dispatch({
        type:'SUA_SINH_VIEN',
        sinhVienSua:sinhVien
      })
    }}>Sửa</button>
  </td>
      </tr>
    })
  }
    render() {

    
        return (
            <div>
               <table className="table ">
  <thead>
    <tr className="bg-dark text-white">
      <th>Mã Sinh Viên</th>
      <th>Họ Tên</th>
      <th>Số Điện Thoại</th>
      <th>Email</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
   {this.renderSinhVien()}
    
  </tbody>
</table>

            </div>
        )
    }
}

//()=>{return{}}=()=>({})
//ví dụ ()=>{return<div></div>} viết theo cách khác là ()=>(<div></div>)
const mapstatetoprop=(state)=>{
  return{
    mangSinhVien:state.stateQuanLySinhVien.mangSinhVien
  }
}
export default connect(mapstatetoprop)(TableSInhVien)
