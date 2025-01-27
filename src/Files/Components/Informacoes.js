import Perfil from "../Images/perfil.jpg"

import "../Styles/Botao.style.css"

export default function Informacoes(){
    return(
        <section className="section info">
                    <div className="profile-picture colorido">
                        <div>
                            <img src={Perfil} alt="Foto de perfil"/>
                        </div>
                    </div>
                    <div className="info-text">
                        <h2 className="titulosBG projects-title">Sobre mim:</h2>
                        <h3>Olá, tudo bom?</h3>
                        <p>Eu sou Antonio Vitor, tenho 24 anos e tenho uma grande paixão por desenvolvimento de sites. Comecei na área apenas com <span>HTML</span> e <span>CSS</span>, atualmente aperfeiçoando meus conhecimentos em <span>JavaScript</span> combinado com algumas frameworks como <span>ReactJS</span> e <span>NodeJs</span> para criação de APIs RestFulls para tornar ainda mais atrativas e funcionais minhas criações. Nesta página estão alguns dos meus projetos, fique a vontade para visitar cada um deles.</p>
                    </div>
        </section>
    )
}