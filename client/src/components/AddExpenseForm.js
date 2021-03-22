import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupText } from 'reactstrap';
import axios from 'axios';

class AddExpenseForm extends Component{

    constructor(props) {
    super(props);
    this.state = {
      employeeid: 'K7 Kovarthanan',
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

    const { employeeid, category, paymentMethod, amount, description, file } = this.state;
    alert(this.state.employeeid);
    alert(this.state.amount);
    alert(this.state.category);
    alert(this.state.paymentMethod);
    alert(this.state.description);
    alert(this.state.file);

    // axios.post('http://localhost:3000/AddEsxpenseForm', { employeeid, category, paymentMethod, amount, description, file })
    //   .then((result) => {
    //     this.props.history.push("/AddExpenseForm")
    //   });
  }

    render(){
        const { employeeid, category, paymentMethod, amount, description, file } = this.state;
    return (
        <Form onSubmit={this.onSubmit} className="container">
            <FormGroup> 
                <Label for="employeeSelect">To</Label>
                <input type="text" class="form-control" name="employeeid" value={employeeid} onChange={this.onChange} placeholder="ISBN" />
                {/* <Input type="select" name="employeeid" id="employeeSelect">
                    <option aria-label="None" value="" />
                    <option>Employee1</option>
                    <option>Employee2</option>
                    <option>Employee3</option>
                    <option>Employee4</option>
                    <option>Employee5</option>
                </Input> */}
            </FormGroup>
            <FormGroup>
                <Label for="categorySelect">Category</Label>
                <Input type="select" name="category" value={category} onChange={this.onChange} id="expenseTypeSelect">
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
                <Input type="select" name="paymentMethod" value={paymentMethod} onChange={this.onChange} id="paymentSelect">
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
