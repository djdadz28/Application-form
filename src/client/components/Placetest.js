import React, { Component } from 'react'
import Places from './Places'

export class Placetest extends Component {
    render() {

        const generateProvince = () => {
            const listOfProvinces = []
            for(const p in Places){
                for(const prov in Places[p].province_list){
                    listOfProvinces.push(prov)
                }
            }
            return listOfProvinces
        }

        const generateCity = (province) => {

            for(const p in Places){
                for(const prov in Places[p].province_list){
                    if(prov === "NEGROS OCCIDENTAL"){
                        for(const city in Places[p].province_list[prov]){
                            return Object.keys(Places[p].province_list[prov][city])
                        }
                    }

                }
            }
       }

        const generateBrgy = (city) => {
            for(const p in Places){
                for(const prov in Places[p].province_list){
                    for(const city in Places[p].province_list[prov]){
                        for(const brgy in Places[p].province_list[prov][city])
                        if(brgy === "DUMAGUETE CITY")
                        return Places[p].province_list[prov][city][brgy].barangay_list
                    }
                }

            }
        }

        const generateMe = generateBrgy()
        


       console.log(generateProvince())

        return (
            <div>
                
            </div>
        )
    }
}

export default Placetest
