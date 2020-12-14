import React, { Component } from 'react'

export default class ChildComponent extends Component {
    

constructor(props){
    super(props);
   this.state={

    }
}

componentDidMount(){
    console.log('AAAAcomponentDidUpdate')
}
shouldComponentUpdate()
{
    console.log('AAAAAshouldComponentUpdate');
    return true;
}
componentWillUnmount(){
    console.log('AAAAAcomponentWillUnmount');
    clearInterval(this.timeout);    
}
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
