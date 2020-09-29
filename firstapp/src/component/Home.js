
import React,{Component,Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import Data from '../db.json'
import NewsList from "./NewsList"

class Home extends Component{
    constructor()
    {
        super()
        this.state={
            news:Data,
            filtered:Data
        }
    }

    filterNews(usertext)
    {
        const output = this.state.news.filter((data) =>{
            return data.title.toLowerCase().indexOf(usertext.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }
    render()
    {

        return (
            <div>
                {/* <Header userText={(data)=> {(console.log(data+'acc'))}}/> */}
                <Header userText={(data)=> {(this.filterNews(data))}}/> 
                <NewsList newsdata={this.state.filtered}/>
                <Footer year="2021" month="Sep"/>
            </div>
            );

    }

}

// function Home()
// {
//     return (
//     <div>
//         {/* <Header userText={(data)=> {(console.log(data+'acc'))}}/> */}
//         <Header userText={(data)=> {(console.log(data+'acc'))}}/> 
//         <Footer year="2021" month="Sep"/>
//     </div>
//     );

// }



export default Home;