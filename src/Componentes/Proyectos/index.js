import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material'

function Proyectos() {

  function redireccionar(url,git){
    window.open(url, git)
  }
  
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
         <ImageListItemBar
            title={
              <Button onClick={() => redireccionar(item.url) }
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                  {item.title}
              </Button>
            }
            subtitle={item.author}
            actionIcon={
              <IconButton 
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <GitHubIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/assets/video-games.jpg',
    title: 'App Videogames',
    author: 'PosgrestSQL, Node js, JS, Express, React, Redux, Css',
    rows: 3,
    cols: 3,
    featured: true,
    url: "https://euge-videogames-client.herokuapp.com"
  },
  {
    img: '/assets/reloj-digital.png',
    title: 'Reloj Digital',
    author: 'JavaScript,HTML,Css',
    url: "https://eusalazar.github.io/Reloj-Digital/"
  },
  {
    img: '/assets/todoreact.png',
    title: 'To do React ',
    author: 'React, HTML, Css',
    url: "",
    
  },
  {
    img: '/assets/to-do.png', 
    title: 'To do jQuery',
    author: 'jQuery, HTML, Css',
    url: "https://eusalazar.github.io/to-do",
    cols: 2,
  },

  
];

export default Proyectos;
