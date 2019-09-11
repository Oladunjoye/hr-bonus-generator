import React, {Fragment} from "react"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Redirect } from 'react-router-dom'


function SingleReport(props){

   

    if(!props.location.state){
        return <Redirect exact to = '/report' /> 
        
    }
    else{
    const { member, bonusfee, averageTime} = props.location.state
        return(
            
            <Fragment>
            <Navbar/>
            <div className="container single-page">
            <img src = {member.image} alt ="Staff "/>
            <section className ="core-details">
            <div className ="core-items">
            <p>Name</p>
            <p>{member.fullname}</p>
            </div>
            

            <div className ="core-items">
            <p>Total Bonus</p>
            <p>&#8358;{bonusfee}</p>
            </div>

            <div className ="core-items">
            <p>Average Time of Arrival</p>
            <p>{averageTime}</p>
            </div>
            </section>
            <section className= "secondary-details">
            <legend>Daily Arrival </legend>
            <div className ="secondary-items">
            <p>Monday</p>
            <p>{member.monday}</p>
            </div>
            <div className ="secondary-items">
            <p>Tuesday</p>
            <p>{member.tuesday}</p>
            </div>

            <div className ="secondary-items">
            <p>Wednesday</p>
            <p>{member.wednesday}</p>
            </div>
            
            <div className ="secondary-items">
            <p>Thursday</p>
            <p>{member.thursday}</p>
            </div>
            
            <div className ="secondary-items">
            <p>Friday</p>
            <p>{member.friday}</p>
            </div>
            </section>
            </div>
            <Footer/>
            </Fragment>
        )
    }

}
export default SingleReport