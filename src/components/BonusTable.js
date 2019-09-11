import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from 'mdbreact';
import {Link} from "react-router-dom"
const  BonusTable = ({staff}) => {

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

      function round5(x)
      {
          return Math.ceil(x/5)*5;
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

    const rows =  staff.map((member, index) => {
      const days = [getMinutes(member.monday),getMinutes(member.tuesday), getMinutes(member.wednesday), getMinutes(member.thursday), getMinutes(member.friday)]
      
  
     const bonusfee =  days.reduce((total,day) => {
        return total + (((60 - round5(day))/5)* 50)
      }, 0) 

     
      
      
      
       const averageTime = `08: ${(calcAverage(member.monday,member.tuesday,member.wednesday,member.thursday,member.friday))}`
      return (
         
        <tr key ={index} >
        
          <td>{index+ 1}</td>
          <td>{member.fullname}</td>
          <td>{averageTime}</td>
          
          <td>&#8358;{bonusfee}</td>

          <td>
          <Link  to={{
            pathname: `/report/${member.fullname}`,
            state: { member, bonusfee, averageTime }
          }} className="single-term-link">
          <MDBIcon data-toggle="tooltip" title="View Staff!" far icon="eye" />
        </Link>
        </td>
        </tr>
        )
    })
  return (
      <div className="container bonus-page">
    <MDBTable hover>
      <MDBTableHead color ="blue">
        <tr>
          <th>#</th>
          <th>Staff Name</th>
          <th>Average Time In</th>
          
          <th>Total Bonus  (Week) </th>
          <th> View </th>


        </tr>
      </MDBTableHead>
      <MDBTableBody>
     {rows}
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}

export default  BonusTable;