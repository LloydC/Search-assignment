import React from 'react';
import Suggestion from './Suggestion';


export default {
    component: Suggestion,
    title: 'Suggestion',
  };

  export const DefaultSuggestion = () => <Suggestion suggestion={{searchterm: 'daily paper trui', nrResults: 2,}} query='daily' setQuery={()=>{}} />;