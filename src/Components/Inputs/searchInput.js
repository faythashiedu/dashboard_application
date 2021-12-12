import { Search } from "@material-ui/icons";
import "./input.css";

const SearchInput = () => {
    return (
        <form className="searchForm">
            <Search className="searchicon" />
            <input type="search" placeholder="Search mail list" className="inputsearch" />
        </form>
    )
}

export default SearchInput
