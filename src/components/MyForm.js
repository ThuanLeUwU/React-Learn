import React from "react";
import {Form, FormGroup, Label, Input, Button, FormFeedBack} from 'reactstrap'

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            age: 0,
            email: '',
            error:{
                fullName: '',
                age: '',
                email: ''
            }
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleInputBlur=this.handleInputBlur.bind(this);
    }
    handleOnChange = (e) => {
        this.setState({text: e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        alert('Text wwas just submitte: ' + this.state.text)
        this.setState(
            {text: ''}
        ) 
    }
    render(){
        return(
            // <div>
            //     <form onSubmit={this.handleOnSubmit}>
            //         <input type='text' value={this.state.text}
            //                         onChange={this.handleOnChange}/>
            //         <input type='submit'/>
            //     </form>
            // </div>
            <div className="container">
                <div className="row row-context">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="fullName">Full Name</Label>
                            <Input  type='text' id="fullName" name='fullName' placeholder='fullName' 
                                        value={this.state.fullName} valid={this.state.error.fullName===''}
                                                invalid={this.state.error.fullName!==''} 
                                                onchange={this.handleInputChange}
                                                onBlur={this.handleInputBlur}/>
                            <FormFeedBack>{this.state.error.fullName}</FormFeedBack>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default MyForm;