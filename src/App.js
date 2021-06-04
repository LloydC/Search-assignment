import React, {useState, useEffect} from 'react';
import Search from './components/Search/Search';

function App(){
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

const findSuggestions = async (userInput) => {
  if(userInput.length >= 2){
    const result = await fetch(`http://localhost:4000/search?q=${userInput}`).then(res => res.json());
    const filterResults = result.suggestions.filter(({searchterm}) => searchterm.includes(userInput));
    return setSuggestions(filterResults);
  }
}
  
  useEffect(()=>{
      findSuggestions(query);
  }, [query])

    return <Search query={query} setQuery={setQuery} suggestions={suggestions}/>;
}

export default App;