import React,{useState} from 'react'
import { Button } from "@mui/material"
import TFundoTexto from '../Components/TFundoTexto'

export default function Contador() {
    const [numero, setNumero] = useState(0)

    function Contador(){
        setNumero(numero + 1)
    }

    function Reduzir(){
        setNumero(numero - 1)
    }

    function Reset(){
        setNumero(0)
    }

    return(
        <div style={{
            justifyContent: "center",
            alignItems:"center",
            }}>
            <TFundoTexto>{numero}</TFundoTexto>
            <div>
                <Button
                variant="contained" 
                color='vermelho'
                onClick={Reduzir}
                >
                    -
                </Button>
                <Button
                variant="contained" 
                color='vermelho'
                onClick={Contador}
                >
                    +
                </Button>
                <Button
                variant="contained" 
                color='vermelho'
                onClick={Reset}
                >
                    Resetar
                </Button>
            </div>
        </div>
    )
}