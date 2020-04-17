import React, { Component } from 'react'
import Cards from './Components/Cards/Cards'
import Charts from './Components/Charts/Charts'
import CountrySelector from './Components/CountrySelector/CountrySelector'
import './App.css'

class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             results:{}
        }
    }
    //#666666
    
    //Don't make too many requests!!!
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
        const {results} = this.state
        return(
            <div className="app">
                <h1>Covid-19 Tracker</h1>
                <Cards data={results}/>
                <CountrySelector />
                <Charts />
                
            </div>
        )
    }
}

export default App;
