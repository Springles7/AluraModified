import './cards.css'

const Cards = (props) =>{
    return(
        <div className='colaborador'> 
            <div className='cabecalho' style={{backgroundColor: props.corFundo }}>
            <img src={props.imagem} alt={props.nome}/>
            </div>
                            
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.time}</h5>
            </div>
        </div>
    )
}

export default Cards;