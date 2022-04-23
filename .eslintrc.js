module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['airbnb', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['import', 'react', 'simple-import-sort', 'sort'],
    rules: {
        'import/no-extraneous-dependencies': [
            2,
            {
                devDependencies: [
                    '.storybook/**',
                    'postcss.config.*',
                    'webpack.config.*'
                ]
            }
        ],
        'import/prefer-default-export': 0,
        'import/order': 0,
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function'
            }
        ],
        'react/jsx-props-no-spreading': 0,
        'react/jsx-sort-props': [
            2,
            {
                callbacksLast: true,
                shorthandLast: true
            }
        ],
        'react/require-default-props': 0,
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // External packages
                    ['^@?\\w'],
                    // Internal packages
                    ['^(@|components)(/.*|$)'],
                    // Side effect imports
                    ['^\\u0000'],
                    // Parent imports. Put `..` last
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports
                    ['^.+\\.?(css)$']
                ]
            }
        ],
        'sort-keys': 2,
        'sort/destructuring-properties': 2,
        'typescript-sort-keys/interface': [
            2,
            'asc',
            { caseSensitive: true, natural: true, requiredFirst: true }
        ],
        'typescript-sort-keys/string-enum': [2, 'asc', { caseSensitive: false }]
    },
    overrides: [
        {
            files: ['*.test.js', '*.test.jsx', '*.test.ts', '*.test.tsx'],
            env: {
                jest: true
            }
        },
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'airbnb-typescript',
                'plugin:react/recommended',
                'prettier'
            ],
            plugins: ['@typescript-eslint', 'typescript-sort-keys'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: ['./tsconfig.json']
            },
            rules: {
                // It must be also specified under 'overrides' section to work with .ts(x) files
                'import/no-extraneous-dependencies': [
                    2,
                    {
                        devDependencies: [
                            '__mocks__/**',
                            '__tests__/**',
                            '**/*.stories.*'
                        ]
                    }
                ]
            }
        },
        {
            files: [
                '.eslintrc.*',
                'babel.config.*',
                'jest.config.*',
                'postcss.config.*',
                'webpack.config.*'
            ],
            rules: {
                'sort-keys': 0
            }
        }
    ]
}
