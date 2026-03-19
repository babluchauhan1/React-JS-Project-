import React from 'react'
import Section1 from './assets/components/section1/section1'
import Section2 from './assets/components/section2.jsx/Section2'
import Section3 from './assets/components/section3/section3'

const App = () => {

  const users = [
    {
      img:'https://www.shutterstock.com/image-photo/young-happy-asian-business-woman-600nw-2705649071.jpg',
      num:'1',
      intro:'Prime customers. that have access to bank credit and are satisfied with the current product',
      tag:'satisfied'
    },

    {
      img:'https://media.istockphoto.com/id/1133141435/photo/making-big-plans-on-her-cellphone.jpg?s=612x612&w=0&k=20&c=bPIg8ArRZVTtvzijiKRvOpQMvtWYwnzctb6c0Y4IxH4=',
      num:'2',
      intro:'Prime customers, that have sccess to bank credit and are not satisfied with the current service',
      tag:'Unserved'
    },

    {
      img:'https://www.shutterstock.com/image-photo/busy-professional-african-american-business-600nw-2420639455.jpg',
      num:'3',
      intro:'Customersfrom near-prime and sub-prime segments with no access to  bankcredit',
      tag:'Excluded'
    }, 

    {
      img:'https://thumbs.dreamstime.com/b/busy-happy-professional-business-man-using-smartphone-working-office-leader-young-male-executive-smiling-businessman-banking-382866100.jpg',
      num:'4',
      intro:'Individuals from lower credit segments who lack access to formal banking and credit facilities',
      tag:'Unbanked'
    }
  ]

  const data = [
  { year: 2019, value: 45 },
  { year: 2020, value: 54 },
  { year: 2021, value: 71 },
  { year: 2022, value: 92 },
  { year: 2023, value: 110 },
  { year: 2024, value: 145 },
  { year: 2025, value: 194 },
  { year: 2026, value: 245 },
  { year: 2027, value: 300 },
]; 

  return (
    <div>
      <Section1 users={users} />  
      <Section2 data={data} />  
      <Section3 />
      
    </div> 
  ) 
}   
 
export default App 
