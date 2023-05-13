import React from 'react'
import './search.css'
const SearchBox = () => {

    return (
        <div className="Wrapper">
            <div className="Input">
                <input type="text" id="input" className="Input-text" placeholder="Search Twitter" />
            </div>
        </div>
    )
}

export default SearchBox