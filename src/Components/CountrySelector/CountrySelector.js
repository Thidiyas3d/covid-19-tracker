import React,{useState,useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import { countryApiRequest } from '../../ApiRequests/apiRequests'

const CountrySelector = ({ handleCountryChange }) => {

    const [countryData, setCountryData] = useState([])

    useEffect(()=>{
            const fetchData = async()=>{
                setCountryData(await countryApiRequest()) 
            }
            fetchData();
    },[countryData])

    console.log(countryData)
    return(
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
                <option value='global'>Global</option>
               {/* countryData.length ? { countryData.map((country,index)=><option key={index} value={country}>{country}</option>)} : null*/}
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelector