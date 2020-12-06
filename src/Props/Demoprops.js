import React, { Component } from 'react'
import ProductRFC from './ProductRFC'

export default class Demoprops extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh Sách sản phẩm</h3>
                <div className="row">
                    <div className="col-3">
                        <ProductRFC name="Iphone" price="1200$" />
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Samsung" price="1200$" />
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Sony" price="1200$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Xiaomi" price="1200$" />
                    </div>
                </div>
            </div>
        )
    }
}
