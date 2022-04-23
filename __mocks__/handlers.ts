import { rest } from 'msw';

const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
        return res(ctx.json([{ id: 1, title: 'hey' }]));
    }),
];

export { handlers };
