import React, {Component, Fragment} from "react"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BonusTable from "./components/BonusTable"
import { Redirect } from 'react-router-dom'

class ReportPage extends Component{



    render(){
        if(!this.props.location.state){
            return <Redirect to = '/' /> 
            
        }
        else{
        return(
            <Fragment>
            <Navbar/>
           
            <BonusTable staff ={this.props.location.state}/>
            <Footer/>
            </Fragment>
           
        )
    }
}
}

export default ReportPage