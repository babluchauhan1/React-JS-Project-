import Navbar2 from "./Navbar2"
import Page2content from "./Page2content"

const Section2 = (props) => {
  return (
    <div className='h-screen w-full '>
        <Navbar2/> 
        <Page2content data={props.data} />
        <div className="w-full h-[1px] bg-gray-300 mt-1"></div>
    </div>   
  ) 
}    
   
export default Section2