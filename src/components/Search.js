import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();


    const search = (e) => {
        e.preventDefault();


        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
        // stuffs remaining
        history.push('/search')

    };
    return (
        <form className='search'>
            <div className="search__input">
                {!hideButtons ? (
                    <SearchIcon className="search__inputIcon" />
                ):(null)}

                <input value={input} onChange={e => setInput(e.target.value)} required />
                <MicIcon />
                {!hideButtons ? (
                    null
                ):(<SearchIcon className="search__inputIcon" />)}
            </div>
            {!hideButtons ? (
                <div className="search__buttons">
                    <Button variant="outlined" onClick={search} type="submit">Google Search</Button>
                    <Button variant="outlined" >I'm Feeling Lucky</Button>
                </div>
            ) : (
                    <div className="search__buttons hidden">
                        <Button variant="outlined" onClick={search} type="submit">Google Search</Button>
                        <Button variant="outlined" >I'm Feeling Lucky</Button>
                    </div>
                )}

        </form>
    )
}

export default Search
