import React, {Component} from 'react';
import FormPersonalInformation from './FormPersonalInformation'
import FormContactDetails from './FormContactDetails'
import FormAddress from './FormAddress'
import FormEducation from './FormEducation'
import FormSourcingChannel from './FormSourcingChannel'
import FormWorkExperience from './FormWorkExperience'

export class userForm extends Component {
  constructor(){
    super()
    this.state = {
      page: 1,
      firstName: '',
      middleName: '',
      LastName: '',
      birthDay: '',
      birthPlace: '',
      gender: '',
      civilStatus: '',
      citizenship: '',
      mobileNumber: '',
      emailAddress: '',
      emergencyFullName: '',
      emergencyMobile: '',
      relationship: '',
      permanentAddressBrgy: '',
      permanentAddressCity: '',
      permanentAddressProvince: '',
      currentAddressBrgy: '',
      currentAddressCity: '',
      currentAddressProvince: '',
      highSchool:'',
      highSchoolGradYear:'',
      college:'',
      collegeGradYear:'',
      collegeCourse:'',
      collegeAttainment:'',
      college_2:'',
      collegeGradYear_2:'',
      collegeCourse_2:'',
      collegeAttainment_2:'',
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

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

    render() {
      const { page, firstName, middleName, lastName, birthDay, birthPlace, gender, civilStatus, citizenship, mobileNumber, emailAddress, emergencyFullName, emergencyMobile, relationship, currentAddressBrgy, currentAddressCity, currentAddressProvince, highSchool, highSchoolGradYear, college, collegeGradYear, collegeCourse, collegeAttainment, college_2, collegeGradYear_2, collegeCourse_2, collegeAttainment_2 } = this.state
      const values = { page, firstName, middleName, lastName, birthDay, birthPlace, gender, civilStatus, citizenship, mobileNumber, emailAddress, emergencyFullName, emergencyMobile, relationship, currentAddressBrgy, currentAddressCity, currentAddressProvince, highSchool, highSchoolGradYear, college, collegeGradYear, collegeCourse, collegeAttainment, college_2, collegeGradYear_2, collegeCourse_2, collegeAttainment_2 }

        switch(page){
          case 1:
            return(
                    <FormPersonalInformation
                    values={values}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    handleChange={this.handleChange}
                    />
            )
          case 2:
            return(<FormContactDetails
                    values={values}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    handleChange={this.handleChange}
                    />
            )
          case 3:
            return(<FormAddress
                    values={values}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    handleChange={this.handleChange}
                    />
            )
          case 4:
            return(<FormEducation
                    values={values}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    handleChange={this.handleChange}
                    />
            )
          case 5:
            return(<FormWorkExperience
                    values={values}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    handleChange={this.handleChange}
                    />
            )
          case 6:
            return(<FormSourcingChannel
                    values={values}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    handleChange={this.handleChange}
                    />
            )
          default:
            return <FormPersonalInformation
                    values={values}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    handleChange={this.handleChange}
                    />
    }
  }
}
export default userForm
