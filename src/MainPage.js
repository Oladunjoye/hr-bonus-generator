import React, {Component, Fragment} from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import EmployeeCard from "./components/EmployeeCard";
import { MDBBtn, MDBIcon} from 'mdbreact';
import {Link} from "react-router-dom"
import ModalPage from "./components/Modals";


class MainPage extends Component{

    state={
        modal2: false,
        modal3: false,
        staff: JSON.parse(localStorage.getItem('staff')) || []
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
        
      }

      customToggle = ()=> {
        this.setState({
            modal2: false
        })
      }

      handleSubmit =(input) =>{
      
       
        
        const newStaff =  [...this.state.staff, input]
        this.setState({staff: newStaff })
        localStorage.setItem('staff', JSON.stringify(newStaff) )
         
        

      }

    render(){
        const {staff} = this.state
       const disable = staff.length >= 5 
       const reportDisable = staff.length < 5
       let employees = ''
       if(staff.length >= 1){
        employees  =  staff.map((member,index) => {
            return <EmployeeCard key={index} staff ={member}  />
       })
    }
       const employeeDisplay = employees.length < 1 ? 
       <div className="welcome-address">
       <h1>Welcome , add staff to get started!</h1>
       <p>Add all staff to generate bonus report</p>
       </div> : employees 
        return(
            <Fragment>
            <Navbar/>
            <div className ="container-fluid mainpage">
            <header >
            
            
            
            <Link style={{ pointerEvents: reportDisable ? 'none': '' }}   className ="btn btn-default generate-button"  to={{
              pathname: "/report",
              state: this.state.staff
            }}>Generate Report
            </Link>
           
           
            <MDBBtn disabled = {disable} onClick={ this.toggle(2)}  color= "cyan" href="#">
            <MDBIcon   icon="plus" className="mr-1" /> Add Staff</MDBBtn>

            </header>
            <hr/>
           
            <div className="container employees">
            {employeeDisplay}
            </div>

            <hr/>
            <div className="button-layer">
            <Link style={{ pointerEvents: reportDisable ? 'none': '' }} className ="btn btn-default generate-button"  to={{
              pathname: "/report",
              state: this.state.staff
            }}>Generate Report
            </Link>
            </div>

            </div>
            <ModalPage state ={this.state} customToggle ={this.customToggle} toggle ={this.toggle} handleSubmit= {this.handleSubmit} />
            <Footer/>
            </Fragment>
        )
    }
}

export default MainPage