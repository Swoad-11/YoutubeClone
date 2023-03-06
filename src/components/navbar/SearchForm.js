import React from 'react';
import search from '../../assets/search.svg'

const SearchForm = () => {
    return (
        <div>
            <form>
                <input
                    className="outline-none border-none mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                />
                <img
                    className="inline h-4 cursor-pointer"
                    src={search}
                    alt="Search"
                />
            </form>
        </div>
    );
};

export default SearchForm;