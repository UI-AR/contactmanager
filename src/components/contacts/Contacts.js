import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../../context';

class Contacts extends Component {
    // constructor(){
    //     super();
    //     this.state={
    // state={
    //     contacts:[
    //         { 
    //             id:1,
    //             name:'Anand',
    //             email:'aman@gmail.com',
    //             phoneNo:'999-999-9999'
    //         },
    //         {
    //             id:2,
    //             name:'Vimal',
    //             email:'vimal@gmail.com',
    //             phoneNo:'777-777-7777'
    //         },
    //         {
    //             id:3,
    //             name:'Daya',
    //             email:'daya@gmail.com',
    //             phoneNo:'888-888-8888'
    //         },
    //         {
    //             id:4,
    //             name:'Siva',
    //             email:'siva@gmail.com',
    //             phoneNo:'888-888-8888'
    //         }
    //     ]
    // }
render(){
    return(
        <Consumer>
            {value=>{
                const {contacts}=value;
                return(
                    <React.Fragment>
                        <h1 className="display-4 mb-2"><span className="text-danger">Contact </span>List</h1>
                    {contacts.map(contact => (
                    <Contact 
                     key={contact.id}
                    contact={contact}  />))}
                </React.Fragment>
                )
            }}
        </Consumer>
    )
}
    // render() {
    //     const {contacts} = this.state;
    //     return (
    //         <div>
    //             {contacts.map(contact => (
    //             <Contact 
    //             key={contact.id}
    //             contact={contact} 
    //             deleteClickHandler={this.deleteContact.bind(this,contact.id)} />))}
    //         </div> 
    //     )
    // }
}
export default Contacts;