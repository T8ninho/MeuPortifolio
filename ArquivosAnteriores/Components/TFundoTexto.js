import { MuiTheme } from '../Theme/MuiTheme';

export default function TFundoTexto(props) {
return (
    <h2 style={{
        background: MuiTheme.background2, 
        width: "100%", 
        textAlign: "center",
        borderRadius: "10px"}}
    >
        {props.children}
    </h2>
    )
}