const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
    plugins: [
        autoprefixer,
        postcssNested,
        postcssPresetEnv({
            stage: 3
        })
    ],
    sourceMap: true
}
