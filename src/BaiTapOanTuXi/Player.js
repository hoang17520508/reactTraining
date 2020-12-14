import React, { Component } from 'react'
import {connect} from "react-redux"
 class Player extends Component {
    render() {
       console.log('mang',this.props.mangDatCuoc);
        return (
            
            <div className="text-center">
                <div className="theThink">
                
                           <img style={{height:"100px",width:"100px"}} src={this.props.mangDatCuoc.find(item=>item.datCuoc===true).hinhAnh} />  
                       
                </div>
                <div className="speech-bubble"></div>
               <img style={{height:"150px",width:"150px"}} src="./img/GameOanTuXi/player.png" />
               <div className="row">
                   {this.props.mangDatCuoc.map((item,index)=>{
                       let border={};
                       if(item.datCuoc){
                           border={border:'3px solid orange'};
                       }
                       return <div key={index} className="col-4">
                       <button onClick={()=>{
{this.props.datCuoc(item.ma)}
                       }} style={border} className="btnItem">
                           <img src={item.hinhAnh} />
                       </button>
                   </div>
                   })}
                   
               </div>
            </div>
        )
    }
}

const mapstatetoprops=state=>{
    return {
        mangDatCuoc:state.stateBaiTapOanTuXi.mangDatCuoc
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        datCuoc:(maCuoc)=>{
            dispatch({
                type:'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}
export default connect(mapstatetoprops,mapDispatchToProps)(Player)