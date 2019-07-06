import React, { Component } from 'react'
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

 class AddContact extends Component {

    state={
        name:'',
        email:'',
        phone:'',
        error: {}
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
            const newContact ={
                // id:uuid(),
                name,
                email,
                phone
            }
           const res =await axios.post('http://jsonplaceholder.typicode.com/users',newContact);
            dispatch({type:'ADD_CONTACT',payload:res.data});
        
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
                Add Contact
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
                           value="Add Contact" 
                           className="btn btn-danger btn-block"/>
                 </form>
                 </div>
             </div>
            )
        }}
    </Consumer>
)

        //return (
            // <div className="card mb-3">
            //    <div className="card-header">
            //    Add Contact
            //    </div>
            //    <div className="card-body">
            //    <form onSubmit={this.onSubmit}>
            //        <div className="form-group">
            //           <label htmlFor="name">Name</label>
            //           <input type="text"
            //                  name="name"
            //                  placeholder= "Enter Name..."
            //                  className="form-control form-control-lg"
            //                  value={name}
            //                  onChange={this.onChange} />  
            //        </div>
            //        <div className="form-group">
            //           <label htmlFor="email">Email</label>
            //           <input type="email"
            //                  name="email"
            //                  placeholder= "Enter Email..."
            //                  className="form-control form-control-lg"
            //                  value={email}
            //                  onChange={this.onChange} />  
            //        </div>
            //        <div className="form-group">
            //           <label htmlFor="phone">Phone No</label>
            //           <input type="text"
            //                  name="phone"
            //                  placeholder= "Enter Phone no..."
            //                  className="form-control form-control-lg"
            //                  value={phone}
            //                  onChange={this.onChange} />  
            //        </div>
            //        <input type="submit"
            //               value="Add Contact" 
            //               className="btn btn-danger btn-block"/>
            //     </form>
            //     </div>
            // </div>
        //)
    }
}

export default AddContact;