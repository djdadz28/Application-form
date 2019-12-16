import React, {Component} from 'react';
import fire from '../../server/config/Fire'
import FormPersonalInformation from './FormPersonalInformation'
import FormContactDetails from './FormContactDetails'
import FormAddress from './FormAddress'
import FormEducation from './FormEducation'
import FormSourcingChannel from './FormSourcingChannel'
import FormWorkExperience from './FormWorkExperience'
import FormAdditionalQuestions from './FormAdditionalQuestions'
import FormTermsAndConditions from './FormTermsAndConditions'
import FormConfirmation from './FormConfirmation'
import FormSuccess from './FormSuccess'
import FormLogin from './FormLogin'
import FormPrint from './FormPrint'

export class userForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {},
      email: '',
      password: '',
      page: 0,
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
      sameAddress: false,
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
      aq_hospitalizeReason: '',
      aq_medicalCondition: '',
      aq_medicalConditionReason: '',
      aq_medication: '',
      aq_medicationReason: '',
      acceptTerms: false    
  }
}

  componentDidMount(){
    this.authListener()
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) =>{
      console.log(user)
      if(user){
        this.setState({ user })
        // localStorage.setItem('user', user.uid)
      }else{
        this.setState({ user: null})
        // localStorage.removeItem('user')
      }
    })
  }

  login = (e) => {
      e.preventDefault()
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      this.setState({page: 1})
      }).catch((error) => {
          console.log(error)
          })
  }

  logout = () => {
    fire.auth().signOut().then((u) => {
      window.location.reload()
    })
  }

  nextPage = (e) => {
      console.log("next page success")
      this.setState(currentPage => {
        return {page: currentPage.page + 1}
      })
  }

  prevPage = (e) => {
    console.log("back page success")
    this.setState(currentPage => {
      return {page: currentPage.page - 1}
    })
  }

  handleChange = input => e => {
      this.setState({[input]: e.target.value})
    }
  

  registerNewApplicant = () => {
    this.setState({page: 1,
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
      aq_hospitalizeReason: '',
      aq_medicalCondition: '',
      aq_medicalConditionReason: '',
      aq_medication: '',
      aq_medicationReason: '',
      acceptTerms: false,

    })
  }

  checkReferralFields = () =>{
    if(this.state.mainSource !== "Referrals" && this.state.mainSource !== ""){
      this.setState({referrerFullName: '', referrerID: '', referrerMobile: ''})
    }
    if(this.state.mainSource === "Referrals" && this.state.specificSource === "Applicant Referral (ARP)"){
      this.setState({referrerID: ''})
    }
    if(this.state.mainSource !== "Job Fairs"){
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

  checkSameAddress = () => {
    this.setState({sameAddress: !this.state.sameAddress})
    if(!this.state.sameAddress){
      this.setState({ currentAddressBrgy: this.state.permanentAddressBrgy,
                      currentAddressCity: this.state.permanentAddressCity,
                      currentAddressProvince: this.state.permanentAddressProvince
      })
    }else{
      this.setState({ currentAddressBrgy: '',
                      currentAddressCity: '',
                      currentAddressProvince: ''
      })
    }
  }

  writeData = () => {
    fire.database().ref("app_data").push({
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      birthDay: this.state.birthDay,
      birthPlace: this.state.birthPlace,
      gender: this.state.gender,
      civilStatus: this.state.civilStatus,
      citizenship: this.state.citizenship,
      mobileNumber: this.state.mobileNumber,
      emailAddress: this.state.emailAddress,
      emergencyFullName: this.state.emergencyFullName,
      emergencyMobile: this.state.emergencyMobile,
      relationship: this.state.relationship,
      permanentAddressBrgy: this.state.permanentAddressBrgy,
      permanentAddressCity: this.state.permanentAddressCity,
      permanentAddressProvince: this.state.permanentAddressProvince,
      currentAddressBrgy: this.state.currentAddressBrgy,
      currentAddressCity: this.state.currentAddressCity,
      currentAddressProvince: this.state.currentAddressProvince,
      highSchool: this.state.highSchool,
      highSchoolGradYear: this.state.highSchoolGradYear,
      college: this.state.college,
      collegeGradYear: this.state.collegeGradYear,
      collegeCourse: this.state.collegeCourse,
      collegeAttainment: this.state.collegeAttainment,
      college_2: this.state.college_2,
      collegeGradYear_2: this.state.collegeGradYear_2,
      collegeCourse_2: this.state.collegeCourse_2,
      collegeAttainment_2: this.state.collegeAttainment_2,
      workBpoExperience: this.state.workBpoExperience,
      workQualfonEmployee: this.state.workQualfonEmployee,
      workCompany: this.state.workCompany,
      workPosition: this.state.workPosition,
      workDuration: this.state.workDuration,
      workReasonForLeaving: this.state.workReasonForLeaving,
      workCompany_2: this.state.workCompany_2,
      workPosition_2: this.state.workPosition_2,
      workDuration_2: this.state.workDuration_2,
      workReasonForLeaving_2: this.state.workReasonForLeaving_2,
      mainSource: this.state.mainSource,
      specificSource: this.state.specificSource,
      referrerFullName: this.state.referrerFullName,
      referrerID: this.state.referrerID,
      referrerMobile: this.state.referrerMobile,
      sourceMethod: this.state.sourceMethod,
      invitedByRecruiter: this.state.invitedByRecruiter,
      recruiter: this.state.recruiter,
      jobFairLocation: this.state.jobFairLocation,
      aq_currentlyEnrolled: this.state.aq_currentlyEnrolled,
      aq_numberOfUnits: this.state.aq_numberOfUnits,
      aq_studyPlan: this.state.aq_studyPlan,
      aq_hireDate: this.state.aq_hireDate,
      aq_convicted: this.state.aq_convicted,
      aq_convictReason: this.state.aq_convictReason,
      aq_hospitalize: this.state.aq_hospitalize,
      aq_hospitalizeReason: this.state.aq_hospitalizeReason,
      aq_medicalCondition: this.state.aq_medicalCondition,
      aq_medicalConditionReason: this.state.aq_medicalConditionReason,
      aq_medication: this.state.aq_medication,
      aq_medicationReason: this.state.aq_medicationReason
    })
  }

    render() {

      const { 
              login,
              user,
              email,
              password,
              page,
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
              permanentAddressBrgy,
              permanentAddressCity,
              permanentAddressProvince,
              currentAddressBrgy,
              currentAddressCity,
              currentAddressProvince,
              sameAddress,
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
              aq_hospitalizeReason,
              aq_medicalCondition,
              aq_medicalConditionReason,
              aq_medication,
              aq_medicationReason,
              acceptTerms,
              } = this.state
      
      const values = {
              user,
              email,
              password,
              login,
              page,
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
              permanentAddressBrgy,
              permanentAddressCity,
              permanentAddressProvince,
              currentAddressBrgy,
              currentAddressCity,
              currentAddressProvince,
              sameAddress,
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
              aq_hospitalizeReason,
              aq_medicalCondition,
              aq_medicalConditionReason,
              aq_medication,
              aq_medicationReason,
              acceptTerms,
      }


      switch(page){
        case 0:
          return(
                  <FormPrint/>
                  // <FormLogin 
                  // handleChange={this.handleChange}
                  // values={values}
                  // login={this.login}
                  // />
          )
        case 1:
          return(
                  <FormPersonalInformation
                  values={values}
                  nextPage={this.nextPage}
                  handleChange={this.handleChange}
                  logout={this.logout}
                  />
                 
          )
        
        case 2:
          return(
                  <FormContactDetails
                  values={values}
                  nextPage={this.nextPage}
                  prevPage={this.prevPage}
                  handleChange={this.handleChange}
                  logout={this.logout}
                  />

          )
        case 3:
          return(<FormAddress
                  values={values}
                  nextPage={this.nextPage}
                  prevPage={this.prevPage}
                  handleChange={this.handleChange}
                  checkSameAddress={this.checkSameAddress}
                  logout={this.logout}
                  />
          )
        case 4:
          return(<FormEducation
                  values={values}
                  nextPage={this.nextPage}
                  prevPage={this.prevPage}
                  handleChange={this.handleChange}
                  logout={this.logout}
                  />
          )
        case 5:
          return(<FormWorkExperience
                  values={values}
                  nextPage={this.nextPage}
                  prevPage={this.prevPage}
                  handleChange={this.handleChange}
                  logout={this.logout}
                  />
          )
        case 6:
          return(<FormSourcingChannel
                  values={values}
                  nextPage={this.nextPage}
                  prevPage={this.prevPage}
                  handleChange={this.handleChange}
                  logout={this.logout}
                  />
          )
          case 7:
          return(<FormAdditionalQuestions
                  values={values}
                  nextPage={this.nextPage}
                  prevPage={this.prevPage}
                  handleChange={this.handleChange}
                  logout={this.logout}
                  />
          )
          case 8:
          return(<FormTermsAndConditions
                  values={values}
                  nextPage={this.nextPage}
                  prevPage={this.prevPage}
                  handleChange={this.handleChange}
                  checkAcceptTerms={this.checkAcceptTerms}
                  logout={this.logout}
                  />
          )
          case 9:
          return(<FormConfirmation
                  values={values}
                  nextPage={this.nextPage}
                  prevPage={this.prevPage}
                  logout={this.logout}
                  submit={this.writeData}
                  />
          )

          case 10:
          return(
            <FormSuccess
            values={values}
            registerNewApplicant={this.registerNewApplicant}
            logout={this.logout}
            />
          )

        default:
          return (<FormLogin
                  values={values}
                  handleChange={this.handleChange}
                  login={this.login}
                  />)
    }
  }
}
export default userForm
