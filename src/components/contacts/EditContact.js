import React, { Component } from 'react'
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

 class EditContact extends Component {

    state={
        name:'',
        email:'',
        phone:'',
        error: {}
    }
    async componentDidMount(){
       const { id } = this.props.match.params;
       const res= await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
       const contact = res.data;
       this.setState({
           name:contact.name,
           email:contact.email,
           phone:contact.phone
       }) 
    }
    onSubmit=async (dispatch,e)=>{e.preventDefault(); ///GOOGLE
                const {name,email,phone}=this.state;
if(name==""){
        this.setState({error:{name:'Name is Required'}});return;
}
if(email==""){
    this.setState({error:{email:'Email is Required'}});return;
}
if(phone==""){
    this.setState({error:{phone:'Phone Number is Required'}});return; 
}       
const updContact={
    name,
    email,
    phone
}
const {id}= this.props.match.params;
const res=await axios.put(`http://jsonplaceholder.typicode.com/users/${id}`,updContact);
dispatch({type:'UPDATE_CONTACT',payload:res.data});
        this.setState({
            name:'',
            email:'',
            phone:'',
            error: {}
        });
        this.props.history.push('/');

        }
    onChange=e=>this.setState({[e.target.name]:e.target.value});
    render() {
        const {name,email,phone,error} =this.state;
return(
    <Consumer>
        {value=>{
            const {dispatch} = value;
            return(
                <div className="card mb-3">
                <div className="card-header">
                Update Contact
                </div>
                <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                    <TextInputGroup 
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={error.name}
                    />
                     <TextInputGroup 
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={error.email}
                    />
                     <TextInputGroup 
                    label="Phone No"
                    name="phone"
                    placeholder="Enter Phone "
                    value={phone}
                    onChange={this.onChange}
                    error={error.phone}
                    />
                       {/* <label htmlFor="phoneNo">Phone No</label>
                       <input type="text"
                              name="phoneNo"
                              placeholder= "Enter Phone no..."
                              className="form-control form-control-lg"
                              value={phoneNo}
                              onChange={this.onChange} />  */}
                    <input type="submit"
                           value="Update Contact" 
                           className="btn btn-danger btn-block"/>
                 </form>
                 </div>
             </div>
            )
        }}
    </Consumer>
)
    }
}

export default EditContact;