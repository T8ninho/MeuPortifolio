import TypeAnimation from 'react-type-animation';

export default function Titulo(){
    
    const Title = "<Antonio Vitor/>"
    const TimerText = 3000

    const Texto = [
        'Bem vindo ao meu portifólio!', TimerText,
        'Aqui estão alguns de meus projetos.', TimerText,
        'Desenvolverdor Web Front-end.',
    ]

    return(
        <div class="hero section">
            <div class="hero--content">
                <h1>{Title}
                    <span class="hero--highlight">T8ninho</span>
                </h1>
                <p>Uma coleção dos meus projetos e outras coisas legais que estou preparando.</p>
                <br />
                <TypeAnimation
                    cursor={true}
                    sequence={Texto}
                    wrapper="p"
                />
            </div>
        </div>
    )
}
