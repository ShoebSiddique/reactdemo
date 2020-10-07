import React from "react"
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Home/Main"
import Footer from "./Footer"
import Header from "./Header"


function Routing (){
return(

    <BrowserRouter>
        <div>
            <Header/>
            <Route path="/" component={Home}/>            
            <Footer/>
        </div>
    </BrowserRouter>
)}


export default Routing