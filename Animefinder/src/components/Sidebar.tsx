import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate=useNavigate();
    const navigatetogenre=(genre:string):void=>{
        navigate(`?genre=${genre}`)
    }
  return (
    <Box
    sx={{
      width: '320px',
      minWidth:'180px',
      height: '100vh',
      position: 'fixed', 
      top: 0, 
      left: 0, 
      p: 2,
      bgcolor: 'primary.main',
      color: 'white',
      borderTop: '1px solid white',
      zIndex: 1201,
    }}
  >
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Home"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText >
              <Accordion sx={{bgcolor:"primary.main",color:"white"}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon  sx={{color:"white"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Genres</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <List>

         <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Action" onClick={()=>navigatetogenre("Action")} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Drama"  onClick={()=>navigatetogenre("Drama")}/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Adventure" onClick={()=>navigatetogenre("Adventure")} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Comedy" onClick={()=>navigatetogenre("Comedy")} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Fantasy" onClick={()=>navigatetogenre("Fantasy")} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Sci-Fi" onClick={()=>navigatetogenre("Sci-Fi")} />
            </ListItemButton>
          </ListItem>

         </List>
        </AccordionDetails>
      </Accordion>
              </ListItemText>
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="About Us" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Subscribe" sx={{color:"red"}}/>
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Watch Live"  color='red'/>
            </ListItemButton>
          </ListItem>

      </List>
    </Box>
  )
}

export default Sidebar