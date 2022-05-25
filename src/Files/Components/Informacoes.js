import Perfil from "../Images/perfil.jpg"

export default function Informacoes(){
    return(
        <div class="section">
            <div className="about">
                <h2>Um pouco sobre mim</h2>
                <h1> </h1>
                <div class="about--section">
                    <div class="profile-picture">
                        <img src={Perfil} alt="Rapaz usando óculos e deitado na grama, mostrando apenas o busto para cima."/>
                    </div>
                    <div class="about--text">
                        <h3>Olá tudo bom?</h3>
                        <p>Eu me chamo <span>Antonio Vitor</span>, tenho 22 anos e tenho uma grande paixão por desenvolvimento de sites, comecei na área apenas com <span>HTML</span> e <span>CSS</span> atualmente estou estudando <span>JavaScript</span> para tornar ainda mais atrativas minhas criações. Nesta página estão alguns dos meus projetos, fique a vontade para
                            visitar cada um deles.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}