import React,{ useState as useStateMock } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom/extend-expect';
import {suggestions} from '../api/_search.get.json';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const server = setupServer(
  rest.get('/', (req, res, ctx) => {
    // Respond with a mocked user token that gets persisted
    // in the `sessionStorage` by the `Login` component.
    return res(ctx.json({ suggestions}))
  }),
)

// Enable API mocking before tests.
beforeAll(() => server.listen())
// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())
// Disable API mocking after the tests are done.
afterAll(() => server.close())


describe("App Test Suite", () => {
  const setState = jest.fn();
  const useStateMock = (initState) => [initState, setState];

  const useStateSpy = jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('<App/> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('testing mocked useState', ()=>{
    const [testQuery, setTestQuery] = useStateSpy('')
   console.log('test', testQuery)
    expect(useStateSpy).toHaveBeenNthCalledWith(1, '');

  })
})