module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['<rootDir>/src/tests/*.test.js'],
    transformIgnorePatterns: ['/node_modules/'],
  };
  