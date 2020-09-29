import React,{Component,Fragment} from "react"
import './Header.css'


class Header extends Component
{
    constructor(){

        super()

        this.state={
            title:'React State App',
            keyword:'User Input Here'
        }

        this.handleClick = this.handleClick.bind(this);
    }
    


    handleClick(event) {
        console.log(event.target.value)
        this.props.userText(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        // this.setState(state => ({
        //     keyword:event.target.value?event.target.value:'User Text Here'
        //   }));
        this.props.userText(event.target.value)
      }



    
    inputChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)

    }

    render(){
        console.log("Render method call");
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>                       
                        <input onChange={this.handleClick} placeholder="My text"/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
            </Fragment>

        )
    }

}
export default Header;