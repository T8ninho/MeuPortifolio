import "../Styles/Contato.style.css"


import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Contato() {
    return(
        <footer>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <ul className="social_icon">
                <li className="InstagramCode">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/t8ninho/">
                        <InstagramIcon />
                    </a>
                </li>
                <li className="EmailCode">
                    <a target="_blank" rel="noreferrer" href="mailto:contato@t8ninho.com">
                        <EmailIcon />
                    </a>
                </li>
                <li className="WhatsAppCode">
                    <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5527996028557">
                        <WhatsAppIcon/>
                    </a>
                </li>
            </ul>
            <p>© 2021-2024 | Feito com ❤ por <span>T8ninho</span></p>
        </footer>
    )
}
