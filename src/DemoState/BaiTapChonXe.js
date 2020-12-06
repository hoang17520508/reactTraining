import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
state={
    imgSrc:'./img/car/products/red-car.jpg'
}
changeColor=(newcolor)=>{
    this.setState({
        imgSrc:`./img/car/products/${newcolor}-car.jpg`
    })
}

    render() {
        return (
            <div className="container-fluid row">
                <div className="col-6 p-0">
                    {/* HINH ANH CUA XE */}
                    <img className="w-100 h-100" src={this.state.imgSrc} />

                </div>
                <div className="col-6 p-0">
                    {/* CHON MAU XE  */}
                    <div className="card">
                        <div className="card-header text-white bg-dark">exterior colorr</div>  
                        <div className="card-body">
                        <div className="row mt-2">
                            <div className="col-2">
                            <img onClick={()=>{
                                this.changeColor('black');
                            }} src="./img/car/icons/icon-black.jpg" className="w-100"/>
                            </div>
                            <div className="col-10">
                            <h3>Black color</h3>
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-2">
                            <img onClick={()=>{
                                this.changeColor('red');
                            }}  src="./img/car/icons/icon-red.jpg" className="w-100"/>
                            </div>
                            <div className="col-10">
                            <h3>Red color</h3>
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-2">
                            <img onClick={()=>{
                                this.changeColor('silver');
                            }} src="./img/car/icons/icon-silver.jpg" className="w-100"/>
                            </div>
                            <div className="col-10">
                            <h3>Silver color</h3>
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-2">
                            <img onClick={()=>{
                               this.changeColor('steel');
                            }} src="./img/car/icons/icon-steel.jpg" className="w-100"/>
                            </div>
                            <div className="col-10">
                            <h3>Steel color</h3>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }   
}
