import React, { Component } from 'react';

class HandelEvent extends Component {

    showMess=()=>{
        alert('Hello Cybersoft Front End 54');
    }
    showInfo=(info)=>{
        alert(info);

    }
    render() {
        const title='cybersoft'
        return (
            <div>
                <h3>HandleEvent</h3>
                <button onClick={this.showMess}>Click Me babe</button>
                <button onClick={()=>{alert(`Hello ${title} `);}}>Click Me guy</button>
                <button onClick={()=>{this.showInfo('hello cyber soft')}}>show info</button>
                 
            </div>
        );
    }
}

export default HandelEvent;