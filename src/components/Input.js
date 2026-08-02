const Input = ({value, onChangeHandler}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChangeHandler}
        />
    );
}

export default Input; 