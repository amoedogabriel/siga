export default {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(unit|int).[tj]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@business/(.*)': '<rootDir>/src/business/$1',
    '@data/(.*)': '<rootDir>/src/data/$1',
    '@infra/(.*)': '<rootDir>/src/infra/$1',
    '@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
};
