import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import clsx from 'clsx'
import style from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <div className={style.container}>
            <SearchIcon className={clsx(style.searchicon)}/>
            <input 
                type="text"
                placeholder='Search for chat'
                className={clsx(style.inputText)}
            />
        </div>
    );
}

export default SearchBar
