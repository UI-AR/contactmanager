import React, {Component} from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/About';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from './components/pages/NotFound';
// function App() {
//   return (
//     <div className="App">
//     <h1>HELLO WORLD</h1>
//     </div>
//   );
// }

class App extends Component{
  render(){
    const name='anand';
    return (
      <Provider>
        <Router>
      <div className="App">
      <Header branding="Contact Manager"> </Header>
      <div className="container">
      <Switch>
        <Route exact path="/" component={Contacts} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact/add" component={AddContact} />
        <Route exact path="/contact/edit/:id" component={ EditContact} />
         <Route component={NotFound} />
      </Switch>
{/* <AddContact></AddContact> */}
      {/* <h1>HELLO WORLD {name}</h1>
      {math} */}
{/* <Contact name="Anand" email="ushgipu@gmail.com" phone="33 33 333333" ></Contact>
<Contact name="Anand" email="ushgipu@gmail.com" phone="33 33 333333" ></Contact> */}
{/* <Contacts></Contacts> */}
</div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
