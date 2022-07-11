import React from "react";
class Store extends React.Component{
    constructor(props){
        super();
        // this.state= {
        //     itemName: 'rose',
        //     bumber:1000
        // };
        this.getItem = this.getItem.bind(this);
    };
    getItem=()=>{
        this.props.onChangeNumber();
    };
    render(){
        return(
            <div>
                <h1> Item name: {this.props.itemName}</h1>
                <h2> Number of roses in stock: {this.props.number}</h2>
                <button onClick={this.getItem}> add to cart </button>
            </div>
        );
    }
}

export default Store;