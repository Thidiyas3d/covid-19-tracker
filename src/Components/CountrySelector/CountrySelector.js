import React,{useState,useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import { countryApiRequest } from '../../ApiRequests/apiRequests'
import './CountrySelector.css'

const CountrySelector = ({handleCountryChange}) => {

    const [countryData, setCountryData] = useState([])

    useEffect(()=>{
            const fetchData = async()=>{
                setCountryData(await countryApiRequest()) 
            }
            fetchData();
    },[])

    return(
            <FormControl class="container c">
            <NativeSelect  onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
             {countryData.map((country, index)=> <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
            
        
    );
}

export default CountrySelector