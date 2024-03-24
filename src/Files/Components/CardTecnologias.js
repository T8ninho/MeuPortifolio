
import '../Styles/Tecnologias.css';

import Html5 from '../Images/Tecnologias/Html5_logo.png';
import Css3 from '../Images/Tecnologias/CSS3_logo.png';
import ReactJs from '../Images/Tecnologias/ReactJs_logo.png';
import JavaScript from '../Images/Tecnologias/JavaScript_logo.png';
import BootStrap from '../Images/Tecnologias/Bootstrap_logo.png';
import Github from '../Images/Tecnologias/GitHub_logo.png';
import Git from '../Images/Tecnologias/Git_logo.png';

export default function CardTecnologias() {
	function Card(props) {
		return(
			<div className='imageTecno'>
				<img className='sombra' src={props.image} />
			</div>
		)
	}
 return (
   <div className='containerTecno'>
		<Card image={Html5} />
		<Card image={Css3} />
		<Card image={ReactJs} />
		<Card image={JavaScript} />
		<Card image={BootStrap} />
		<Card image={Github} />
		<Card image={Git} />
   </div>
 );
}

