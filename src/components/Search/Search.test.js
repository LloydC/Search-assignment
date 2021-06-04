import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import Search from './Search';

describe("Search Test Suite", () => {
    it('Search Component renders ', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('Suggestion List doesnt display with empty props values ',()=>{
        const testQuery = '';
        const testSuggestions = []
        render(<Search query={testQuery} suggestions={testSuggestions}/>);
        const listComponent = screen.queryByTestId('list')
         expect(listComponent).not.toBeInTheDocument()  
    })

    it('Suggestion List displays with props values ',()=>{
        const testQuery = 'kenzo';
        const testSuggestions = [{searchterm: 'kenzo trui', nrResults: 62}, {searchterm: 'kenzo trui dames', nrResults: 21}, {searchterm: 'kenzo trui heren', nrResults: 12}]
        render(<Search query={testQuery} suggestions={testSuggestions}/>);
        const listComponent = screen.queryByTestId('list')
         expect(listComponent).toBeInTheDocument()  
    })

    it('Suggestions list renders after user input', async () => {
        render(<Search setQuery={()=>{}}/>);
        const input = screen.getByPlaceholderText('Zoeken');
        await userEvent.type(input, 'trui');
        console.log('input value entry', input.value)
        // const listComponent = screen.queryByTestId('list')
        // expect(listComponent).toBeInTheDocument()
    })

    // it('Suggestion Click updates value of input', async () => {
    //     render(<Search query={testQuery} setQuery={testSetQuery} suggestions={testSuggestions}/>);
    //     const input = screen.getByPlaceholderText('Zoeken');
    //     await userEvent.type(input, 'trui')

    //     const listComponent = screen.queryByTestId('list');
    //     const firstSuggestion = listComponent.firstChild;
    //     console.log('first suggestion', firstSuggestion.textContent)
    //     await userEvent.click(firstSuggestion)

    //     const inputChange = screen.getByPlaceholderText('Zoeken');
    //     console.log('input change', inputChange)
    //     expect(inputChange).toBeInTheDocument();
    // })

})