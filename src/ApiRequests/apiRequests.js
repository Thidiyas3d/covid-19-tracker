import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

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

