import React from "react"
import QuickDisplay from "./QuickDisplay"
import './QuickSearch.css';

var turl="https://developerfunnel.herokuapp.com/booking"

class QuickSearch extends React.Component
{

    constructor(){
    super()

    this.state={

        list:''
    }

    }

    render(){
        console.log(this.state.list)
        return(
            <div>
                <QuickDisplay hotelTypes={this.state.list}/>
            </div>
        )
    }

    componentDidMount()
    {
        fetch(turl,{Method:'GET'})
        .then((res)=> res.json())
        .then((data) => { this.setState({list:data})})

    }

}

export default QuickSearch
