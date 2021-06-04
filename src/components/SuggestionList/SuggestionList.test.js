import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import SuggestionsList from './SuggestionList';

describe("SuggestionList Test Suite", () => {
    it('SuggestionList Component renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SuggestionsList />, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('Suggestions List with props values display',()=>{
        const testQuery = 'kenzo';
        const testSuggestions = [{searchterm: 'kenzo trui', nrResults: 62}, {searchterm: 'kenzo trui dames', nrResults: 21}, {searchterm: 'kenzo trui heren', nrResults: 12}]

        render(<SuggestionsList query={testQuery} suggestions={testSuggestions}/>);

        for(const suggestion of testSuggestions){
            const renderedSuggestion = screen.queryByText(`${suggestion.searchterm} (${suggestion.nrResults})`);
            expect(renderedSuggestion).toBeInTheDocument()
        }   
    })

})