import React, { Component } from 'react'
import Cards from './Components/Cards/Cards'
import Charts from './Components/Charts/Charts'
import CountrySelector from './Components/CountrySelector/CountrySelector'
import './App.css'

class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             results:{},
             country:'',
        }
       
    }

    handleCountryChange = async (c)=>{
        fetch(`https://covid19.mathdro.id/api/countries/${c}`)
        .then(response => {
                return response.json();
        })
        .then(data=> {
             this.setState({results: data, country : c })
        })
        .catch(error=>{
            console.log(error)
        })
    
        
    }
    
    componentDidMount(){
        fetch('https://covid19.mathdro.id/api')
        .then(response => {
                return response.json();
        })
        .then(data=> {
             this.setState({results: data })
        })
        .catch(error=>{
            console.log(error)
        })
    }



    render() {
        const {results, country} = this.state
        return(
            <div className="app">
                <h1 className="covid-19"><b>Covid-19 Tracker</b></h1>
                
                <Cards data={results}/>

                <CountrySelector handleCountryChange={this.handleCountryChange}/>
                
                <Charts results={results} country={country}/>
                
            </div>
        )
    }
}

export default App;
