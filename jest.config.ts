import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/libs/design-system'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.base.json',
      },
    ],
  },
  moduleNameMapper: {
    '^@ds$': '<rootDir>/libs/design-system/index.ts',
    '^@data-access$': '<rootDir>/libs/data-access/index.ts',
    '\\.(css|less|scss|sass)$': '<rootDir>/test/styleMock.ts',
  },
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
};

export default config;
