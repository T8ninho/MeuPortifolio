
import '../Styles/Tecnologias.css';

import Html from '../Images/Tecnologias/Html5_logo.svg';
import Css from '../Images/Tecnologias/CSS3_logo.svg';
import ReactJs from '../Images/Tecnologias/ReactJs_logo.svg';
import JavaScript from '../Images/Tecnologias/JavaScript_logo.svg';
import BootStrap from '../Images/Tecnologias/Bootstrap_logo.png';
import PhotoShop from '../Images/Tecnologias/PhotoShop_logo.svg';
import VSCode from '../Images/Tecnologias/VSCode_logo.svg';
import FirebaseLogo from '../Images/Tecnologias/Firebase_logo.svg';

export default function CardTecnologias() {
	function Card(props) {
		const image = props.image;
		const name = props.name;

		return(
			<div className='subContainerTecno'>
				<div className='imageTecno'>
					<img src={image} />
				</div>
				<div className='textTecno'>
					<p>{name}</p>
				</div>
			</div>
		)
	}
 return (
   	<div className='containerTecno'>
		<h2 className="titulosBG projects-title">Tecnologias:</h2>
		<div className='containerTecnoImages'>
			<Card image={Html} name={'Html5'}/>
			<Card image={Css} name={'Css3'}/>
			<Card image={ReactJs} name={'ReactJs'}/>
			<Card image={JavaScript} name={'javascript'}/>
			<Card image={BootStrap} name={'Bootstrap'}/>
			<Card image={PhotoShop} name={'Photoshop'}/>
			<Card image={FirebaseLogo} name={'Firebase'}/>
			<Card image={VSCode} name={'VSCode'}/>
		</div>
   	</div>
 );
}

