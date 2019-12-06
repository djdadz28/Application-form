import React, {Component} from 'react';
import './App.css';
import FormPersonalInformation from './components/FormPersonalInformation'
import FormContactDetails from './components/FormContactDetails'
import NavBar from './components/NavBar'

export class App extends Component{
  constructor(){
    super()
    this.state = {
      page: 1,
    }
  }


  pageSwitch(currentPage){
    switch(currentPage){
      case 1:
        return<FormPersonalInformation nextPage={this.nextPage}/>
      case 2:
        return<FormContactDetails nextPage={this.nextPage} prevPage={this.prevPage}/>
    }
  }

  nextPage = () => {
    this.setState(currentPage => {
      return {page: currentPage.page + 1}
    })
  }

  prevPage = () => {
    this.setState(currentPage => {
      return {page: currentPage.page - 1}
    })
  }


  render(){
    
    const { page } = this.state

    return (
      <div className="App">
        <NavBar navTitle={page == 1 ? "Personal Information" : "Contact Details"}/>
        {this.pageSwitch(page)}
      </div>
    )
  }
}

export default App;
