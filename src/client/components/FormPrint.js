import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import bg from './BG.js'
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import QLogo from '../../Qualfon_logo.png'
import printList from './AppFromPrintList'


export class FormPrint extends Component {

    saveFile = () => {
            const doc = new jsPDF('p', 'in', 'legal')
            
            const bgImage = bg
            doc.addImage(bgImage, 'JPEG', 0.25, 0.25, 8, 12)
            doc.setFont('arial')
            doc.setFontSize('1')
            doc.text(1, 1, 'DJ Dadz Eleco')           
            doc.save('test.pdf')
        }

    download = () => {
        
        html2canvas(document.getElementById("app-form-container")).then(function(canvas) {
            const doc = new jsPDF('p', 'in', 'legal')
            const img = canvas.toDataURL("image/png")
            doc.addImage(img, 'JPEG', 0, 0)
            doc.save('test.pdf')
        })
    }


    render() {

        const { values, nextPage, handleChange, logout} = this.props

        return (
            
                <div id = "app-form-container">                
                    <div id = "app-form-printable" className = "app-form-innerpadding">
                        <div className = "app-form-header">
                            <span className = "app-form-logo"><img src={QLogo} alt="Qualfon Logo"/></span>
                            <span style={{
                                position: "absolute",
                                fontSize: "12px",
                                margin: "0.2in 0 2in 4.5in",
                                width: "2in",
                                fontWeight: "bold"
                            }}
                            >Feb-12-2019  |  9:30 AM</span>
                        </div>
                        <div className = "app-form-privacy" id="test">
                            <h5 className = "privacy-label" style={{marginTop: "-0.01in"}}>PRIVACY NOTICE</h5>
                            <p>{printList.privacy_1}</p>
                            <p>{printList.privacy_2}</p>
                            <h5 className = "privacy-label" style={{marginTop: "-0.05in"}}>CONSENT</h5>
                            <p>{printList.privacy_consent}</p>
                            <div className = "app-form-privacy-sign">
                                <span style={{padding: "0 0.3in", marginRight: "0.5in"}}>Signature over printed name</span>
                                <span style={{padding: "0 0.5in"}}>Date</span>
                            </div>
                        </div>
                        <div className = "app-form-body">
                            <div className = "app-form-divider">
                                <div className = "applicant-name">
                                    <div className = "name-label">
                                        <h5>LAST NAME</h5>
                                        <span>{values.lastName}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "3.5in"}}>
                                        <h5>FIRST NAME</h5>
                                        <span>{values.firstName}</span>
                                    </div>
                                    <div className = "name-label">
                                        <h5>MIDDLE NAME</h5>
                                        <span>{values.middleName}</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label">
                                        <h5>BIRTH DATE</h5>
                                        <span>{values.birthDay}</span>
                                    </div>
                                    <div className = "name-label">
                                        <h5>BIRTH PLACE</h5>
                                        <span>{values.birthPlace}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "0.8in"}}>
                                        <h5>GENDER</h5>
                                        <span>{values.gender}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1in"}}>
                                        <h5>CIVIL STATUS</h5>
                                        <span>{values.civilStatus}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.2in"}}>
                                        <h5>CITIZENSHIP</h5>
                                        <span>{values.citizenship}</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label">
                                        <h5>CONTACT NUMBER</h5>
                                        <span>{values.mobileNumber}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "3.4in"}}>
                                        <h5>EMAIL ADDRESS</h5>
                                        <span>{values.emailAddress}</span>
                                    </div>
                                    <div className = "name-label">
                                        <h5>ALTERNATE CONTACT NUMBER</h5>
                                        <span>{values.alternateMobile}</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "4in"}}>
                                        <h5>EMERGENCY CONTACT PERSON</h5>
                                        <span>{values.emergencyFullName}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.9in"}}>
                                        <h5>CONTACT NUMBER</h5>
                                        <span>{values.emergencyMobile}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>RELATIONSHIP</h5>
                                        <span>{values.relationship}</span>
                                    </div>
                                </div>
                            </div>

                            <div className = "app-form-divider">
                                <div className = "check-enrolled">
                                    <div><br/></div>
                                    <div className = "checkbox-label" >
                                        <span>ANY PLANS OF PURSUING STUDIES</span>
                                        <span className = "checkbox-answer">{values.aq_studyPlan}</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>CURRENTLY ENROLLED?</span>
                                        <span className = "checkbox-answer">{values.aq_currentlyEnrolled}</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>NUMBER OF UNITS:</span>
                                        <span className = "checkbox-answer">{values.aq_numberOfUnits}</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "5in"}}>
                                        <h5>PERMANENT ADDRESS</h5>
                                        <span>{`${values.permanentAddressBrgy}, ${values.permanentAddressCity}, ${values.permanentAddressProvince}`}</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "5in"}}>
                                        <h5>CURRENT ADDRESS</h5>
                                        <span>{`${values.currentAddressBrgy}, ${values.currentAddressCity}, ${values.currentAddressProvince}`}</span>
                                    </div>
                                </div>
                                
                            </div>

                            <div className = "app-form-divider">
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "6in"}}>
                                        <h5>HIGH SCHOOL</h5>
                                        <span>{values.highSchool}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>YEAR ATTENDEND</h5>
                                        <span>{values.highSchoolGradYear}</span>
                                    </div>
                                    
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "6in"}}>
                                        <h5>COLLEGE/UNIVERSITY</h5>
                                        <span>{values.college}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>YEAR ATTENDEND</h5>
                                        <span>{values.collegeGradYear}</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "6in"}}>
                                        <h5>COURSE OF STUDY</h5>
                                        <span>{values.collegeCourse}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>ATTAINMENT</h5>
                                        <span>{values.collegeAttainment}</span>
                                    </div>
                                </div>
                                <br/>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "6in"}}>
                                        <h5>POST GRADUATE / 2ND DEGREE</h5>
                                        <span>{values.college_2}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>YEAR ATTENDEND</h5>
                                        <span>{values.collegeGradYear_2}</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "6in"}}>
                                        <h5>COURSE OF STUDY</h5>
                                        <span>{values.collegeCourse_2}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>ATTAINMENT</h5>
                                        <span>{values.collegeAttainment_2}</span>
                                    </div>
                                </div>
                            </div>

                            <div className = "app-form-divider">
                                <div className = "applicant-name">
                                    <div className = "checkbox-label" style={{width: "3in"}}>
                                        <span>WITH BPO/CALL CENTER EXPERIENCE?</span>
                                        <span className = "checkbox-answer">{values.workBpoExperience}</span>
                                    </div>
                                    <div className = "checkbox-label" style={{width: "3in"}}>
                                        <span>FORMER QUALFON PHILIPPINES INC. EMPLOYEE?</span>
                                        <span className = "checkbox-answer">{values.workQualfonEmployee}</span>
                                    </div>
                                </div>
                                
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "4in"}}>
                                        <h5>COMPANY NAME</h5>
                                        <span>{values.workCompany}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "2in"}}>
                                        <h5>POSITION</h5>
                                        <span>{values.workPosition}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>DURATION</h5>
                                        <span>{values.workDuration}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "2in"}}>
                                        <h5>REASON FOR LEAVING</h5>
                                        <span>{values.workReasonForLeaving}</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "4in"}}>
                                        <h5>COMPANY NAME</h5>
                                        <span>{values.workCompany_2}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "2in"}}>
                                        <h5>POSITION</h5>
                                        <span>{values.workPosition_2}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>DURATION</h5>
                                        <span>{values.workDuration_2}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "2in"}}>
                                        <h5>REASON FOR LEAVING</h5>
                                        <span>{values.workReasonForLeaving_2}</span>
                                    </div>
                                </div>
                            </div>

                            <div className = "app-form-divider">
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "1.1in"}}>
                                        <h5>SOURCING METHOD</h5>
                                        <span>{values.sourceMethod}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "3in"}}>
                                        <h5>SOURCING CHANNEL</h5>
                                        <span>{values.specificSource}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1in"}}>
                                        <h5>RECRUITER</h5>
                                        <span>{values.recruiter}</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "4in"}}>
                                        <h5>NAME OF REFERRER</h5>
                                        <span>{values.referrerFullName}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "2in"}}>
                                        <h5>CONTACT NUMBER</h5>
                                        <span>{values.referrerMobile}</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>EID NUMBER</h5>
                                        <span>{values.referrerID}</span>
                                    </div>
                                </div>
                            </div>

                            <div className = "app-form-divider">
                                <div className = "applicant-name" style={{display: "block"}}>
                                    <div className = "checkbox-label" >
                                        <span>AVAILABILITY TO START:</span>
                                        <span className = "checkbox-answer">{values.aq_hireDate}</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>IF HIRED, ARE YOU WILLING TO SUBMIT AND PASS A CONTROLLED SUBSTANCE TEST?</span>
                                        <span className = "checkbox-answer">YES</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>HAVE YOU EVER BEEN HOSPITALIZED OR HAVE UNDERGONE SURGERY BEFORE?</span>
                                        <span className = "checkbox-answer">{values.aq_hospitalize}</span>
                                        <span className = "">| PLEASE SPECIFY:</span>
                                        <span className = "checkbox-answer">{values.aq_hospitalizeReason}</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>DO YOU HAVE ANY PRE-EXISTING MEDICAL CONDITIONS?</span>
                                        <span className = "checkbox-answer">{values.aq_medicalCondition}</span>
                                        <span className = "">| PLEASE SPECIFY:</span>
                                        <span className = "checkbox-answer">{values.aq_medicalConditionReason}</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>ARE YOU TAKING ANY KIND OR FORM OF MEDICATION?</span>
                                        <span className = "checkbox-answer">{values.aq_medication}</span>
                                        <span className = "">| PLEASE SPECIFY:</span>
                                        <span className = "checkbox-answer">{values.aq_medicationReason}</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>HAVE YOU EVER BEEN CONVICTED OF A CRIMINAL OFFENSE(FELONY OR MISDEMEANOR)?</span>
                                        <span className = "checkbox-answer">{values.aq_convicted}</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>IF YES, PLEASE SPECIFY THE NATURE OF THE OFFENSE INCLUDING DETAILS OF CONVICTION.</span>
                                        <span className = "checkbox-answer">{values.aq_convictReason}</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span style={{fontSize: "8px", fontWeight: "400", fontStyle: "italic"}}>(Note: No applicant will be denied of employment solely on the grounds of conviction of a criminal offense. The date of the offense, the nature of the offense, including any significant details that affect the description of the event, and the surrounding circumstances and the relevance of the offense to the position(s) applied for may, however, be considered.)</span>
                                    </div>
                                    <br/>
                                    <div className = "end-agreement" >
                                        <span>I declare that I understand that this is an application for a position only and does not imply any promises of employment on behalf of QUALFON. I the undersigned applicant hereby declare that all of the information on this Employment Application Form is accurate and true and I understand that any falsehood or omission on my part may be grounds for future dismissal from the position or withdrawal of an offer of employment.</span>
                                    </div>
                                    <div className = "app-form-agreement-sign">
                                        <span style={{padding: "0 0.3in", marginRight: "0.5in"}}>Signature over printed name</span>
                                    </div>
                                </div>
                            </div>
                        </div>          
                    </div>
                    {/* <Button type="submit" onClick={this.download}>Print!</Button> */}
                    <div className="no-print">
                        <Button type="submit" onClick={()=> window.print()}>Print!</Button>
                    </div>
                    
                </div>
        )
    }
}

export default FormPrint
