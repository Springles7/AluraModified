import Dropdown from "../Dropdown";
import Fields from "../Fields";
import "./Form.css";
import { useState } from "react";
import Button from "../Button";

const Form = (props) => {
    const [nome, setNome] = useState('');
    const [time, setTime] = useState('');
    const [imagem, setImagem] = useState('');
    const [jogo, setJogo] = useState('');

    const onsave = (evento) => {
        evento.preventDefault();
        props.jogadorCadastrado({
            nome,
            time,
            imagem,
            jogo,
        });
        setNome('')
    setTime('')
    setImagem('')
    setJogo('')
    };

    return (
        <section className="form">
            <form onSubmit={onsave}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <Fields obrigatorio={true} label="Nickname" desc="Informe o seu ingame name" valor={nome} aoAlterado={(valor) => setNome(valor)} />
                <Fields obrigatorio={true} label="Nome do Time" desc="Informe o nome do seu time" valor={time} aoAlterado={(valor) => setTime(valor)} />
                <Fields obrigatorio={true} label="Imagem" desc="Informe o endereco da imagem" valor={imagem} aoAlterado={(valor) => setImagem(valor)} />
                <Dropdown label="Jogo" item={props.time} valor={jogo} aoAlterado={(valor) => setJogo(valor)} />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
};

export default Form;
