function InputAdd({type, name, value, onChange, texto, id}) {
    return <input type={type} name={name} value={value} onChange={onChange} placeholder={texto} id={id} />
}

export default InputAdd;