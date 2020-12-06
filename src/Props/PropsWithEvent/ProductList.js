import React, { Component } from 'react'
import productList from '../Data/productList.json'
import Modal from './Modal';
import Product from './Product';
export default class ProductList extends Component {
    state = {
        productDetail: productList[0],
        cart: [
          
        ]
    }
    renderProductListHander = () => {
        return productList.map((product, index) => {
            return (
                <Product key={index} prod={product} onViewDetailHander={this.viewDetailHander} onAddToCart={this.addToCartHandler} />
            );
        });
    };
    viewDetailHander = (product) => {
        this.setState({
            productDetail: product
        })
        console.log(product);


    }

    addToCartHandler = (product) => {
        const index = this.state.cart.findIndex(
          (prod) => prod.maSP === product.maSP
        );
    
        if (index !== -1) {
          const cartUpdate = [...this.state.cart];
          cartUpdate[index].soLuong += 1;
    
          this.setState({
            cart: cartUpdate,
          });
        } else {
          const productUpdate = { ...product, soLuong: 1 };
          this.setState({
            cart: [...this.state.cart, productUpdate],
          });
        }
      };

      deleteItem=(maSPClick)=>{
          console.log(maSPClick);
          //tao ra 1 giỏ hàng mới giống  gia trị giỏ hàng cũ
          let gioHangCapNhat=[...this.state.cart];
          // xử lý giỏ hàng mới
          let index= gioHangCapNhat.findIndex(spSH=>spSH.maSP===maSPClick);
          if(index!==-1)
          {
              gioHangCapNhat.splice(index,1);
          }
          
          //gán lại giỏ hàng cũ bằng giỏ hàng mới
          this.setState({
              cart:gioHangCapNhat
          });
      }

      //định nghĩa hàm thay đổi số lượng tại nới chưa state số lượng (sô lượng nằm trong state card[])
      tangGiamSoLuong=(maSP,soLuong)=>{
         let gioHangCapNhat=[...this.state.cart];
         //Tìm trong giỏ hàng có sản phầm mã == với sản phẩm dc click + -
         let spGioHang=gioHangCapNhat.find(spGH=>spGH.maSP===maSP);
         if(spGioHang){
             spGioHang.soLuong+=soLuong;
         }
         this.setState(
            {cart:gioHangCapNhat});
      }
    render() {
        return (
            <div className="container">
                <Modal cart={this.state.cart} delete={this.deleteItem} tangGiamSoLuong={this.tangGiamSoLuong} />
                <div className="row">
                    {this.renderProductListHander()}

                </div>
                <div className="row mt-2">
                    <div className="col-6">
                        <h5>{this.state.productDetail.tenSP}</h5>
                        <img height="300px" src={this.state.productDetail.hinhAnh} />
                    </div>
                    <div className="col-6">
                        <h5>Thông số kĩ thuật</h5>
                        <table>
                            <tr>
                                <th>
                                    Màn Hình
                        </th>
                                <td>
                                    {this.state.productDetail.manHinh}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>


        )
    }
}
