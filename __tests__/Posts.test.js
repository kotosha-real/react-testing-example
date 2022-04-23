import React from 'react';
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { handlers } from '../__mocks__/handlers';
import { Posts } from '../src/components/Posts/Posts';

// TODO: Подумать стоит ли вынести моки хендлеров сюда
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads posts', async () => {
    render(<Posts />);

    expect(screen.getByTestId('preloader')).toBeInTheDocument();

    await waitFor(() => screen.getByRole('listitem'));

    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.queryByTestId('preloader')).toBeNull();
})
