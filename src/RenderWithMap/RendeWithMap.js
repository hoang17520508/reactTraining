import React, { Component } from 'react'

export default class RendeWithMap extends Component {


    products=[
        {id:1,name:'iphone',price:1000},
        {id:2,name:'iphone X',price:2000},
        {id:3,name:'iphone XS',price:3000}

    ]   
    // renderProduct=()=>{
    //     let arrjsx=[];
    //     for (let index in  this.products){
    //         let product= this.products[index];
    //         let jsxProduct=
    //         <div className="col-4">
    //             <div class="card ">
    //               <img class="card-img-top" src="holder.js/100px180/" alt="">
    //               <div class="card-body">
    //     <h4 class="card-title">{product.name}</h4>
    //                 <p class="card-text">{product.price}</p>
    //               </div>
    //             </div>
    //         </div>
            
    //     }

    // // }
    renderProductWithMap=()=>{
        return this.products.map((product,index)=>{
            return <div className="col-4" key={index}>
            <div className="card">
                <img className="card-img-top" src="https://picsum.photos/201" alt="123" />
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.price}</p>
                </div>
            </div>
        </div>;
    });
    }
    renderTable = () => {
        return this.products.map((product,index)=>{
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    {this.renderProductWithMap()}
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
