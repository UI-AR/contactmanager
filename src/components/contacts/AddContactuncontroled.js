import React, { Component } from 'react'

 class AddContact extends Component {
constructor(props){
super(props);
this.nameInput=React.createRef();
this.emailInput=React.createRef();
this.phoneInput=React.createRef();
}
    static defaultProps={
        name:'Anand',
        email:'aaaa@aaa.aaa',
        phone:'999-999-9999'
    }
    onSubmit=e=>{e.preventDefault();
                  const contact={
                      name:this.nameInput.current.value,
                      email:this.emailInput.current.value,
                      phone:this.phoneInput.current.value,
                  }; console.log(contact);}
  //  onChange=e=>this.setState({[e.target.name]:e.target.value})
    render() {
        const {name,email,phone} =this.props;
        return (
            <div className="card mb-3">
               <div className="card-header">
               Add Contact
               </div>
               <div className="card-body">
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text"
                             name="name"
                             placeholder= "Enter Name..."
                             className="form-control form-control-lg"
                             defaultValue={name}
                             ref={this.nameInput} />  
                   </div>
                   <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email"
                             name="email"
                             placeholder= "Enter Email..."
                             className="form-control form-control-lg"
                             defaultValue={email}
                             ref={this.emailInput} />  
                   </div>
                   <div className="form-group">
                      <label htmlFor="phone">Phone No</label>
                      <input type="text"
                             name="phone"
                             placeholder= "Enter Phone no..."
                             className="form-control form-control-lg"
                             defaultValue={phone}
                             ref={this.phoneInput} />  
                   </div>
                   <input type="submit"
                          value="Add Contact" 
                          className="btn btn-danger btn-block"/>
                </form>
                </div>
            </div>
        )
    }
}

export default AddContact;