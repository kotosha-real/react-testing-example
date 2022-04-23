module.exports = (api) => {
    const isTest = api.env('test')

    const config = {
        plugins: [],
        presets: [
            [
                '@babel/preset-env',
                {
                    corejs: 3,
                    targets: '> 0.25%, not dead',
                    useBuiltIns: 'usage'
                }
            ],
            '@babel/preset-react',
            '@babel/preset-typescript'
        ]
    }

    if (!isTest) {
        config.plugins.push([
            'react-remove-properties',
            { properties: ['data-testid'] }
        ])
    }

    return config
}
