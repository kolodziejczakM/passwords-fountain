module.exports = {
    roots: ['<rootDir>/src'],
    verbose: true,
    transform: {
        '^.+\\.(t|j)sx?$': 'babel-jest',
        '^.+\\.svg$': 'jest-svg-transformer',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
    },
};
