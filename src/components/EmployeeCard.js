import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const EmployeeCard = (props) => {
  const {fullname,monday,tuesday,wednesday, thursday, friday, image} = props.staff

  const getMinutes= (dayInput) =>{
    const now = new Date()
  const year = now.getFullYear()
  const month =  now.getMonth();
  const day = now.getDate();
  const dayArray = dayInput.split(':')
  const hour = dayArray[0];
  const min = dayArray[1];
  
  
  return  new Date(year, month, day, hour,min).getMinutes()

  }
  

const calcAverage = (monday,tuesday,wednesday,thursday,friday) => {

  let result = Math.ceil((getMinutes(monday) + getMinutes(tuesday) + getMinutes(wednesday) + getMinutes(thursday) + getMinutes(friday))/5)

  if(result < 10){
    return `0${result}`
  }
  else{
    return result
  }
}



 const averageTime = `08: ${(calcAverage(monday,tuesday,wednesday,thursday,friday))}`
  
  return (
    <MDBCol>
      <MDBCard style={{ width: "20rem" }}>
        <MDBCardImage className="img-fluid" src={image} waves />
        <MDBCardBody>
          <MDBCardTitle>{fullname}</MDBCardTitle>
          
          <MDBCardText>
          Department: Accounts
          </MDBCardText>
          <MDBCardText>
          Average Time in: {averageTime}
          </MDBCardText>
          <MDBBtn disabled color= "blue" href="#">View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default EmployeeCard;