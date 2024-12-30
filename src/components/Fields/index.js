import "./Fields.css"

import {useState} from 'react'

const Fields =(props) =>{
    //let valor = 'Springles7'
    const save = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return(
        <div className="GeralFields">
            <label>{props.label}</label>
            <input value={props.valor} onChange={save} required={props.obrigatorio} placeholder={`${props.desc}...`}/>
        </div>
    )
}

export default Fields;