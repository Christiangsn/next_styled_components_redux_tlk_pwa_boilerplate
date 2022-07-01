module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  fakeTimers: {
    enableGlobally: true
  },
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'src/pages/_app.page.tsx',
    'src/pages/index.page.tsx',
    'src/pages/_document.page.tsx',
    'src/components/index.tsx',
    'src/components/atoms/index.tsx',
    'src/components/molecules/index.tsx',
    'src/components/templates/index.tsx',
    'src/hooks/index.ts',
    'utils/providers',
    'src/utils/index.tsx',
    'src/types',
    'src/libs',
    'src/services',
    'src/http',
    'src/store',
    'src/theme',
    'src/mocks/index.ts',
    'src/globalStyles',
    'stories.tsx',
    'types.ts'
  ],
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/mocks/svg.ts'
  },
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: -10
    }
  }
}
