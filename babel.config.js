module.exports = (api) => {
    const isTest = api.env('test');

    const config = {
        presets: [
            [
                '@babel/preset-env',
                {
                    useBuiltIns: 'usage',
                    corejs: 3,
                    targets: '> 0.25%, not dead'
                }
            ],
            '@babel/preset-react',
            '@babel/preset-typescript'
        ],
        plugins: []
    };

    if (!isTest) {
        config.plugins.push(
            ['react-remove-properties', { properties: ['data-testid'] }]
        );
    }

    return config;
}
