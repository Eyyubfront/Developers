import { Box, Stack, Typography,Container,Grid, Link, AppBar } from "@mui/material"
import icon from "../../assets/og.png"
import "./navbar.css"
import BurgerMenu from "../Burgermenu"
const Navbar=()=>{
    return(
    <>
    <Box>

<AppBar
    sx={{
        background: "#fff",
      
        top: "0",
        zIndex: 99,
      }}
>

<Stack className="navbar"  flexDirection="row" justifyContent="space-between" >

<Stack flexDirection="row" gap="3px" alignItems="center">
    <img style={{width:"40px",backgroundSize:"cover"}} src={icon} alt="" />

<Typography color="purple" variant="h6" className="textfront">
  <h3>FrontAkademi</h3>
</Typography>
</Stack>

<Stack
alignItems="center"
 gap="170px"
 flexDirection="row"
 sx={{ display: { xs: "none", md: "flex" } }}
>

<a href="#about">
    <h3>Məlumat</h3>
</a>

<a href="#kurs">
<h3>Mənbə və Kurslar</h3>
    </a>
<a href="#contact"><h3>Əlaqə</h3></a>
</Stack>

<BurgerMenu/>
</Stack>
</AppBar>


</Box>
    
    </>
    )
}
export default Navbar