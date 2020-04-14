import React, { Component } from 'react'
import Cards from './Components/Cards/Cards'
import Charts from './Components/Charts/Charts'
import CountrySelector from './Components/CountrySelector/CountrySelector'

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : {}
        }

        this.assignData =this.assignData.bind(this);
    }

    assignData(newData){
        this.setState({
            data : newData
        })
    }    
/*
    //Don't make too many requests!!!
    componentDidMount(){
        fetch('https://covid19.mathdro.id/api')
        .then(response => {
           
                return response.json();
        })
        .then(data => {
             this.assignData(data);
            //console.log(confirmed.value, recovered.value,deaths.value);
        })
        .catch(error=>{
            console.log(error)
        })
    }

*/
    render() {
        return (
            <div>
                <h1>Covid-19 Tracker</h1>
                <Cards data={this.state.data}/>
                <CountrySelector />
                <Charts />
                
            </div>
        )
    }
}

export default App;
