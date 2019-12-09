import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import UserForm from './components/UserForm'
import FormPersonalInformation from './components/FormPersonalInformation'
import FormContactDetails from './components/FormContactDetails'
import FormAddress from './components/FormAddress'
import FormEducation from './components/FormEducation'
import FormSourcingChannel from './components/FormSourcingChannel'


export class App extends Component{

  render(){

    return (
      <div className="App">
        
        <UserForm />
        
      </div>
    )
  }
}

export default App
