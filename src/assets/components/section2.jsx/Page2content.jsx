import Leftcontent2 from "./Leftcontent2"
import Rightsection2 from "./Rightsection2"

const Page2content = (props) => {
  return (
    <div className='flex justify-between items-center h-[90vh] pb-16 pt-6 px-18 gap-10'>  
        <Leftcontent2/>  
        <Rightsection2 data={props.data} />  
    </div>   
  )   
}   

export default Page2content  