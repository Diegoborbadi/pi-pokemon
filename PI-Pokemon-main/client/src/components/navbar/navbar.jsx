import "./navbar.css";

const Navbar = (props) => {
    return (
        <div className="search-box">
            <form onChange={props.handleChange}>
                <input type="search" placeholder="Busqueda" />
                <button type="submit" onClick={props.handleSubmit}>Buscar</button>
            </form>
        </div>
    )
}


export default Navbar; 