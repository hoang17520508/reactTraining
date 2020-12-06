import React, { Component } from 'react'

export default class Modal extends Component {

  // tinhTongTien=()=>{
  //   let TongTien=this.props.cart.reduce((tt,spGH,index)=>{
  //     return tt+=spGH.soLuong *spGH.donGia;

  //   },0)
  // }

  tinhTongTien = () => {
    let tongTien = this.props.cart.reduce((tt,spGH,index)=>{
      return tt += spGH.soLuong * spGH.donGia;
    },0)

    return tongTien.toLocaleString();

  }
  render() {
    return (
      <div>
        <div>
          {/* Button trigger modal */}

          {/* Modal */}
          <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Giỏ Hàng</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body w-100">
                  <table className="table"  >
                    <tr>
                      <td>Mã sản phẩm</td>
                      <td>Hình ảnh</td>
                      <td>Tên sản phầm</td>
                      <td>Số lượng</td>
                      <td>Đơn giá</td>
                      <td>Thành tiền</td>
                    </tr>
                    {this.props.cart.map((product, index) => {
                      return (
                        <tr key={index}>
                          <td>{product.maSP}</td>
                          <td><img src={product.hinhAnh} width="100" height="30" /></td>
                          <td>{product.tenSP}</td>
                          <td>
                            <button onClick={() => {
                              // xử lý tăng
                              this.props.tangGiamSoLuong(product.maSP, 1);
                            }}>+</button>
                            {product.soLuong}
                            <button onClick={() => {
                              //xử lsy giaemr
                              this.props.tangGiamSoLuong(product.maSP, -1);
                            }}>-</button></td>
                          <td>{product.donGia}</td>
                          <td>{(product.donGia * product.soLuong)}</td>
                          <td><button className="btn btn-danger" onClick={() => {
                            this.props.delete(product.maSP);
                          }}>Xóa</button></td>
                        </tr>

                        

                      );
                      


                    })}
                    <tfoot>
                        <tr>
                          <td colSpan="5"></td>
                          <td>Tổng tiền</td>
                  <td> {this.tinhTongTien()}</td>
                        </tr>
                      </tfoot>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
