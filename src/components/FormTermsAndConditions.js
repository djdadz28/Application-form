import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

//linked files are ReferralFields.js, SourceGenerator.js and ListOfSource.js

export class FormTermAndConditions extends Component {

    

    render() {
        const { values, nextPage, prevPage, checkAcceptTerms} = this.props

        return (
            <React.Fragment>
            <NavBar navTitle="Terms And Conditions"/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position='row' spacing={3} className="textfield-container" alignItems="center" justify="center">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider variant="middle" />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <h3>Terms and conditions</h3>
                            <div className="privacy-notice">
                            <h5>PRIVACY NOTICE</h5>
                            <p>
                            All Personal Information collected in or submitted together with this form shall be used for recruitment, pooling, screening and background check purposes only and shall form part of your employee record in case of a successful hire. This information may be stored or transferred to affiliates or third parties providing services to Qualfon, which may be located within or outside the Philippines. Qualfon may also disclose information, to government entities in response to a court order or as required by applicable laws. Your record shall be retained for a maximum period of _______ and shall be disposed thereafter or earlier upon determination that there is no more business need to keep it. The collection, use, storage, retention, disclosure and disposal of your data are carried out under conditions of confidentiality and security consistent with the Data Protection Act.
                            </p>
                            
                            <p>
                            A complete list of your rights is available on NPCs website: <b><u>https://www.privacy.gov.philippines</u></b>
                            </p>
                            <p>
                            For any requests or concerns related to your Personal Information, our policy or this privacy notice you may approach any of our recruitment officer or you may reach our Data Protection Officer via email: privacy@qualfon.com
                            </p>
                            <br/>
                            <h5>CONSENT</h5>
                            <p>
                            I am aware of my rights as a Data Subject. I have read and understood the Qualfon Privacy Notice and consent to the processing of my Personal Information.
                            </p>
                             
                            <p>
                            1. Applicants who are 18 to 21 years old must have parent's consent in applying for this Job (CSR position).
                            </p>

                            <p>
                            2. The applicant must be amenable to shifing work schedule, rending overtime, and working on holidays/weekends.
                            </p>

                            <p>
                            3. If hired, the applicant must be willing to submit and pass a controlled substance test.
                            </p>

                            <p>
                            4. Former Qualfon Philippines Inc. employees, from any Qualfon sites, must disclose their previous work experience in Qualfon by filling out the Work Experience Page(Application form), and also during the Interview.
                            </p>

                            <p style={{fontSize: "11px"}}><i><b>
                            I declare that I understand that this is an application for a position only and does not imply any promises of employment on behalf of QUALFON. I the undersigned applicant hereby declare that all of the information on this Employment Application Form is accurate and true and I understand that any falsehood or omission on my part may be grounds for future dismissal from the position or withdrawal of an offer of employment.
                            </b></i></p>
                            </div> 
                        </Grid>


                        <Grid item xs={12}>
                        <FormControlLabel
                        control={
                        <Checkbox
                            checked={values.acceptTerms}
                            onClick={checkAcceptTerms}
                            value="Agree"
                            color="primary"
                        />
                        }
                        label="Accept the terms and conditions"
                    />
                        </Grid>
                        <Grid item xs={6} sm={6}container justify="flex-start">
                            <Button variant="contained" onClick={prevPage}>
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={6}container justify="flex-end">
                            <Button variant="contained" color="primary" onClick={() => {if(values.acceptTerms) {nextPage()} }}>
                                Continue
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default FormTermAndConditions
