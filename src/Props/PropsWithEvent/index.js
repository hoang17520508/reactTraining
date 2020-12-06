import React, { Component } from 'react'
import ProductList from './ProductList'

export default class PropsWithEvent extends Component {
    render() {
        return (
            <div >
               
                <h3 className="text-center"> Danh sách sản phẩm</h3>
                <div className="text-right">
                    <button className="btn btn-success" data-toggle="modal" data-target="#modelId"  >Giỏ hàng  </button>
                </div>
                 <ProductList/>
                 
            </div>
        )
    }
}
