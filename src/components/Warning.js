import React from "react";
class Warning extends React.Component{
    constructor(){
        super();
        this.display=this.display.bind(this);
    }

    display(){
        alert('welcome to handling event');
    }

    render(){
        return(
            <button onClick={this.display}>click me</button>
        );
    }
}

export default Warning;