import React, { Component } from 'react'
import { connect } from 'react-redux'

import { huyGheAction } from '../redux/actions/BookingTicketAction'

class ThongTindDatGhe extends Component {
    render() {
        return (
            <div className="mt-0 text-left">
                <button className="gheDuocChon"></button> <span className="text-light" style={{ fontSize: "25px" }}>Reserved Seat</span>
                <br />
                <button className="gheDangChon"></button> <span className="text-light" style={{ fontSize: "25px" }}>Reserved Seat</span>
                <br />
                <button className="ghe" style={{ margin: 0 }}></button> <span className="text-light" style={{ fontSize: "25px" }}>Reserved Seat</span>
                <div className="" style={{maxHeight:'400px',overflowY:'scroll'}}>
                    <table className="table text-light" border="2" style={{ maxHeight: "300px" }}>
                        <thead>
                            <tr>
                                <th>Seat Num</th>
                                <th>Price</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia}</td>
                                    <td><button onClick={() => { this.props.huyGhe(gheDangDat.soGhe) }
                                    }>X</button></td>

                                </tr>
                            })}

                        </tbody>
                        <tfoot>
                            <td></td>
                            <td className="text-warning">Total:</td>
                        <td>{this.props.danhSachGheDangDat.reduce((tongtien,gheDangDat,index)=>{
                            return tongtien+=gheDangDat.gia;
                        },0)}</td>
                        </tfoot>
                    </table>
                  
                    


                </div>
                <div className="text-center mt-2">
                        <button className="btn btn-warning">BOOKING TICKET</button>

                    </div>
            </div>
        )
    }
}


const mapstatetoprops = state => {
    return {
        danhSachGheDangDat: state.stateBookingTicket.danhSachGheDangDat
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        huyGhe: (soghe) => {
            dispatch(huyGheAction(soghe))

        }
    }
}
export default connect(mapstatetoprops, mapDispatchToProps)(ThongTindDatGhe)