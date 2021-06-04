import {server} from './server.js'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):