import React from 'react';
import SuggestionList from './SuggestionList';

export default {
    component: SuggestionList,
    title: 'SuggestionList',
  };

export const DefaultSingleList = () => <SuggestionList suggestions={[{searchterm: 'daily paper trui', nrResults: 2,}]} query='daily' setQuery={()=>{}} />;
export const DefaultList = () => <SuggestionList suggestions={[{searchterm: 'kenzo trui', nrResults: 62}, {searchterm: 'kenzo trui dames', nrResults: 21}, {searchterm: 'kenzo trui heren', nrResults: 12}]} query='kenzo' setQuery={()=>{}} />;
  