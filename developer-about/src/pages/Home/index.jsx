
import Navbar from "../../Components/Navbar"
import Contact from "../Contact"
import "./home.css"
import frontphto from "../../assets/frd.jpg"
import road from "../../assets/road.jpg"
import { Box } from "@mui/material"
import About from "../About"
import Course from "../Course"

const Home=()=>{
    return(
        <>
<Navbar/>

<Box>
    <img style={{width:"100%",maxHeight:"600px"}} src={frontphto} alt="" />
</Box>
<About/>
<Box>
    <img style={{width:"100%",maxHeight:"470px"}} src={road} alt="" />
</Box>
<Course/>
<Contact/>

        </>
    )
}

export default Home