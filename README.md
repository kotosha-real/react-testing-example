# How to test React app

A simple and robust example of testing a React application and design systems for the Middle frontend course at Practicum

## Setup

Clone this repo and run

```js
npm i
```

Launch the project

```js
npm run dev
```

## App

App consists of `<Posts>` component that fetches data from placeholder api and renders the result

There is one integration test inside `__tests__` folder that uses [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/) and [`@msw`](https://mswjs.io/). Test config is inside [`jest.config.js`](https://jestjs.io/) file. You can run tests with the following command

```js
npm test
```

## Design system

Design system should be tested for accessibility flaws, 'cause it is widely used throughout the project

There is a [`storybook-addon-a11y`](https://storybook.js.org/addons/@storybook/addon-a11y/) installed, so you could easily find problems early in development. Launch storybook and look for them in the Accessibility tab

```js
npm run storybook
```
