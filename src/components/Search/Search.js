import React from 'react';
import SuggestionList from '../SuggestionList/SuggestionList';

export default function Search({query, setQuery, suggestions}) {
    return (
        <form className="searchbox" onSubmit={(e)=>{e.preventDefault()}}>
            <input 
                type="search" 
                placeholder="Zoeken"  
                autoComplete="off" 
                value={query} 
                onChange={(e)=> setQuery(e.target.value)} 
                />
            {query !== "" && <SuggestionList suggestions={suggestions} query={query} setQuery={setQuery}/>}
        </form>
    )
}