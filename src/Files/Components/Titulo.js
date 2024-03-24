import TypeAnimation from 'react-type-animation';
import "../Styles/SetaDescendo.css"
// import styled from '@emotion/styled';

import AOS from 'aos'; //Efeitos
import 'aos/dist/aos.css'; //Efeitos


AOS.init(); //Inicializando Biblioteca

export default function Titulo(){
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.fixed-header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    const Title = "<Antonio Vitor/>"
    const TimerText = 3000

    const Texto = [
        'Bem vindo ao meu portifólio!', TimerText,
        'Aqui estão alguns de meus projetos.', TimerText,
        'Desenvolverdor Web Front-end.',
    ]
    return(
        <div 
            className="hero section"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1000">
            <div className="hero--content">
                <div className='hero-bordaBottom'>
                    <h1 className='titulosBG'>{Title}</h1>
                    <span className="hero--highlight">T8ninho</span>
                </div>
                <p>Uma coleção dos meus projetos e outras coisas legais que estou preparando.</p>
                <br />
                <TypeAnimation
                    cursor={true}
                    sequence={Texto}
                    wrapper="p"
                />
                
                    <a href="#projetos" className="ContainerSeta">
                        <div className="chevron" />
                        <div className="chevron" />
                        <div className="chevron" />
                    </a>
            </div>
        </div>
    )
}
