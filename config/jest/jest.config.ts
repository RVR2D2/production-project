/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // automock: false,

  // bail: 0,

  // cacheDirectory: "C:\\Users\\tim\\AppData\\Local\\Temp\\jest",

  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  rootDir: '../../',
  // collectCoverage: false,

  // collectCoverageFrom: undefined,

  // coverageDirectory: undefined,

  // coverageProvider: "babel",

  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // coverageThreshold: undefined,

  // dependencyExtractor: undefined,

  // errorOnDeprecated: false,

  // forceCoverageMatch: [],

  // globalSetup: undefined,

  // globalTeardown: undefined,

  // globals: {},

  // maxWorkers: "50%",

  // moduleNameMapper: {},

  // modulePathIgnorePatterns: [],

  // notify: false,

  // notifyMode: "failure-change",

  // preset: undefined,

  // projects: undefined,

  // reporters: undefined,

  // resetMocks: false,

  // resetModules: false,

  // resolver: undefined,

  // restoreMocks: false,

  // roots: [
  //   "<rootDir>"
  // ],

  // runner: "jest-runner",

  // setupFiles: [],

  // setupFilesAfterEnv: [],

  // slowTestThreshold: 5,

  // snapshotSerializers: [],

  // testEnvironmentOptions: {},

  // testLocationInResults: false,

  // testPathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // testRegex: [],

  // testResultsProcessor: undefined,

  // testRunner: "jest-circus/runner",

  // testURL: "http://localhost",

  // timers: "real",

  // transform: undefined,

  // transformIgnorePatterns: [
  //   "\\\\node_modules\\\\",
  //   "\\.pnp\\.[^\\\\]+$"
  // ],

  // unmockedModulePathPatterns: undefined,

  // verbose: undefined,

  // watchPathIgnorePatterns: [],

  // watchman: true,
};
