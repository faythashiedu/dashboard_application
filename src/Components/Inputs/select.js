import "./input.css";

const Select = () => {
    return (
        <div className="selectWrap">
            <select id="select">
                <option value="Starred">Filter By</option>
                <option value="Starred">Starred</option>
                <option value="Important">Important</option>
            </select>
        </div>
    )
}

export default Select
