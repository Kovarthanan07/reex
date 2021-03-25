import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupText } from 'reactstrap';
import axios from 'axios';

class AddExpenseForm extends Component{

    constructor(props) {
    super(props);
    this.state = {
      managerid: 'K7 Kovarthanan',
      category: '',
      paymentMethod: '',
      amount: null,
      description: '',
      file: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { managerid, category, paymentMethod, amount, description, file } = this.state;
    // alert(this.state.managerid);
    // alert(this.state.amount);
    // alert(this.state.category);
    // alert(this.state.paymentMethod);
    // alert(this.state.description);
    // alert(this.state.file);
    console.log("Current State is " + JSON.stringify(this.state));
    axios.post('http://localhost:3000/transaction', { managerid, category, paymentMethod, amount, description, file })
      .then((response) => {
          console.log("Successfully updated");
          console.log(response);
      },
      (error) =>{
        console.log("Error : ", error);
      });
  }

    render(){
        const { managerid, category, paymentMethod, amount, description, file } = this.state;
    return (
        <Form onSubmit={this.onSubmit} className="container">
            <FormGroup> 
                <Label for="managerSelect">To</Label>
                <Input required type="select" class="form-control" name="managerid" value={managerid} onChange={this.onChange} placeholder="Manager" >
                    <option aria-label="None" value="" />
                    <option value="id1">Employee1</option>
                    <option value="id2">Employee2</option>
                    <option value="id3">Employee3</option>
                    <option value="id4">Employee4</option>
                    <option value="id5">Employee5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="categorySelect">Category</Label>
                <Input required type="select" name="category" value={category} onChange={this.onChange} id="expenseTypeSelect">
                    <option aria-label="None" value="" />
                    <option value="travel">Travel</option>
                    <option value="food" >Food</option>
                    <option value="accomodation">Accomodation</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="paymentSelect">Payment Method</Label>
                <Input required type="select" name="paymentMethod" value={paymentMethod} onChange={this.onChange} id="paymentSelect">
                    <option aria-label="None" value="" />
                    <option value="cash" >Cash</option>
                    <option value="card">Card</option>
                    <option value="bank">Bank</option>
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
            <FormGroup>
                <Label for="receiptImage">Attach Receipt</Label>
                <Input 
                    type="file" 
                    name="file" 
                    value={file} 
                    onChange={this.onChange} 
                    id="receiptImage" 
                    />
                <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
        </FormText>
            </FormGroup>
            <div className="SubmitBtn">
                <Button type="sunbmit">Submit</Button>
            </div>
        </Form>
    );
}
}

export default AddExpenseForm;