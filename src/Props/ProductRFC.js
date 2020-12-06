import React from 'react'



// react function component nhân props là tham số đầu vào của hàm component

export default function ProductRFC(props) {
    return (
       <div>
  <div className="card text-dark">
    <img className="card-img-top" src="https://bachlongmobile.com/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/i/p/iphone-12-3_2.png" alt />
    <div className="card-body">
    <h4 className="card-title">{props.name}</h4>
    <p className="card-text">{props.price}</p>
    </div>
  </div>
</div>

    )
}
