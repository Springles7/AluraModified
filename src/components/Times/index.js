import "../Times/team.css"
import Cards from "../Cards"
const Times = (props) => {
    return(

        (props.jogadores.length > 0) ?
        <section className="times" style={{backgroundColor:props.corSecundaria}}>
            
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <div className="jogadores">
            {props.jogadores.map( jogador => <Cards key={jogador.nome} corFundo={props.corPrimaria} nome={jogador.nome} time={jogador.time} imagem={jogador.imagem} />)}
            </div>
        </section>
        : ''
    )
}

export default Times;