import React, { Component } from 'react'
import './BookingTicket.css'
import ThongTindDatGhe from './ThongTindDatGhe'
import danhSachGheData from '../Components/Data/danhSachGhe.json'
import HangGhe from './HangGhe'
export default class BookingTicket extends Component {


    renderHangGhe=()=>{
        return danhSachGheData.map((hangGhe,index)=>{
            return <div key={index}>
<HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
         }) 

    }
    render() {
        return (
            <div className="bookingMovie" style={{ position: "", width: "100%", height: "100%", backgroundImage: "url('./img/imgBookingTicket/bgmovie.jpg')", backgroundSize: "cover", backgroundRepeat: "none" }}>
                <div style={{ position: "", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.7)" }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8">
                                <h1 className="text-light text-center">Booking Ticket</h1>
                                <div className="text-light mt-0 text-center " style={{ fontSize: '25px' }}>Screen</div>
                                <div className="d-flex  " style={{ justifyContent: 'center' }}>
                                    <div className="screen  " ></div>
                                </div>
                                {this.renderHangGhe()}
                            </div>
                            <div className="col-4">
                                <div className="text-light" style={{fontSize:"35px"}}>Selected Seat</div>
                                <ThongTindDatGhe/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
