import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import { MuiTheme } from './Theme/MuiTheme'
import Contador from "./Pages/Contador";
import UpperCase from "./Components/UpperCase";
import { Tema } from './Theme/Temas'
import CardItem from "./Components/CardItem";
import { Container } from '@mui/material';

import ToniFoto from './Images/Toni_Pinguim.png'
import BottomBar from './Components/BottomBar';
import TopBar from './Components/TopBar';
import Toolbar from '@mui/material/Toolbar';


export default function Portifolio() {
  return (
    <React.Fragment>
      <ThemeProvider theme={MuiTheme}>
      <TopBar />
      <div style={{
            background: MuiTheme.backgroundFundo
          }}>
            <Toolbar />
            <Toolbar />
        <Container style={Tema.ContainerGeral}>
        
          <div style={{
            background: MuiTheme.background,
            color: MuiTheme.palette.secondary.main,
            padding: "10px"
          }}>
              <div>
                <h1>Título 1</h1>
                <p>Subtítulo 1 de <UpperCase>Teste</UpperCase></p>
                <Contador />
              </div>
              <CardItem />
              <CardItem
                  Image={ToniFoto}
                  AltImage="Imagem Teste"
                  Title="CardTeste"
                  Desc="eu sou a descriçao do card"
                  Link="http://t8ninho.ddns.net/"
                  ButtonText="Visitar"
              />
              <CardItem
                  Image={ToniFoto}
                  AltImage="Imagem Teste"
                  Title="CardTeste"
                  Desc="eu sou a descriçao do card"
                  Link="http://t8ninho.ddns.net/"
                  ButtonText="Visitar"
              />
              <CardItem
                  Image={ToniFoto}
                  AltImage="Imagem Teste"
                  Title="CardTeste"
                  Desc="eu sou a descriçao do card"
                  Link="http://t8ninho.ddns.net/"
                  ButtonText="Visitar"
              />
          </div>
          <Toolbar />
        </Container>
      </div>
      
      <BottomBar />
      </ThemeProvider>
    </React.Fragment>
  );
}
