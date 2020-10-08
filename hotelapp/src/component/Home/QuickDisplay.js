import React from "react"
import './QuickSearch.css';
import {Link}  from 'react-router-dom';


const listTripData=({hotelTypes})=>{
    if(hotelTypes)
    {
       return hotelTypes.map((item) => {
        return(
            <Link to="/">
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src={item.image}/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            {item.name}
                        </div>                        
                    </div>
                    <div className="componentSubHeading">
                        Start you  {item.name} Trip with us
                    </div>
                </div>
            </Link>

       )})
                
    }   

}

const QuickDisplay =(prop)=>{
    //console.log(prop.hotelTypes)
    //const {hotelTypes}=({hotelTypes})
    //console.log(this.prop.hotelTypes)
    //const {hotelTypes} = ({prop});
    //console.log(hotelTypes)
    return(
        <div>
            <div className="quickSearchContainer">                
                   <p className="quickSearchHeding">Quick Search </p> 
                   <p className="quickSearchSubHeding">
                        Discoiver Hotels By types
                   </p>     
                   <br />
                   {listTripData(prop)}
            </div>

        </div>


    )
}



export default QuickDisplay


