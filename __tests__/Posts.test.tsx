import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import React from 'react'

import '@testing-library/jest-dom'

import { Posts } from '../src/components/Posts/Posts'

const server = setupServer()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads posts', async () => {
    server.use(
        rest.get(
            'https://jsonplaceholder.typicode.com/posts',
            (req, res, ctx) => res(ctx.json([{ id: 1, title: 'hey' }]))
        )
    )

    render(<Posts />)

    expect(screen.getByTestId('preloader')).toBeInTheDocument()

    await waitFor(() => screen.getByRole('listitem'))

    expect(screen.getByRole('listitem')).toBeInTheDocument()
    expect(screen.queryByTestId('preloader')).toBeNull()
})
