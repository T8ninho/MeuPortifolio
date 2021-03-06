import "../Styles/Contato.style.css"

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Contato() {
    return(
        <footer>
            <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
            </div>
            <ul class="social_icon">
                <li class="TwitterCode">
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/t8ninho">
                        <TwitterIcon />
                    </a>
                </li>
                <li class="InstagramCode">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/t8ninho/">
                        <InstagramIcon />
                    </a>
                </li>
                <li class="EmailCode">
                    <a target="_blank" rel="noreferrer" href="mailto:tonisantos.contato@gmail.com">
                        <EmailIcon />
                    </a>
                </li>
                <li class="WhatsAppCode">
                    <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5527996028557">
                        <WhatsAppIcon/>
                    </a>
                </li>
            </ul>
            <p>©2021-2022 <span>T8ninho</span> | Todos os direitos reservados</p>
        </footer>
    )
}