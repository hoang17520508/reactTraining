import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ReactLifeCycle extends Component {
//lifecycle là các hàm có sẵn của react


constructor(props){
    super(props);
    this.state={
number:1
    }
    console.log('constructter');
}
static getDerivedStateFromProps(){
    console.log('getDerivedStateFromprops')
    return null;
}
render(){
    return <div>
123
    </div>
}
componentDidMount(){
    console.log('componentDidMount')
}
componentDidUpdate(){
    console.log('componentDidUpdate')
}
shouldComponentUpdate()
{
    console.log('shouldComponentUpdate');
    return true;
}

    render() {
        return (
            <div className="text-danger">
                <button className="btn btn-success" onClick={()=>{
                    this.setState({
               number:this.state.number+=1
                    })
                }}>+
                {this.state.number}</button>
                <ChildComponent/>
            </div>
        )
    }
}
