import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
// state={
//   modal2: false,
//   modal3: false,
//   modal4: false,
//   modal5: false
state ={
  fullname: '',
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  image: ''
}

submitt = async(e) =>{
  e.preventDefault()
  try{
   const apiPromise =  await fetch('https://randomuser.me/api/?results=1')
  const apiJSON =  await apiPromise.json()
  const image = await apiJSON.results[0].picture.large
  this.setState({image})
  this.props.customToggle()
  this.props.handleSubmit(this.state)
  }


  catch(err){
     console.log(err)

  }


this.setState({
  fullname: '',
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  image: ''
  
})

}
handleChange =(e) =>{
return this.setState({[e.target.name]: e.target.value})
}
render() {
    const {state, toggle} =  this.props
  return (
    <MDBContainer>

      <MDBModal isOpen={ state.modal2} toggle={ toggle(2)}>
      <form onSubmit= {this.submitt} className="add-staff-form">
        <MDBModalHeader toggle={ toggle(2)}>Add Staff</MDBModalHeader>
        <MDBModalBody>
       
        <label
          htmlFor="defaultFormCardNameEx"
          className="black-text font-weight-light"
        >
          Staff Name
        </label>
        <input
          type="text"
          id="defaultFormCardNameEx"
          className="form-control "
          name="fullname"
          required
          value={this.state.fullname}
          onChange={this.handleChange}
        />
        <br />
        
        <fieldset>
        <legend>Daily Arrival</legend>
        <label
        htmlFor="defaultFormCardEmailEx"
        className="black-text font-weight-light"
      >
        Monday
      </label>
      <input
        type="time"
        id="defaultFormCardEmailEx"
        className="form-control mb-2"
        name="monday"
        min="08:00"
        max="08:59"
        required
        value={this.state.monday}
        onChange={this.handleChange}
      />
      <label
        htmlFor="defaultFormCardEmailEx"
        className="black-text font-weight-light"
      >
        Tuesday
      </label>
      <input
        type="time"
        id="defaultFormCardEmailEx"
        className="form-control mb-2"
        name="tuesday"
        min="08:00"
        max="08:59"
        required
        value={this.state.tuesday}
        onChange={this.handleChange}
      />
      <label
        htmlFor="defaultFormCardEmailEx"
        className="black-text font-weight-light"
      >
         Wednesday
      </label>
      <input
        type="time"
        id="defaultFormCardEmailEx"
        className="form-control mb-2"
        name="wednesday"
        min="08:00"
        max="08:59"
        required
        value={this.state.wednesday}
        onChange={this.handleChange}
      />
      <label
        htmlFor="defaultFormCardEmailEx"
        className="black-text font-weight-light"
      >
        Thursday
      </label>
      <input
        type="time"
        id="defaultFormCardEmailEx"
        className="form-control mb-2"
        name="thursday"
        min="08:00"
        max="08:59"
        required
        value={this.state.thursday}
        onChange={this.handleChange}
      />
      <label
        htmlFor="defaultFormCardEmailEx"
        className="black-text font-weight-light"
      >
        Friday
      </label>
      <input
        type="time"
        id="defaultFormCardEmailEx"
        className="form-control mb-2"
        name="friday"
        min="08:00"
        max="08:59"
        required
        value={this.state.friday}
        onChange={this.handleChange}
      />
        
        </fieldset>
        
     
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn type="submit" color="secondary" >Submit</MDBBtn>
         
        </MDBModalFooter>
        </form>
      </MDBModal>


     
    </MDBContainer>
    );
  }
}

export default ModalPage;



       