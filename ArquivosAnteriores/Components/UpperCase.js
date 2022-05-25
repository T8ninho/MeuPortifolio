export default function UpperCase(props) {
    const textoInserido = props.children
    const textoEmCapsLock = textoInserido.toUpperCase()

    return <div>{textoEmCapsLock}</div>
}