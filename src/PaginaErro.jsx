import styled from "@emotion/styled";
import { useRouteError } from "react-router-dom";

export default function PaginaErro() {

  const Container = styled.div`
	display: flex;
	align-items:center;
	justify-content: center;
  flex-direction: column;
  height: 100vh;
  font-size: 150%;
  background-color: #000000b9
  `;
  const Linha = styled.div`
	display: flex;
	align-items:center;
	justify-content: center;
  `;
  const Codigo = styled.code`
    color: #da59e6;
  `;
  const Verde = styled.p`
    color: #00ff00;
  `;
  const Laranja = styled.p`
    color: #ff8a37;
  `;
  const Amarelo = styled.p`
    color: #ff0f;
  `;
  const Roxo = styled.p`
    color: #8800ff;
  `;
  const Azul = styled.p`
    color: lightblue;
  `;

  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <p>HTTP: <span>404</span></p>
      <Codigo>
        <Linha>Esta_página.<Verde><em>não_existe</em></Verde> = <Verde>true</Verde></Linha>
          <Linha>if <Laranja>(</Laranja><Roxo>você_escreveu_errado</Roxo><Laranja>)</Laranja> <Laranja>&#123;</Laranja></Linha> 
          <Linha><Verde>Tente_novamente()</Verde> </Linha>
        <Linha><Laranja>&#125;</Laranja>else if <Laranja>(</Laranja><Roxo>nós_estragamos_tudo</Roxo><Laranja>)</Laranja> <Laranja>&#123;</Laranja> </Linha>
        <Linha><Azul>alert</Azul><Laranja>(</Laranja><Amarelo>"Nós realmente sentimos muito por isso."</Amarelo><Laranja>)</Laranja>; </Linha>
        <Linha>window.<em>location</em> = home </Linha>
        <Laranja>&#125;</Laranja> 
      </Codigo>
      <a href="/">Clique para ir ao Inicio</a>
    </Container>
  );
}