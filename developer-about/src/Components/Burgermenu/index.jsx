import {
    Box,
    Dialog,
    IconButton,
    Menu,
    MenuItem,
    Modal,
    Stack,
    Typography,
  } from "@mui/material";
  import { Close } from "@mui/icons-material";
  import MenuIcon from "@mui/icons-material/Menu";
  import { useState } from "react";

  const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Box sx={{ display: { xs: "block", md: "none", color: "white" } }}>
          <IconButton
            onClick={() => {
              setOpen(!open);
            }}
            sx={{ color: "black" }}
          >
            {open ? <Close />  : <MenuIcon /> }
          </IconButton>
          <div style={{ position: 'fixed', right: 0, top: 0, width: '100%', display: open ? 'block' : 'none', zIndex: 1000 }} className="dialog" color="black" fullScreen open={open} >
            <Box className="burgermenubox" sx={{ background: "#d7c8e3", color: "#black"}} width="100%"  height="42vh">
              <Stack flexDirection="row" justifyContent="flex-end">  
                <IconButton
                  sx={{ color: "black" }}
                  edge="end"
                  color="black"
                  onClick={() => setOpen(false)}
                >
                  <Close />
                </IconButton>
              </Stack>
  
              <Stack gap="30px" textAlign="center">
              <a href="#about">
    <h3>Məlumat</h3>
</a>

<a href="#kurs">Mənbə və Kurslar</a>


<a href="#contact">Əlaqə</a>
  
              </Stack>
  
            </Box>
          </div>
        </Box>
      </>
    );
  };
  
  export default BurgerMenu;