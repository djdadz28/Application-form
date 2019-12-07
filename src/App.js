import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import FormPersonalInformation from './components/FormPersonalInformation'
import FormContactDetails from './components/FormContactDetails'
import FormAddress from './components/FormAddress'
import FormEducation from './components/FormEducation'


export class App extends Component{
  constructor(){
    super()
    this.state = {
      page: 1,
    }
  }

  pageSwitch = (currentPage) =>{
    switch(currentPage){
      case 1:
        return<FormPersonalInformation nextPage={this.nextPage} curPage={currentPage}/>
      case 2:
        return<FormContactDetails nextPage={this.nextPage} prevPage={this.prevPage} curPage={currentPage}/>
      case 3:
        return<FormAddress nextPage={this.nextPage} prevPage={this.prevPage} curPage={currentPage}/>
      case 4:
        return<FormEducation nextPage={this.nextPage} prevPage={this.prevPage} curPage={currentPage}/>
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
    
    return (
      <div className="App">
        <NavBar navTitle={this.state.page == 1 ? "Personal Information" :
                          this.state.page == 2 ? "Contact Details" :
                          this.state.page == 3 ? "Address Information"
                                               : "Educational Background"                  
        }/>
        {this.pageSwitch(this.state.page)}
      </div>
    )
  }
}

export default App;
