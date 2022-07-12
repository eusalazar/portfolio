import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from "./pages/Home";
import { Container } from '@mui/material';
//import Header from "./Componentes/Header";


function App() {
  return (
    <div >
      <Container fixed>
      
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </Container>
    
    </div>
  );
}

export default App;
