import { AiFillCloseCircle } from "react-icons/ai"
import "./Colaborador.css"
import { v4 as uuidv4 } from 'uuid';

const Colaborador = ({id, imagem, nome, cargo, corDeFundo, aoDeletar}) => {
   return (
      <div className="colaborador" id={uuidv4().toString}>
         <AiFillCloseCircle 
         size={25} 
         className="deletar" 
         onClick={aoDeletar}/>
         <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} />
         </div>
         <div className="rodape">
            <h4>
               {nome}
            </h4>
            <h5>
               {cargo}
            </h5>
         </div>
      </div>
   )
}

export default Colaborador