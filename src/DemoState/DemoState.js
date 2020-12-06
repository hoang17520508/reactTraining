import React, { Component } from 'react';

class DemoState extends Component {

    //state là thuộc tish có sẵn của component=> đùng dể quản lý nguoond ữ liệu thay đổi trên giao diện khi người dùng thao tác (click,change,blur)
    state={
        isLogin:false
    }

    // isLogin=false;
    userName='Hoàng';
    renderContent=()=>{
        if(this.state.isLogin){
        return <p>Hello! {this.userName}</p>
        }
        return <button onClick={()=>{
            this.handleLogin();

        }} className="btn btn-success">Đăng nhập</button>
    }
    handleLogin=()=>{
        // this.state.isLogin=true;
        // console.log('isLogin',this.state.isLogin);
        ///không được thay đổi state trực tiếp mà phải qua phức thức set state  
        //setstate() là phuionwng thức có sẵn  dùng để thay dooit giá trị trong  this.state dồng thời gọi lại render
   
    this.setState({
        isLogin:true
    });    

    }

    render() {
        return (
            <div>
                <h3>if else React</h3>
        {/* {this.isLogin ===true ? <p>hello {this.userName}</p> :<button>Đăng nhập</button>} */}
        {this.renderContent()}         
            </div>
        );
    }
}

export default DemoState;