/**
 * @author Benjamin Macher
 * @description Jest config for TypeScript projects.
 *
 * @dependencies
 * yarn add --dev jest @jest/globals ts-jest
 *
 * @commands
 * package.json
 * "scripts": [
 *   "test": "jest",
 *   "test:verbose": "jest --verbose",
 *   "test:coverage": "jest --coverage"
 *  ]
 */

const { resolve } = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: resolve('test'),
  coverageDirectory: resolve('coverage'),
  testMatch: [
    '**/?(*.)+(spec|test).ts',
  ],
};
