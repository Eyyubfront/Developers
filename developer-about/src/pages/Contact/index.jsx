import icon from "../../assets/og.png"
import { Stack,Typography } from "@mui/material"
import git from "../../assets/git.png"
import email from "../../assets/email.png"
import linkend from "../../assets/lk.jpg"
import "./contact.css"
const Contact=()=>{
    return(
        <>
     <div  id="contact">
        <Stack className="footers">

     <Stack className="logos" flexDirection="row" gap="3px" alignItems="center">
    <img style={{width:"40px",backgroundSize:"cover"}} src={icon} alt="" />

<Typography color="purple" variant="h6" className="textfront">
  <h3>FrontAkademi</h3>
</Typography>
</Stack>

<Stack className="iconscontact">

<Stack className="contacticon" flexDirection="row" alignItems="center" gap="20px">
    <a href="https://github.com/Eyyubfront?tab=repositories">

<img style={{width:"30px"}} src={git} alt="" />
    </a>

    <a href="mailto:eyyubbayramov811@gmail.com">
    <img style={{width:"50px"}} src={email} alt="" />
    </a>

<a href="https://www.linkedin.com/in/eyyub-bayramov-329016287/">
<img style={{width:"50px"}} src={linkend} alt="" />
</a>
</Stack>

<Stack className="hreffoter" gap="140px" flexDirection="row" justifyContent="space-between">
<a href="#about">
    <h3>Məlumat</h3>
</a>

<a href="#kurs">
<h3>Mənbə və Kurslar</h3>
    </a>
<a href="#contact"><h3>Əlaqə</h3></a>
</Stack>
</Stack>
        </Stack>


     </div>
        </>
    )
}
export default Contact