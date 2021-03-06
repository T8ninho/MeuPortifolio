import Perfil from "../Images/perfil.jpg"

export default function Informacoes(){
    return(
        <div class="section">
            <div className="about">
                <h2>Um pouco sobre mim</h2>
                <h1> </h1>
                <div class="about--section">
                    <div 
                        class="profile-picture"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1500"
                    >
                        <img src={Perfil} alt=""/>
                    </div>
                    <div 
                        class="about--text"
                        data-aos="fade-down"
                        data-aos-delay="300"
                        data-aos-duration="2000"
                    >
                        <h3>Olá, tudo bom?</h3>
                        <p>Eu sou Antonio Vitor, tenho 22 anos e tenho uma grande paixão por desenvolvimento de sites. Comecei na área apenas com <span>HTML</span> e <span>CSS</span>, atualmente estou estudando <span>JavaScript</span> combinado com <span>ReactJS</span> para tornar ainda mais atrativas minhas criações. Nesta página estão alguns dos meus projetos, fique a vontade para
                            visitar cada um deles.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}