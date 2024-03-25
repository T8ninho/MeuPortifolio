import "../Styles/Contato.style.css"

import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn"

export default function Contato() {
    return(
        <div className="Footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <ul className="social_icon">
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/t8ninho/">
                        <InstagramIcon />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:contato@t8ninho.com">
                        <EmailIcon />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5527996028557">
                        <WhatsAppIcon/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/t8ninho">
                        <GithubIcon/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/antonio-vitor-t8ninho-0a9a8b17a/">
                        <LinkedInIcon/>
                    </a>
                </li>
            </ul>
            <p>© 2021-2024 | Feito com <d>❤</d> por <span>T8ninho</span></p>
        </div>
    )
}
