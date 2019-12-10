import React, {Component} from 'react';
import FormPersonalInformation from './FormPersonalInformation'
import FormContactDetails from './FormContactDetails'
import FormAddress from './FormAddress'
import FormEducation from './FormEducation'
import FormSourcingChannel from './FormSourcingChannel'
import FormWorkExperience from './FormWorkExperience'
import FormAdditionalQuestions from './FormAdditionalQuestions'
import FormTermsAndConditions from './FormTermsAndConditions'
import FormConfirmation from './FormConfirmation'

export class userForm extends Component {
  constructor(){
    super()
    this.state = {
      page: 1,
      firstName: '',
      middleName: '',
      lastName: '',
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
      highSchool: '',
      highSchoolGradYear: '',
      college: '',
      collegeGradYear: '',
      collegeCourse: '',
      collegeAttainment: '',
      college_2: '',
      collegeGradYear_2: '',
      collegeCourse_2: '',
      collegeAttainment_2: '',
      workBpoExperience: '',
      workQualfonEmployee: '',
      workCompany: '',
      workPosition: '',
      workDuration: '',
      workReasonForLeaving: '',
      workCompany_2: '',
      workPosition_2: '',
      workDuration_2: '',
      workReasonForLeaving_2: '',
      mainSource: '',
      specificSource: '',
      referrerFullName: '',
      referrerID: '',
      referrerMobile: '',
      sourceMethod: '',
      invitedByRecruiter: '',
      recruiter: '',
      jobFairLocation: '',
      aq_currentlyEnrolled: '',
      aq_numberOfUnits: '',
      aq_studyPlan: '',
      aq_hireDate: '',
      aq_convicted: '',
      aq_convictReason: '',
      aq_hospitalize: '',
      aq_hopistalizeReason: '',
      aq_medicalCondition: '',
      aq_medicalConditionReason: '',
      aq_medication: '',
      aq_medicationReason: '',
      acceptTerms: false
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
  
  checkReferralFields = () =>{
    if(this.state.mainSource != "Referrals" && this.state.mainSource != ""){
      this.setState({referrerFullName: '', referrerID: '', referrerMobile: ''})
    }
    if(this.state.mainSource === "Referrals" && this.state.specificSource === "Applicant Referral (ARP)"){
      this.setState({referrerID: ''})
    }
    if(this.state.mainSource != "Job Fairs"){
      this.setState({jobFairLocation: ''})
    }
  }

  checkAdditionalQuestion = () => {
    if(this.state.aq_currentlyEnrolled === "No") this.setState({aq_numberOfUnits: ''})
    if(this.state.aq_convicted === "No") this.setState({aq_convictReason: ''})
    if(this.state.aq_hospitalize === "No") this.setState({aq_hospitalizeReason: ''})
    if(this.state.aq_medicalCondition === "No") this.setState({aq_medicalConditionReason: ''})
    if(this.state.aq_medication === "No") this.setState({aq_medicationReason: ''})
  }

  checkAcceptTerms = () =>{
    this.setState({acceptTerms: !this.state.acceptTerms})
  }
  

    render() {
      const { page,
              firstName,
              middleName,
              lastName,
              birthDay,
              birthPlace,
              gender,
              civilStatus,
              citizenship,
              mobileNumber,
              emailAddress,
              emergencyFullName,
              emergencyMobile,
              relationship,
              currentAddressBrgy,
              currentAddressCity,
              currentAddressProvince,
              highSchool,
              highSchoolGradYear,
              college,
              collegeGradYear,
              collegeCourse,
              collegeAttainment,
              college_2,
              collegeGradYear_2,
              collegeCourse_2,
              collegeAttainment_2,
              workBpoExperience,
              workQualfonEmployee,
              workCompany,
              workPosition,
              workDuration,
              workReasonForLeaving,
              workCompany_2,
              workPosition_2,
              workDuration_2,
              workReasonForLeaving_2,
              mainSource,
              specificSource,
              referrerFullName,
              referrerID,
              referrerMobile,
              sourceMethod,
              invitedByRecruiter,
              recruiter,
              jobFairLocation,
              aq_currentlyEnrolled,
              aq_numberOfUnits,
              aq_studyPlan,
              aq_hireDate,
              aq_convicted,
              aq_convictReason,
              aq_hospitalize,
              aq_hopistalizeReason,
              aq_medicalCondition,
              aq_medicalConditionReason,
              aq_medication,
              aq_medicationReason,
              acceptTerms
              } = this.state
      const values = { page,
              firstName,
              middleName,
              lastName,
              birthDay,
              birthPlace,
              gender,
              civilStatus,
              citizenship,
              mobileNumber,
              emailAddress,
              emergencyFullName,
              emergencyMobile,
              relationship,
              currentAddressBrgy,
              currentAddressCity,
              currentAddressProvince,
              highSchool,
              highSchoolGradYear,
              college,
              collegeGradYear,
              collegeCourse,
              collegeAttainment,
              college_2,
              collegeGradYear_2,
              collegeCourse_2,
              collegeAttainment_2,
              workBpoExperience,
              workQualfonEmployee,
              workCompany,
              workPosition,
              workDuration,
              workReasonForLeaving,
              workCompany_2,
              workPosition_2,
              workDuration_2,
              workReasonForLeaving_2,
              mainSource,
              specificSource,
              referrerFullName,
              referrerID,
              referrerMobile,
              sourceMethod,
              invitedByRecruiter,
              recruiter,
              jobFairLocation,
              aq_currentlyEnrolled,
              aq_numberOfUnits,
              aq_studyPlan,
              aq_hireDate,
              aq_convicted,
              aq_convictReason,
              aq_hospitalize,
              aq_hopistalizeReason,
              aq_medicalCondition,
              aq_medicalConditionReason,
              aq_medication,
              aq_medicationReason,
              acceptTerms,
              }

        switch(page){
          case 1:
            return(
            // <FormConfirmation
            //         values={values}
            //         nextPage={this.nextPage}
            //         prevPage={this.prevPage}
            //         handleChange={this.handleChange}
            //         />
            
                    <FormPersonalInformation
                    values={values}
                    nextPage={this.nextPage}
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
                    checkReferralFields={this.checkReferralFields}
                    />
            )
            case 7:
            return(<FormAdditionalQuestions
                    values={values}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    handleChange={this.handleChange}
                    checkAdditionalQuestion={this.checkAdditionalQuestion}
                    />
            )
            case 8:
            return(<FormTermsAndConditions
                    values={values}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    handleChange={this.handleChange}
                    checkAcceptTerms={this.checkAcceptTerms}
                    />
            )
            case 9:
            return(<FormConfirmation
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
                    handleChange={this.handleChange}
                    />
    }
  }
}
export default userForm
