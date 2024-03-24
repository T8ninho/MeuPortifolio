import "../Styles/Botao.style.css"


export default function CardProjeto(props) {
    const Imagem = props.Imagem;
    const AltImagem = props.AltImagem
    const Titulo = props.Titulo;
    const Descricao = props.Descricao;
    const Link = props.Link;
    const ButtonText = props.ButtonText;
    
    return (
        <article 
            className="project"
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-duration="2000" >
            <div className="projectSubContainer">
                <div className="projectImage">
                    <img src={Imagem} alt={AltImagem} />
                </div>
                <div Name="project--body">
                    <h3>{Titulo}</h3>
                    <p>{Descricao}</p>
                </div>
                <div className="botaoRB">
                    <a className="colorido" target="_blank" rel="noreferrer" href={Link}>
                        <div>{ButtonText}</div>
                    </a>
                </div>
            </div>
        </article>
        
    )
}

