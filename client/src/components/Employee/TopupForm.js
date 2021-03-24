import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupText } from 'reactstrap';
import axios from 'axios';

class TopupForm extends Component{

    constructor(props) {
    super(props);
    this.state = {
      managerid: '',
      amount: null,
      description: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { employeeid, amount, description } = this.state;
    alert(this.state.managerid);
    alert(this.state.amount);
    alert(this.state.description);

    // axios.post('http://localhost:3000/AddEsxpenseForm', { managerid, amount, description })
    //   .then((result) => {
    //     this.props.history.push("/AddExpenseForm")
    //   });
  }

    render(){
        const { managerid, amount, description } = this.state;
    return (
        <Form onSubmit={this.onSubmit} className="container">
            <FormGroup> 
                <Label for="managerelect">Manager</Label>
                <Input required type="select" class="form-control" name="managerid" value={managerid} onChange={this.onChange} placeholder="Manager" >
                    <option aria-label="None" value="" />
                    <option value="id1">Manager1</option>
                    <option value="id2">Manager2</option>
                    <option value="id3">Manager3</option>
                    <option value="id4">Manager4</option>
                    <option value="id5">Manager5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="amount">Amount</Label>
                <InputGroup>
                    <InputGroupText>Rs.</InputGroupText>
                    <Input 
                        placeholder="Amount" 
                        required
                        name="amount" 
                        value={amount} 
                        onChange={this.onChange}
                        min={0} 
                        max={10000} 
                        type="number" 
                        step="1" 
                    />
                    <InputGroupText>.00</InputGroupText>
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input 
                    type="textarea" 
                    name="description" 
                    value={description} 
                    onChange={this.onChange}  
                    id="exampleText" 
                    />
            </FormGroup>
            <div className="SubmitBtn">
                <Button type="sunbmit">Submit</Button>
            </div>
        </Form>
    );
}
}

export default TopupForm;