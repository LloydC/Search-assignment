import {rest} from 'msw' // msw supports graphql too!
import {suggestions}from '../../api/_search.get.json'

const handlers = [
  rest.get('/', async (req, res, ctx) => {
    return res(ctx.json({suggestions}))
  }),
]
export {handlers}