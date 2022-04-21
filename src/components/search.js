const Search = ({search}) => {
    function handleChange(event){
        search(event.target.value)
    }
    return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="d-flex m-3 w-100">
                        <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={handleChange}
                        />
                    </div>
                </div>
            </nav>
    )
}
export default Search;