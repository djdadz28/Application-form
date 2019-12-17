import React, { Component } from 'react'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import NavBar from './NavBar'
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
            const doc = new jsPDF('p', 'in', 'legal')
            html2canvas(document.body).then(function(canvas) {
                document.body.appendChild(canvas)
            })
        }


    render() {

        const { values, nextPage, handleChange, logout} = this.props

        return (
                <div id = "app-form-container">
                    <div className = "app-form-innerpadding">
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
                                        <span>ELECO</span>
                                    </div>
                                    <div className = "name-label" style={{width: "3.5in"}}>
                                        <h5>FIRST NAME</h5>
                                        <span>DJ DADZ</span>
                                    </div>
                                    <div className = "name-label">
                                        <h5>MIDDLE NAME</h5>
                                        <span>MONTERO</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label">
                                        <h5>BIRTH DATE</h5>
                                        <span>DECEMBER 28, 1993</span>
                                    </div>
                                    <div className = "name-label">
                                        <h5>BIRTH PLACE</h5>
                                        <span>CANLAON</span>
                                    </div>
                                    <div className = "name-label" style={{width: "0.8in"}}>
                                        <h5>GENDER</h5>
                                        <span>MALE</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1in"}}>
                                        <h5>CIVIL STATUS</h5>
                                        <span>SINGLE</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.2in"}}>
                                        <h5>CITIZENSHIP</h5>
                                        <span>FILIPINO</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label">
                                        <h5>CONTACT NUMBER</h5>
                                        <span>09186472985</span>
                                    </div>
                                    <div className = "name-label" style={{width: "3.4in"}}>
                                        <h5>EMAIL ADDRESS</h5>
                                        <span>DJDADZ28@GMAIL.COM</span>
                                    </div>
                                    <div className = "name-label">
                                        <h5>ALTERNATE CONTACT NUMBER</h5>
                                        <span>09187654321</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "4in"}}>
                                        <h5>EMERGENCY CONTACT PERSON</h5>
                                        <span>MYCA MONTERO</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.9in"}}>
                                        <h5>CONTACT NUMBER</h5>
                                        <span>09181234567</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>RELATIONSHIP</h5>
                                        <span>SISTER</span>
                                    </div>
                                </div>
                            </div>

                            <div className = "app-form-divider">
                                <div className = "check-enrolled">
                                    <div><br/></div>
                                    <div className = "checkbox-label" >
                                        <span>ANY PLANS OF PURSUING STUDIES</span>
                                        <span className = "checkbox-answer">YES</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>CURRENTLY ENROLLED?</span>
                                        <span className = "checkbox-answer">YES</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>NUMBER OF UNITS:</span>
                                        <span className = "checkbox-answer">15</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "5in"}}>
                                        <h5>PERMANENT ADDRESS</h5>
                                        <span>MABIGO, CANLAON CITY, NEGROS ORIENTAL</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "5in"}}>
                                        <h5>CURRENT ADDRESS</h5>
                                        <span>PULANTUBIG, DUMAGUETE CITY, NEGROS ORIENTAL</span>
                                    </div>
                                </div>
                                
                            </div>

                            <div className = "app-form-divider">
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "6in"}}>
                                        <h5>HIGH SCHOOL</h5>
                                        <span>ST. JOSEPH COLLEGE OF CANLAON</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>YEAR ATTENDEND</h5>
                                        <span>2009</span>
                                    </div>
                                    
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "6in"}}>
                                        <h5>COLLEGE/UNIVERSITY</h5>
                                        <span>NEGROS ORIENTAL STATE UNIVERSITY</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>YEAR ATTENDEND</h5>
                                        <span>2019</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "6in"}}>
                                        <h5>COURSE OF STUDY</h5>
                                        <span>BS - COMPUTER SCIENCE</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>ATTAINMENT</h5>
                                        <span>4 YEAR GRADUATE</span>
                                    </div>
                                </div>
                                <br/>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "6in"}}>
                                        <h5>POST GRADUATE / 2ND DEGREE</h5>
                                        <span>SILLIMAN UNIVERSITY</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>YEAR ATTENDEND</h5>
                                        <span>2023</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "6in"}}>
                                        <h5>COURSE OF STUDY</h5>
                                        <span>MASTER IN COMPUTER SCIENCE</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>ATTAINMENT</h5>
                                        <span>3RD YEAR LEVEL</span>
                                    </div>
                                </div>
                            </div>

                            <div className = "app-form-divider">
                                <div className = "applicant-name">
                                    <div className = "checkbox-label" style={{width: "3in"}}>
                                        <span>WITH BPO/CALL CENTER EXPERIENCE?</span>
                                        <span className = "checkbox-answer">YES</span>
                                    </div>
                                    <div className = "checkbox-label" style={{width: "3in"}}>
                                        <span>FORMER QUALFON PHILIPPINES INC. EMPLOYEE?</span>
                                        <span className = "checkbox-answer">YES</span>
                                    </div>
                                </div>
                                
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "4in"}}>
                                        <h5>COMPANY NAME</h5>
                                        <span>QUALFON PHILIPPINES INC</span>
                                    </div>
                                    <div className = "name-label" style={{width: "2in"}}>
                                        <h5>POSITION</h5>
                                        <span>RECRUITMENT SPECIALIST</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>DURATION</h5>
                                        <span>1 - 2 YEARS</span>
                                    </div>
                                    <div className = "name-label" style={{width: "2in"}}>
                                        <h5>REASON FOR LEAVING</h5>
                                        <span>I GOT TERMINATED</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "4in"}}>
                                        <h5>COMPANY NAME</h5>
                                        <span>QUALFON PHILIPPINES INC</span>
                                    </div>
                                    <div className = "name-label" style={{width: "2in"}}>
                                        <h5>POSITION</h5>
                                        <span>RECRUITMENT SPECIALIST</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>DURATION</h5>
                                        <span>1 - 2 YEARS</span>
                                    </div>
                                    <div className = "name-label" style={{width: "2in"}}>
                                        <h5>REASON FOR LEAVING</h5>
                                        <span>I GOT TERMINATED</span>
                                    </div>
                                </div>
                            </div>

                            <div className = "app-form-divider">
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "1.1in"}}>
                                        <h5>SOURCING METHOD</h5>
                                        <span>PHONESCREENED</span>
                                    </div>
                                    <div className = "name-label" style={{width: "3in"}}>
                                        <h5>SOURCING CHANNEL</h5>
                                        <span>EMPLOYEE REFERRAL (ERP)</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1in"}}>
                                        <h5>RECRUITER</h5>
                                        <span>JIJIE</span>
                                    </div>
                                </div>
                                <div className = "applicant-name">
                                    <div className = "name-label" style={{width: "4in"}}>
                                        <h5>NAME OF REFERRER</h5>
                                        <span>AILEEN DURAN</span>
                                    </div>
                                    <div className = "name-label" style={{width: "2in"}}>
                                        <h5>CONTACT NUMBER</h5>
                                        <span>09189876543</span>
                                    </div>
                                    <div className = "name-label" style={{width: "1.5in"}}>
                                        <h5>EID NUMBER</h5>
                                        <span>4000</span>
                                    </div>
                                </div>
                            </div>

                            <div className = "app-form-divider">
                                <div className = "applicant-name" style={{display: "block"}}>
                                    <div className = "checkbox-label" >
                                        <span>AVAILABILITY TO START:</span>
                                        <span className = "checkbox-answer">DECEMBER 20, 2019</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>IF HIRED, ARE YOU WILLING TO SUBMIT AND PASS A CONTROLLED SUBSTANCE TEST?</span>
                                        <span className = "checkbox-answer">YES</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>HAVE YOU EVER BEEN HOSPITALIZED OR HAVE UNDERGONE SURGERY BEFORE?</span>
                                        <span className = "checkbox-answer">NO</span>
                                        <span className = "">| PLEASE SPECIFY:</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>DO YOU HAVE ANY PRE-EXISTING MEDICAL CONDITIONS?</span>
                                        <span className = "checkbox-answer">NO</span>
                                        <span className = "">| PLEASE SPECIFY:</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>ARE YOU TAKING ANY KIND OR FORM OF MEDICATION?</span>
                                        <span className = "checkbox-answer">NO</span>
                                        <span className = "">| PLEASE SPECIFY:</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>HAVE YOU EVER BEEN CONVICTED OF A CRIMINAL OFFENSE(FELONY OR MISDEMEANOR)?</span>
                                        <span className = "checkbox-answer">NO</span>
                                    </div>
                                    <div className = "checkbox-label" >
                                        <span>IF YES, PLEASE SPECIFY THE NATURE OF THE OFFENSE INCLUDING DETAILS OF CONVICTION.</span>
                                        <span className = "checkbox-answer">I WAS ACCUSED OF BEING A PEDOPHILE</span>
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
                    <Button type="submit" onClick={this.download}>Print!</Button>
                </div>
                
        )
    }
}

export default FormPrint
