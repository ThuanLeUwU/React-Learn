import React from "react";
import PresentationalComponent from "./Presentational";

class ContainerComponent extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            title: "My Blog",
            content: "I love orchids"
        };
    };

    render(){
        return (
            <div>
                <PresentationalComponent title={this.state.title} content={this.state.content}/>
            </div>
        );
    }
}

export default ContainerComponent;