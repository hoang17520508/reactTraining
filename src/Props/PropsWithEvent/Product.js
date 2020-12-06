import React, { Component } from 'react'

export default class Product extends Component {
    
    render() {
        const{prod,onViewDetailHander,onAddToCart}= this.props;
        return (
            <div className="col-4" >
                    <div className="card">
                        <img className="card-img-top  " src={prod.hinhAnh} height="300px" alt />
                        <div className="card-body">
                            <h4 className="card-title">{prod.tenSP}</h4>
                            <p className="card-text">{prod.giaBan}</p>
                            <button className="btn btn-success" onClick={()=>onViewDetailHander(prod)}>Xem chi tiết</button>
                            <button className="btn btn-danger ml-2" onClick={()=>onAddToCart(prod)} >Thêm giỏ hàng</button>
                        </div>
                    </div>
                </div>
        )
    }
}
