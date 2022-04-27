const nextJest = require('next/jest')

const createJestConfig = nextJest()

const customJestConfig = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  coveragePathIgnorePatterns: [
    'src/pages/_app.page.tsx',
    'src/pages/index.page.tsx',
    'src/pages/_document.page.tsx',
    'src/components/index.tsx',
    'src/components/atoms/Svg',
    'src/hooks/index.ts',
    'src/templates/index.ts',
    'src/utils/index.ts',
    'src/types',
    'src/libs',
    'src/services',
    'src/store',
    'src/theme',
    'src/styles',
    'stories.tsx',
    'types.ts'
  ]
}

module.exports = createJestConfig(customJestConfig)
