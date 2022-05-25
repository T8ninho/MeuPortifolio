import "../Theme/Estilos.css";

export default function CardItem(props) {
    const Imagem = props.Image;
    const AltImage = props.AltImage
    const Titulo = props.Title;
    const Descricao = props.Desc;
    const Link = props.Link;
    const ButtonText = props.ButtonText;
    
    return (
        <div style={{paddingTop: "10px"}}>
            <div style={{
                    backgroundColor: "rgb(999,999,999, 0.1)", 
                    padding: '15px', 
                    display: "flex", 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    borderRadius: "10px"
            }}>
                <img src={Imagem} alt={AltImage}/>
                <h1>{Titulo}</h1>
                <p>{Descricao}</p>
                <a href={Link} className="button">
                    <span>{ButtonText}</span>
                </a>
            </div>
        </div>
    )
}