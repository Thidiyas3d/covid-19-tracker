import axios from "axios";

const url = 'https://covid19.mathdro.id/api';


//Chart api request
export const chartApiRequest =async () =>{

   try {
       const {data} = await axios.get(url+'/daily');
       const modifiedData = data.map((item)=>({
           confirmed:item.confirmed.total,
           deaths:item.deaths.total,
           date:item.reportDate
       }))

       return modifiedData;
   } catch (error) {

       
   }
}

//CountrySelector api request
export const countryApiRequest = async() => {
    try {
        const response = await fetch(url+'/countries');
        const {data:{countries}} = await response.json();
        const country = countries.map((c)=>c.name)
        return(country);
        
    } catch (error) {
        console.log(error)
        
    }
}

