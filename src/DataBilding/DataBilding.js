import React from 'react'

export default function DataBilding() {

    //binding biến(đối tượng biến cơ bản)
    const title='CyberSoft';
    const imgSrc='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png';
    const sinhVien ={
        maSV:'001',
        tenSinhVien:'Nguyễn Văn A',
        hinhAnh:'https://media.laodong.vn/Storage/NewsPortal/2020/2/28/787451/De-Thi.jpg'
    }


    //binding hàm
    const renderImg=()=>{
        return <div>
        <h3>Hình ảnh</h3>
        <img src={sinhVien.hinhAnh} width="200" height="200" />
    </div>
    }
    return (
        <div className="container">
            <h3>Databinding</h3>
            <p id="title" className="display-4">Tiêu đề: {title}</p>
            <img src={imgSrc} width="200" height="200" alt="123.jpg" />
            <input className="form-control w-25" value={title} />
            <hr />
            <h3>Thông tin sinh viên</h3>
            <div className="card" style={{width:200,height:200}}>
                <img className="card-img-top" src={sinhVien.hinhAnh} alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{sinhVien.tenSinhVien}</h4>
                    <p className="card-text">Mã SinhVien: {sinhVien.maSV}</p>
                </div>

            </div>
            <hr />
            <div className="mt-5">
            {renderImg()}
            </div>
        </div>
    )
}

