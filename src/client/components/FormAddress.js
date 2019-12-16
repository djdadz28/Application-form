import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Places from './Places'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export class FormAddress extends Component {


    render() {
        const { values, nextPage, prevPage, handleChange, logout, checkSameAddress} = this.props

        const generateProvince = () => {
            const listOfProvinces = []
            for(const p in Places){
                for(const prov in Places[p].province_list){
                    listOfProvinces.push(prov)
                }
            }
            return listOfProvinces.sort()
        }

        const generateCity = (province) => {
            let listOfCities = []
            for(const p in Places){
                
                for(const prov in Places[p].province_list){
                    if(prov === province){
                        for(const city in Places[p].province_list[prov]){
                            listOfCities = Object.keys(Places[p].province_list[prov][city])
                        }
                    }

                }
            }
            return listOfCities.sort()
       }

        const generateBrgy = (myCity) => {
            let listOfBrgy = []
            for(const p in Places){
                for(const prov in Places[p].province_list){
                    for(const city in Places[p].province_list[prov]){
                        for(const brgy in Places[p].province_list[prov][city])
                        if(brgy === myCity)
                        listOfBrgy = Places[p].province_list[prov][city][brgy].barangay_list
                    }
                }

            }
            return listOfBrgy.sort()
        }


        const listOfProvince = generateProvince().map((prov) => <option key={prov} value={prov}>{prov}</option>)
        const permaCity = generateCity(values.permanentAddressProvince).map((city) => <option key={city} value={city}>{city}</option>)
        const permaBrgy = generateBrgy(values.permanentAddressCity).map((brgy) => <option key={brgy} value={brgy}>{brgy}</option>)
        const currentCity = generateCity(values.currentAddressProvince).map((city) => <option key={city} value={city}>{city}</option>)
        const currentBrgy = generateBrgy(values.currentAddressCity).map((brgy) => <option key={brgy} value={brgy}>{brgy}</option>)

        console.log(values.currentAddressBrgy, values.currentAddressCity, values.currentAddressProvince)

        return (
            <React.Fragment>``
            <NavBar navTitle="Address" logout={logout}/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} spacing={2} className="textfield-container">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                            <form id="form-address" onSubmit={(e)=> {e.preventDefault(); nextPage()}}>
                                <Grid container position={'row'} spacing={2} justify="center">
                                    <Grid item xs={12}>
                                    <br/>
                                    <Divider variant="middle" />
                                    <h4>Permanent Address</h4>
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <FormControl variant="outlined" className="textfield-fullwidth">
                                            <InputLabel>
                                            Province
                                            </InputLabel>
                                            <Select
                                            native
                                            labelWidth={62}
                                            defaultValue={values.permanentAddressProvince}
                                            onChange={handleChange('permanentAddressProvince')}
                                            required
                                            >
                                            <option value=""/>
                                            {listOfProvince}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <FormControl variant="outlined" className="textfield-fullwidth">
                                            <InputLabel>
                                            City/Municipality
                                            </InputLabel>
                                            <Select
                                            native
                                            labelWidth={118}
                                            defaultValue={values.permanentAddressCity}
                                            onChange={handleChange('permanentAddressCity')}
                                            required
                                            >
                                            <option value=""/>
                                            {permaCity}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <FormControl variant="outlined" className="textfield-fullwidth">
                                            <InputLabel>
                                            Barangay
                                            </InputLabel>
                                            <Select
                                            native
                                            labelWidth={70}
                                            defaultValue={values.permanentAddressBrgy}
                                            onChange={handleChange('permanentAddressBrgy')}
                                            required
                                            >
                                            <option value=""/>
                                            {permaBrgy}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider variant="middle" />
                                        <h4>Current Address</h4>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={values.sameAddress}
                                            onClick={checkSameAddress}
                                            value="Agree"
                                            color="primary"
                                        />
                                        }
                                        label="Same details as mentioned above?"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <FormControl variant="outlined" className="textfield-fullwidth">
                                            <InputLabel>
                                            Province
                                            </InputLabel>
                                            <Select
                                            native
                                            labelWidth={62}
                                            defaultValue={values.currentAddressProvince}
                                            onChange={handleChange('currentAddressProvince')}
                                            required
                                            disabled={values.sameAddress}
                                            >
                                            <option value=""/>
                                            {listOfProvince}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <FormControl variant="outlined" className="textfield-fullwidth">
                                            <InputLabel>
                                            City/Municipality
                                            </InputLabel>
                                            <Select
                                            native
                                            labelWidth={118}
                                            defaultValue={values.currentAddressCity}
                                            onChange={handleChange('currentAddressCity')}
                                            required
                                            disabled={values.sameAddress}
                                            >
                                            <option value=""/>
                                            {currentCity}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <FormControl variant="outlined" className="textfield-fullwidth">
                                            <InputLabel>
                                            Barangay
                                            </InputLabel>
                                            <Select
                                            native
                                            labelWidth={70}
                                            defaultValue={values.currentAddressBrgy}
                                            onChange={handleChange('currentAddressBrgy')}
                                            required
                                            disabled={values.sameAddress}
                                            >
                                            <option value=""/>
                                            {currentBrgy}
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={6} sm={6}container justify="flex-start">
                                        <Button variant="contained" onClick={prevPage}>
                                            Back
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6} sm={6}container justify="flex-end">
                                        <Button variant="contained" color="primary" type="submit" htmlFor="form-address">
                                            Continue
                                        </Button>
                                    
                                </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default FormAddress
