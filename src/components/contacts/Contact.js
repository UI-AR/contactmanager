import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context';
import axios from 'axios'; 
import {Link} from 'react-router-dom';

 class Contact extends Component {
    //  static propTypes={
    //     name:PropTypes.string.isRequired,
    //     email:PropTypes.string.isRequired,
    //     phone:PropTypes.string.isRequired, 
    //  };
    state={
        showContactInfo: false
    }
    onDeleteClick=async (id,dispatch)=>{
        try{
            await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);    
        dispatch({type:'DELETE_CONTACT',payload:id}); 
        }
        catch(e){
            dispatch({type:'DELETE_CONTACT',payload:id}); 
        };
     }
    onShowClick=name=>{
        this.setState({showContactInfo:!this.state.showContactInfo});
        console.log(this.state.showContactInfo);
    }
    render() {
        const {id,name,phone,email} = this.props.contact;
        const {showContactInfo} = this.state;
        return (
           <Consumer>
              {value=>{
                  const {dispatch} = value;
                  return (
                    <div className="card card-body mb-3">
                    <h4>{name}{' '}<i onClick={() => this.setState({showContactInfo:!this.state.showContactInfo})} className="fas fa-sort-down" style={{cursor:'pointer'}} />
                                   <i 
                                   onClick={this.onDeleteClick.bind(this,id,dispatch)} 
                                   className="fas fa-times" 
                                   style={{
                                       cursor:'pointer',
                                       color:'red',
                                       float:'right'}}/>
                                   <Link to={`contact/edit/${id}`}>
                                   <i
                                    className="fas fa-pencil-alt"
                                    style={{
                                        cursor:'pointer',
                                        float:'right',
                                        color:'black',
                                        marginRight:'1rem'}}
                                    ></i>
                                   </Link>
                                   </h4>
                    {showContactInfo ? (
                    <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                    </ul>
                    ) : null}
                </div>   
                  )
              }}
           </Consumer>
                        
         
        )
    };
};
Contact.propTypes={
    contact:PropTypes.object.isRequired
};
export default Contact;