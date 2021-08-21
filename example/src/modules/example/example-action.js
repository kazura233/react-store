import { createAction } from '../../../../lib/react-store'

const action = createAction('example')

export const add = action((num) => (exampleState) => ({ count: exampleState.count + num }))

export const replace = action((count) => ({ count }))
