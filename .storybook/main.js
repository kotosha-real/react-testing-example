module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y'
    ],
    framework: '@storybook/react',
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.pcss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        })
        return config
    },
    core: {
        builder: 'webpack5'
    }
}
