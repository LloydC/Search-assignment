import React from 'react';
import PropTypes from 'prop-types';

export default function Suggestion({query, suggestion: {searchterm, nrResults}, setQuery}) {
    const unboldString = (term, currentSuggestion) => {
        const strRegExp = new RegExp(term, 'g');
         return currentSuggestion.replace(strRegExp,`${term}`); // need a way to replace `${term}` with <span>`${term}`</span>
     }

    if(query !== searchterm){
        return <li onClick={()=>{ setQuery(searchterm) }}><b>{unboldString(query, searchterm)} ({nrResults})</b></li>
    }
    else{
        return '';
    }
}

Suggestion.propTypes = {
        suggestion: PropTypes.shape({
            searchterm: PropTypes.string.isRequired, 
            nrResults: PropTypes.number.isRequired,
        }),
        query: PropTypes.string.isRequired, 
        setQuery: PropTypes.func,
    };