import React,{Component} from 'react';
import './Search.css';

const lurl = "https://developerfunnel.herokuapp.com/location"
const hurl = "https://developerfunnel.herokuapp.com/hotels?city="


class Search extends Component
{
constructor(){

    super();
    this.state={
        location:'',
        hotels:''
    }
}

citySelectionChange =(event)=>{
    //var cityId=this.event.target.value 
    //console.log(event.target.value)
    var cityId=event.target.value;
    var hotelurl=`${hurl+cityId}`
    console.log(hotelurl)
    fetch(hotelurl,{Method:'GET'})
    .then((res)=> res.json())
    .then((data) => { this.setState({hotels:data})})    
}

renderHotelList=(hotelList)=>{
    if(hotelList)
    {
        return hotelList.map(item=> {
                return(
                    <option key={item._id} value={item._id}>
                        {item.name}
                    </option>
                )
            })
            
    }
}
renderCityList(props)
{
    if(props)
    {
        return props.map((item) =>{            
            return(                
                <option key={item._id} value={item.city}>
                    {item.city_name}
                </option>)
        })
    }   
}
render(){
    return(

        <div className="imageContainer">
               <div id="logo">
                   <b>D!</b>
               </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select  onChange={this.citySelectionChange}>
                        <option>----SELECT CITY---</option>
                        {this.renderCityList(this.state.location)}
                    </select>
                    <select>
                        <option>----SELECT Hotel---</option>
                        {this.renderHotelList(this.state.hotels)}
                    </select>
                </div>
           </div>
    )}

    componentDidMount(){
        fetch(lurl,{Method:'GET'})
        .then((res) => res.json())
        .then((data) => { this.setState({location:data})})        
    }

}

export default Search