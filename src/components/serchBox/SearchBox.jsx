import css from './SearchBox.module.css'


const SearchBox = ({ filteredInfo, setFilteredInfo }) => {

    return (
        <label className={css.searchBox}>
            <span>Find contacts by name</span>
            <input 
                className={css.searchInp}
                type="text"
                name="filter"
                value={filteredInfo}
                onChange={(evt) => setFilteredInfo(evt.target.value)}
            />
        </label>
    )
}

export default SearchBox