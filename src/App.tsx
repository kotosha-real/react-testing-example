import React from 'react';

import { Posts } from './components/Posts/Posts';

import './app.pcss';

// TODO: Вычитать всё ещё раз, удалить лишнее, залить на гитхаб
const App = () => {
    return (
        <div className="app">
            <Posts />
        </div>
    )
};

export { App };
