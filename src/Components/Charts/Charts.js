import React,{useState,useEffect} from 'react'
import {chartApiRequest} from '../../ApiRequests/apiRequests'
import {Line, Bar} from 'react-chartjs-2'
import './Charts.css'

const Charts = ({results:{confirmed,recovered, deaths}, country}) =>{


    const [chartData, setChartData] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
        setChartData(await chartApiRequest())
    }
    fetchData();
    },[])

    
//Line chart
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

//bar chart
const barChart = (
    confirmed ? <Bar 
        data= {{
            labels:['Infected', 'Recovered', 'Deaths'],
            datasets:[{
                label:['Total'],
                backgroundColor:['#007bff', 'green' , 'red'],
                data:[confirmed.value,recovered.value,deaths.value],
            }]
        }}
        options={{
            title:{display:true, text: `Current state in ${country}`},
            legend:{display: false}
        }}
    /> : null
)

    return(
        <div className="container charts mb-5">
            {country ? barChart : lineChart}
            
        </div>
    );
}


export default Charts