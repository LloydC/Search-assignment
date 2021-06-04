import React from 'react';
import Suggestion from '../Suggestion/Suggestion'

export default function SuggestionsList({suggestions, query, setQuery}) {
    return (
        <ul className="suggestions" data-testid="list">
            {suggestions && suggestions.map((suggestion, i) => (
                <Suggestion key={i} query={query} setQuery={setQuery} suggestion={suggestion}/>
                )
            )}
        </ul>
    )
}