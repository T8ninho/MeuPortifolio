import SurvivalExtremo from "../Images/SurvivalExtremo-Site.jpg"
import ListadosSonhos from "../Images/ListadosSonhosApp.jpg"
import PlantaodosSonhos from "../Images/PlantaodosSonhos.jpg"
import BolitosGourmet from "../Images/BolitosGourmet.jpg"
import GaleriaWeb from "../Images/GaleriaWeb.jpg"
import GitHubPesquisa from "../Images/GitHubPesquisa.png"
import CardProjeto from "./CardProjeto"

import AOS from 'aos'; //Efeitos
import 'aos/dist/aos.css'; //Efeitos

AOS.init(); //Inicializando Biblioteca

export default function Projetos() {
    return(
        <div className="section" id="projetos">
                <h2 className="titulosBG projects-title">Projetos:</h2>
                <div className="projects--container">
                        <CardProjeto 
                            Imagem={GitHubPesquisa}
                            AltImagem="Imagem mostranho o site GithubPesquisa."
                            Titulo="Github Pesquisa"
                            Descricao="Um buscador de perfis do github usando nome de usuário. Utilizando a API do Github + Vite + ReactJS"
                            Link="https://github-pesquisa.vercel.app/"
                            ButtonText="Visitar"
                        />
                        <CardProjeto 
                            Imagem={PlantaodosSonhos}
                            AltImagem="Imagem mostrando aplicativo android de controle de plantão."
                            Titulo="Plantão dos Sonhos"
                            Descricao="Um aplicativo Android desenvolvido usando React-Native, Javascript e API do Governo para receber dados sobre feriados anuais."
                            Link="https://play.google.com/store/apps/details?id=com.t8ninho.plantaodossonhos"
                            ButtonText="Baixar"
                        />
                        <CardProjeto
                            Imagem={GaleriaWeb}
                            AltImagem="Imagem mostranho o site Galeria usando Firebase."
                            Titulo="Galeria de Fotos"
                            Descricao="Uma galeria de imagens feita usando Typescript, ReactJs e integrando ao firebase Storage"
                            Link="https://galeria.t8ninho.com/"
                            ButtonText="Visitar"
                        />
                        <CardProjeto 
                            Imagem={ListadosSonhos}
                            AltImagem="Imagem mostrando aplicativo android de lista de tarefas."
                            Titulo="Lista dos Sonhos"
                            Descricao="Um aplicativo Android desenvolvido usando React-Native e Javascript."
                            Link="https://play.google.com/store/apps/details?id=sonhos.dos.lista"
                            ButtonText="Baixar"
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