import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Form } from "reactstrap";

class MyUncontrolledForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            isCase: false
        }
        this.changeIsCase=this.changeIsCase.bind(this);
    }

    changeIsCase(){
        const value=this.inputText.value;
        this.setState({isCase:!this.state.isCase});
        if(this.state.isCase)
            this.inputText.value=value.toUpperCase();
        else   
            this.inputText.value=value.toLowerCase();
    }

    render(){
        return(
            <div className='Container'>
                <div className='row m-5'>
                    <div className='col-2 col-sm-2'>
                        <Form>
                            <p><Input type='text' innerRef={inputControl=>this.inputText=inputControl} placeholder='Input a text'/></p>
                            <p><Input type='button' onClick={this.changeIsCase} value='toggle case' className='btn-success'/></p>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyUncontrolledForm;