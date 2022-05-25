
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Logo from '../Images/Logo.png'

import "../Theme/Estilos.css";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

export default function TopBar(props){

    return(
        <div class="ContainerNavBar">
            {/* <HideOnScroll {...props}> */}
            <AppBar>
            <div class="navbar-inner">
              <nav class='navbar'>
                  <img
                    class='logo'
                    src={Logo} 
                    alt="Logo do site"
                    />
                <input type="checkbox" id='toggler' />
                <label for="toggler"><i class='ri-menu-line'></i></label>
                <div class='menu'>
                  <ul class='list'>
                    <li>
                      <a href="/" className="buttonTitle">
                        <span>Início</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="buttonTitle">
                        <span>Informações</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="buttonTitle">
                        <span>Imagens</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            </AppBar>
            {/* </HideOnScroll> */}
        </div>
    )
}