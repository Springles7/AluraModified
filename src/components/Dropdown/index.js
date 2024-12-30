import "./Dropdown.css";

const Dropdown = (props) => {
    return (
        <div className="Dropdown">
            <label>{props.label}</label>
            <select onChange={(evento) => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option value=""></option>
                {props.item.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
