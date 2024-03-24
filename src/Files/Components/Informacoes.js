import Perfil from "../Images/perfil.jpg"
import BGLampada from '../Images/BGLampada.jpg'

import "../Styles/Botao.style.css"

export default function Informacoes(){
    return(
        <div className="section">
            <div className="about">
                <div>
                    <h2 className="titulosBG">Um pouco sobre mim:</h2>
                    <div className="about--section">
                        <div className="profile-picture colorido">
                            <div>
                            <img src={Perfil} alt="Foto de perfil"/>

                            </div>
                        </div>
                        <div className="about--text">
                            <h3>Olá, tudo bom?</h3>
                            <p>Eu sou Antonio Vitor, tenho 23 anos e tenho uma grande paixão por desenvolvimento de sites. Comecei na área apenas com <span>HTML</span> e <span>CSS</span>, atualmente estou estudando <span>JavaScript</span> combinado com algumas frameworks como <span>ReactJS</span> e <span>React Native</span> para tornar ainda mais atrativas minhas criações. Nesta página estão alguns dos meus projetos, fique a vontade para
                                visitar cada um deles.</p>
                        </div>
                    </div>
                </div>
                <div className="about-picture">
                    <img src={BGLampada} alt="Imagem Lampada" />
                </div>
            
            </div>
        </div>
    )
}