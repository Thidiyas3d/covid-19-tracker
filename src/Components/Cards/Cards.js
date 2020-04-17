import React from 'react'
import CountUp from 'react-countup';
import './cards.css';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) =>{
    
    if(!confirmed){
        return <h5 className="loading">Loading...</h5>;
    }

        return (
            <>
            <div className="cards">
                <div className="card confirmed">
                <h5>Infected</h5>
                <CountUp  start={0} end={confirmed.value} duration={2} separator="," />
                
                </div>
                <div className="card recovered">
                <h5>Recovered</h5>
                <CountUp  start={0} end={recovered.value} duration={2} separator="," />
                </div>
                <div className="card deaths">
                <h5>Deaths</h5>
                <CountUp  start={0} end={deaths.value} duration={2} separator="," />
                </div>
                
            </div>
            <h4 className="last-update">Last updated at {new Date(lastUpdate).toLocaleTimeString()},{new Date(
                lastUpdate).toDateString()}</h4>
            </>
        )
    }


export default Cards
