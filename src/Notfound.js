import React, {Component, Fragment} from "react"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class NotFound extends Component{



    render(){

        return(
            <Fragment>
            <Navbar/>
            <div className="container-fluid not-found">
            <img src="/pagenotfound.png" alt ="Notfound"/>
            </div>
            <Footer/>
            </Fragment>
        )
    }
}

export default NotFound