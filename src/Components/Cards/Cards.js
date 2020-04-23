import React from 'react'
import CountUp from 'react-countup';
import './cards.css';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) =>{
    
    if(!confirmed){
        return <h5 className="loading">Loading...</h5>;
    }

        return (
            <>
            <div className="container list">
                <div className="card confirmed m-2">
                    <div className="card-body">
                        <h3 className="card-title text-primary">Infected</h3>
                        <h4><CountUp  start={0} end={confirmed.value} duration={2} separator="," /></h4>
                    </div>
                </div>
                <div className="card recovered m-2">
                    <div className="card-body">
                        <h3 className="card-title text-success">Recovered</h3>
                        <h4><CountUp  start={0} end={recovered.value} duration={2} separator="," /></h4>
                    </div>
                </div>
                <div className="card deaths m-2">
                    <div className="card-body">
                        <h3 className="card-title text-danger">Deaths</h3>
                        <h4><CountUp  start={0} end={deaths.value} duration={2} separator="," /></h4>
                    </div>
                </div>
                
            </div>
            <div className="container">
                <h6 className="text-muted last-update">Last updated at {new Date(lastUpdate).toLocaleTimeString()}, {new Date(
                lastUpdate).toDateString()}</h6>
            </div>
            
            </>
        )
    }


export default Cards
