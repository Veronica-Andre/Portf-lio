import {useState} from "react" //importando o hook useStates que nos permite guardar e controlar estados
import PetAdopt from "../assets/PetAdopt.jpg"
import ReciclaTech from "../assets/ReciclaTech.jpg"
import VerdeAcao from "../assets/VerdeAcao.jpg"


function Projetos () {

    const [projetos, setProjetos] = useState( [
        {
            id: 1,
            imagem: PetAdopt,
            nome: "PetAdopt",
            descricao: "Projeto criado para adoção de pets"
            
        }, 

        {
            id: 2,
            imagem: ReciclaTech,
            nome: "ReciclaTech",
            descricao: "Projeto focado para facilitar doação de eletrônicos"
            
        }, 

        {
            id: 3,
            imagem: VerdeAcao,
            nome: "Verde Ação",
            descricao: "Projeto criado para adoção de pets"
            
        }
    ] )
 

    return(
        <>

        <h2>Projetos</h2>

        <article>
           {projetos.map((item) => (

            <div key={item.id}>
                <img src={item.imagem} alt="" />
                <h2>{item.nome}</h2>
                <p>{item.descricao}</p>
                <h3> {projetos[1].nome} </h3>
            </div>

           ))}
        </article>

        </>
    )
}
export default Projetos