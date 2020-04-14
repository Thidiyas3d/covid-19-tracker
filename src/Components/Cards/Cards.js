import React from 'react'
import CountUp from 'react-countup';

const Cards = ({data :{confirmed, recovered, deaths}}) =>{

    if(!confirmed){
        return 'Loading...';
    }
        return (
            <div>
                <CountUp  start={0} end={confirmed.value} duration={2} separator="," />
            </div>
        )
    }


export default Cards
