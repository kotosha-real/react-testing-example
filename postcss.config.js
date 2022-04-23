const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    sourceMap: true,
    plugins: [
        autoprefixer,
        postcssNested,
        postcssPresetEnv({
            stage: 3,
        }),
    ],
};
