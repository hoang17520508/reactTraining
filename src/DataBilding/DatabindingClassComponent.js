import React, { Component } from 'react';

class DatabindingClassComponent extends Component {

    sinhVien={
        ma:'001',
        ten:'Nguyễn Văn Tèo',
        hinhAnh:'https://media.laodong.vn/Storage/NewsPortal/2020/2/28/787451/De-Thi.jpg'
    }
    renderPicture=()=>{
        return <img src={this.sinhVien.hinhAnh} width="300" height="300" alt="321"/>
    }
    render() {


        const  title='Front end 54';
        const RenderTitle=()=>{
        return <p className="text-danger">{title}</p>
        }
        return (
            <div>
                <h3>DatabindingClassComponent</h3>
        <p>{title}</p>
        {RenderTitle()}
        <h3>Thông tin sinh viên</h3>
        <ul>
        <li>Mã Sinh viên:{this.sinhVien.ma}</li>
        <li>Tên Sinh Viên:{this.sinhVien.ten}</li>
        <li><img src={this.sinhVien.hinhAnh} width="200" height="200"/></li>
        <li>{this.renderPicture()}</li>
        </ul>
            </div>
        );
    }
}

export default DatabindingClassComponent;