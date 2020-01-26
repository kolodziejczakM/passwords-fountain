module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:react/recommended', // to avoid problems with jsx
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 0, // Sometimes defining something as any isn't that bad e.g. (document as any).getElementById('root')
        '@typescript-eslint/no-empty-interface': 0, // To have already pre-defined Props & State interfaces in boilerplate component code
        '@typescript-eslint/interface-name-prefix': 0, // I don't consider prefixing interfaces names with "I" bad thing
        'react/jsx-indent': 0, // no need to have different indentation in jsx itself
        'react/react-in-jsx-scope': 0, // We don't need react imports in preact
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
    settings: {
        react: {
            pragma: 'h', // to avoid problems with "h" defined but never used
            version: '16.9', // to avoid getting warnings about not defined react version in eslint-plugin-react settings
        },
    },
};
