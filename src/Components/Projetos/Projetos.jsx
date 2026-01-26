import {useState} from "react"; //importando o hook useStates que nos permite guardar e controlar estados
import PetAdopt from "../../assets/PetAdopt.jpg";
import ReciclaTech from "../../assets/ReciclaTech.jpg";
import VerdeAcao from "../../assets/VerdeAcao.jpg";

import styles from "./Projetos.module.scss";

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
                 
        },
       
        {
            id: 4,
            imagem: PetAdopt,
            nome: "PetAdopt",
            descricao: "Projeto criado para adoção de pets"
            
        }, 

        {
            id: 5,
            imagem: ReciclaTech,
            nome: "ReciclaTech",
            descricao: "Projeto focado para facilitar doação de eletrônicos"
            
        }, 

        {
            id: 6,
            imagem: VerdeAcao,
            nome: "Verde Ação",
            descricao: "Projeto criado para adoção de pets"
            
        }
    ] )
 

    return (
    
      <section className={styles.sectionProjetos}>
        {projetos.map((item) => (
          <article key={item.id}className={styles.cardProjetos}>
            <img src={item.imagem} alt="" />
            <h2> {item.nome} </h2>
            <p> {item.descricao} </p>
           {/*<h3> {projetos[1].nome} </h3>*/}
          </article>
        ))}
      </section>
  
  );
}
export default Projetos