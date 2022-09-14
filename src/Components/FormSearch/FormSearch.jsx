import React from "react";
import scss from "./FormSearch.module.scss";

const FormSearch = ({ onSubmit, search }) => {

    return (
        <header className={scss.FormSearch}>
        <h2 className={scss.FormSearchTitle}>React App</h2>
                <input
                name="search"
                type="text"
                placeholder="Search"
                value={search}
                onChange={onSubmit}
                required
                className={scss.input}/>
        </header>
    )
   
};

export default FormSearch;

