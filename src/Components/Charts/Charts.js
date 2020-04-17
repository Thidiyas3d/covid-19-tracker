import React,{useState,useEffect} from 'react'
import {chartApiRequest} from '../../ApiRequests/apiRequests'
import {Line, Bar} from 'react-chartjs-2'
import './charts.css'

const Charts = () =>{


    const [chartData, setChartData] = useState([])

    //useEffect
    useEffect(()=>{
        const fetchData = async()=>{
        setChartData(await chartApiRequest())
    }
    fetchData();
    },[])

    const lineChart = (
        //evaluate
        chartData.length
        ?(
            <Line 
               data={{
                   labels: chartData.map(({date})=>date),
                   datasets:[{
                       data:chartData.map(({confirmed})=>confirmed),
                       label:'Infected',
                       
                       borderColor:'#4bc0c0',
                       fill:true,
                   }, 
                   {
                    data:chartData.map(({deaths})=>deaths),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5',
                    fill:true,
                   }]
               }}
            
            
            />)
            : null
    );


    return(
        <div className="myChart">
            {lineChart}
            
        </div>
    );
}


export default Charts