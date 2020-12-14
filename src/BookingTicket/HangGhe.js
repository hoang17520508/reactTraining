import React, { Component } from 'react'
import {connect} from 'react-redux'
import {datGheAction} from '../redux/actions/BookingTicketAction'

 class HangGhe extends Component {


    renderGhe=()=>{
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{
            let cssGheDaDat='';
            let disabled=false;
            //trang thai da bi nguoi khac dat



            //xets trang thai dang dat  
        let cssGheDangDat='';
            let indexGheDangDat=this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===ghe.soGhe);
            if(indexGheDangDat!==-1){
 cssGheDangDat='gheDangChon'
            }

            
            if(ghe.daDat){
                cssGheDaDat='gheDuocChon';
                disabled=true; 
            }
            return <button onClick={()=>{
                {this.props.datGhe(ghe)}
                
            }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}

            </button>
        })
    }

    renderSoHang=()=>{
        return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
            return <button className="rowNumber">
                {hang.soGhe}
            </button>
        })

    }
    renderHangGhe=()=>{
        if(this.props.soHangGhe===0){
            return <div>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else{
            return <div>
                {this.props.hangGhe.hang}{this.renderGhe()}
            </div>
        }

    }

    render() {
        return (
            <div className="text-light text-left ml-5 mt-1" style={{fontSize:"20px"}}>
                {this.renderHangGhe()}
            </div>
        )
    }
}


const mapstatetoprops=(state)=>{
    return {
        danhSachGheDangDat: state.stateBookingTicket.danhSachGheDangDat
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        datGhe:(ghe)=>{
            dispatch(datGheAction(ghe))
        
        }
    }
}
export default connect(mapstatetoprops,mapDispatchToProps)(HangGhe);
