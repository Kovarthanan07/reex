import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupText } from 'reactstrap';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class TopupForm extends Component{

    constructor(props) {
    super(props);
    this.state = {
      managerIncharge: '',
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

    const { managerIncharge, amount, description } = this.state;
    // alert(this.state.managerIncharge);
    // alert(this.state.amount);
    // alert(this.state.description);

    console.log("Current State is " + JSON.stringify(this.state));
    axios.post('http://localhost:3000/topUpRequest', { managerIncharge, amount, description })
      .then((response) => {
          console.log("Successfully updated");
          console.log(response);
      },
      (error) =>{
        console.log("Error : ", error);
      });
  }

    render(){
        // const managerIncharge = [
        //     { manager: 'manager1' },
        //     { manager: 'manager2' },
        //     { manager: 'manager3' },
        //     { manager: 'manager4' },
        //     { manager: 'manager5'},
        //     { manager: "manager6" },
        //     { manager: 'manager7'},
        // ];
        const { managerIncharge, amount, description } = this.state;
    return (
        <Form onSubmit={this.onSubmit} className="container">
            <FormGroup> 
                <Label for="managerelect">Manager</Label>
                <Input required type="select" className="form-control" name="managerIncharge" value={managerIncharge} onChange={this.onChange} placeholder="Manager" >
                    <option aria-label="None" value="" />
                    <option value="id1">Manager1</option>
                    <option value="id2">Manager2</option>
                    <option value="id3">Manager3</option>
                    <option value="id4">Manager4</option>
                    <option value="id5">Manager5</option>
                </Input>
                {/* <Autocomplete
                    id="combo-box-demo"
                    required
                    options={managerIncharge}
                    getOptionLabel={(option) => option.manager}
                    style={{ width: "auto" }}
                    renderInput={(params) => <TextField {...params} label="Manager" variant="outlined" />}
                    /> */}
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