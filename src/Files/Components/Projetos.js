import SurvivalExtremo from "../Images/SurvivalExtremo-Site.png"
import ListadosSonhos from "../Images/ListadosSonhosApp.png"
import BolitosGourmet from "../Images/BolitosGourmet.png"
import GaleriaWeb from "../Images/GaleriaWeb.png"
import CardProjeto from "./CardProjeto"

import AOS from 'aos'; //Efeitos
import 'aos/dist/aos.css'; //Efeitos

AOS.init(); //Inicializando Biblioteca

export default function Projetos() {
    return(
        <div className="projects section" id="projetos">
                <h2 className="titulosBG projects-title">Projetos:</h2>
                <div className="projects--container">
                        <CardProjeto
                            Imagem={GaleriaWeb}
                            AltImagem="Imagem mostranho o site Galeria usando Firebase."
                            Titulo="Galeria de Fotos"
                            Descricao="Uma galeria de imagens feita usando Typescript, ReactJs e integrando ao firebase Storage"
                            Link="https://galeria.t8ninho.com/"
                            ButtonText="Visitar"
                        />
                        <CardProjeto 
                            Imagem={SurvivalExtremo}
                            AltImagem="Imagem da Página Inicial do site Suvival Extremo de minecraft."
                            Titulo="Survival Extremo"
                            Descricao="WebSite desenvolvido usando Html, Css e Javascript."
                            Link="https://survivalextremo.web.app/"
                            ButtonText="Visitar"
                        />
                        <CardProjeto 
                            Imagem={ListadosSonhos}
                            AltImagem="Imagem mostrando aplicativo android de lista de tarefas."
                            Titulo="App Lista dos Sonhos"
                            Descricao="Um aplicativo Android desenvolvido usando React-Native e Javascript."
                            Link="https://play.google.com/store/apps/details?id=sonhos.dos.lista"
                            ButtonText="Baixar"
                        />
                        <CardProjeto 
                            Imagem={BolitosGourmet}
                            AltImagem="Imagem mostranho o site Bolitos Gourmet uma confeitaria."
                            Titulo="Bolitos Gourmet"
                            Descricao="Um website feito para uma apresentação de trabalho sobre criação de empresas."
                            Link="https://bolitos-gourmet.t8ninho.com/"
                            ButtonText="Visitar"
                        />
                </div>
            </div>
    )
}