import React from "react";
import './home.scss'
import {Avatar,
  Stack,
  Typography,
  Button,
  Tabs,
  Tab,
  Link,
  Box} from '@mui/material';
import TabPanel from "../Componentes/tabPanel";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import {useState} from 'react';
import ChipSelect from "../Componentes/ChipSelect";
import Proyectos from "../Componentes/Proyectos";
import Imagen from "../assets/imagen.jpg"
import Pdf from "../assets/cv.pdf"


function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls' : `simple-tabpanel-${index}`,
  };
}


function Home() {
  const [value, setvalue] = useState(0);

  const handleChange = (e, newValue) => {
    setvalue(newValue);
  }
    return (
      <Stack
        className=""
        justifyContent="center"
        alignItems="center"
      >
        <br></br>
        <br></br>
        <Avatar 
          alt="Eugenia" 
          src={Imagen}
          sx={{ width: 190, height: 190 , border: '8px solid #E0BCF0'}} 
          />
          <br></br>

        <Typography variant="h5" 
        gutterBottom commponent="div">
          Eugenia Salazar Acuña
        </Typography>
        
        <Typography variant="h6" 
        gutterBottom commponent="div">
          Desarrollador Web Full Stack
        </Typography>

        <Typography variant="subtitle2" 
        gutterBottom commponent="div">
          Tucuman, Argentina
        </Typography>
          <br></br>

        <Typography variant="subtitle2" 
        gutterBottom commponent="div">
          Sobre mi
        </Typography>

        <Typography variant="body" 
        gutterBottom sx={{ width: 600 }} >
        Tengo capacidad para adaptarme a cualquier circunstacia. 
        Me gusta trabajar en equipo dando
        lo mejor en cada proyecto. Actualmente sigo con mi formacion 
        y estoy en busca de una
        oportunidad laboral para desarrollar React en el frontend y 
        Express y Node.js en el backend.

        </Typography>
        <br></br>

        <div>
          <Link
            component="button"
            variant="body2"
            sx={{ color: '#000000'}} 
            onClick={() =>{
              window.open( 'https://www.linkedin.com/in/eugeniadev' , '_blank')
            }}
          >
          <LinkedInIcon/>
        </Link>

        <Link
          component="button"
          variant="body2"
          sx={{ color: '#000000'}}
          onClick={() =>{
            window.open( 'https://github.com/eusalazar' , '_blank')
          }}
        >
          <GitHubIcon/>
        </Link>

        <Link
          component="button"
          variant="body2"
          sx={{ color: '#000000'}}
          onClick={() =>{
            window.open( 'https://wa.me/5493816582895' )
          }}
        >
          <WhatsAppIcon/>
        </Link>

        <Link
          component="button"
          variant="body2"
          sx={{ color: '#000000'}}
          onClick={() =>{
            window.open( 'mailto:eugeniasalazar745@gmail.com', '_blank' )
          }}
        >
          <ContactMailIcon/>
        </Link> 
        </div>
        <br></br>
        
        <div>
          <Button variant="contained" 
          color="secondary" 
          size="large"
          sx={{borderRadius: 8 }}
          endIcon={ <DownloadForOfflineIcon/>}
          href={Pdf}  download="cv.pdf"
          >
            Descargar Cv
          </Button>
        </div>
        <br></br>
        
        <div>
          <Box sx={{ width: '100%'}}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Proyectos" {...allyProps(0)} />
              <Tab label="Habilidades" {...allyProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Proyectos/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ChipSelect/>          
          </TabPanel>
          
          </Box>
        </div>
        
      </Stack>

      
    );
  }
  
  export default Home;