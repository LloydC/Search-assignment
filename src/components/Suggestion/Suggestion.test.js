import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Suggestion from './Suggestion';

describe("Suggestion Test Suite", () => {
    it('Suggestion Component renders', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Suggestion suggestion={{searchterm: 'daily paper trui', nrResults: 2,}} query='daily' setQuery={()=>{}} />, div);
        ReactDOM.unmountComponentAtNode(div);
        });

    it('Suggestion Item displays',()=>{
        const testSuggestion = {searchterm: 'daily paper trui', nrResults: 2};
        render(<Suggestion suggestion={testSuggestion} query='daily' setQuery={()=>{}}/>);
        const renderedSuggestion = screen.queryByText(`${testSuggestion.searchterm} (${testSuggestion.nrResults})`);
        expect(renderedSuggestion).toBeInTheDocument();
    })
})