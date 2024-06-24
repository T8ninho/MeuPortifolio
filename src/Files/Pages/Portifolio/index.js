import CardTecnologias from "../../Components/CardTecnologias";
import Contato from "../../Components/Contato";
import Informacoes from "../../Components/Informacoes";
import Projetos from "../../Components/Projetos";
import Titulo from "../../Components/Titulo";
import "../../Styles/main.css";

export default function Portfolio() {

  return (
    <>
        <Titulo />
        <div className="SubMain">
          <Informacoes />
          <CardTecnologias />
          <Projetos />
        </div>
      <Contato />
    </>
  );
}
