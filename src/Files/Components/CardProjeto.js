import "../Styles/Botao.style.css"


export default function CardProjeto(props) {
    const Imagem = props.Imagem;
    const AltImagem = props.AltImagem
    const Titulo = props.Titulo;
    const Descricao = props.Descricao;
    const Link = props.Link;
    const ButtonText = props.ButtonText;
    
    return (
        <div 
            class="project"
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-duration="2000" >
            <div class="projectSubContainer">
                <div className="BordaColorida">
                    <img src={Imagem} alt={AltImagem} />
                </div>
                <div class="project--body">
                    <h3>{Titulo}</h3>
                    <p>{Descricao}</p>
                </div>
                <div class="botaoRB">
                    <a class="colorido" target="_blank" rel="noreferrer" href={Link}>
                        <div>{ButtonText}</div>
                    </a>
                </div>
            </div>
        </div>
        
    )
}

